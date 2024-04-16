import { Router } from "express";
import supabase from "../utills/supabase.js";
import { protect } from "../middlewares/protect.js";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SEND_GRID_KEY);

export const bookingsRouter = Router();

bookingsRouter.get("/sitterHomepage", protect, async (req, res) => {
  const id = req.userId;
  try {
    // Fetch bookings data with an additional column "pets" for the count
    const { data: bookings, error: bookingsError } = await supabase
      .from("bookings")
      .select(
        "*,owners(full_name), pet_bookings:pet_booking(booking_id,pet_id(*))"
      )
      .eq("sitter_id", id)
      .order("created_at", { ascending: false });

    if (bookingsError) {
      console.error("Error fetching bookings data:", bookingsError.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Calculate pets count, format booked date, and calculate duration for each booking
    const bookingsWithFormattedDate = bookings.map((booking) => {
      const petsCount = booking.pet_bookings ? booking.pet_bookings.length : 0;

      // Format booked start and stop date
      const formattedStartDate = new Date(booking.booked_start).toLocaleString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );
      const formattedStopDate = new Date(booking.booked_stop).toLocaleString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );
      const bookedDate = `${formattedStartDate} - ${formattedStopDate}`;

      // Calculate duration
      const startDateTime = new Date(booking.booked_start);
      const stopDateTime = new Date(booking.booked_stop);
      const durationInMilliseconds = stopDateTime - startDateTime;
      const durationInHours = durationInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours

      return {
        ...booking,
        pets: petsCount,
        booked_date: bookedDate,
        duration: durationInHours, //.toFixed(2) << Limit to 2 decimal places
      };
    });

    res.json(bookingsWithFormattedDate);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

bookingsRouter.get("/mybookings", protect, async (req, res) => {
  const id = req.userId;
  try {
    const { data: bookings, error: bookingsError } = await supabase
      .from("bookings")
      .select(
        "*,owners(full_name,profile_img), sitters(profile_img,full_name,trade_name,phone), pet_booking(pet_id(pet_name))"
      )
      .eq("owner_id", id)
      .order("created_at", { ascending: false });

    if (bookingsError) {
      console.error("Error fetching bookings data:", bookingsError.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Iterate over bookings to calculate duration and format
    const bookingsWithDuration = bookings.map((booking) => {
      // Calculate duration
      const startDateTime = new Date(booking.booked_start);
      const stopDateTime = new Date(booking.booked_stop);
      const durationInMilliseconds = stopDateTime - startDateTime;
      const durationInHours = durationInMilliseconds / (1000 * 60 * 60);
      const durationInMinutes = (durationInHours % 1) * 60; // Extract minutes
      const fractionalHours = (durationInMinutes / 60).toFixed(1); // Convert minutes to fraction of an hour

      // Format start and stop dates
      const startDate = startDateTime.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });

      const stopDate = stopDateTime.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });

      const startTime = startDateTime.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      const stopTime = stopDateTime.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      // Combine formatted start and stop dates with times
      const bookedDate = `${startDate} - ${stopDate}`;
      const bookedTime = `${startTime} - ${stopTime}`;

      // Format transaction date
      const transactionDate = new Date(booking.created_at).toLocaleString(
        "en-US",
        {
          weekday: "short",
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      );

      return {
        ...booking,
        duration: `${Math.floor(durationInHours)}.${
          fractionalHours.split(".")[1]
        } hours`,
        transaction_date: transactionDate,
        booked_time: bookedTime,
        booked_date: bookedDate,
        stop_book_date: stopDate,
        stop_book_time: stopTime,
      };
    });

    res.json(bookingsWithDuration);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

bookingsRouter.post("/myBooking/:id", protect, async (req, res) => {
  const sitterId = req.params.id;
  const ownerId = req.userId;
  const {
    start,
    end,
    pets,
    price,
    message,
    payment,
    payment_id,
    payment_status,
  } = req.body;

  try {
    // Insert data into the 'bookings' table
    const { data: bookingData, error: bookingError } = await supabase
      .from("bookings")
      .insert([
        {
          sitter_id: sitterId,
          owner_id: ownerId,
          booked_start: start,
          booked_stop: end,
          price: price,
          status: "Waiting for confirm",
          message: message,
          payment: payment,
          payment_id: payment_id,
          payment_status: payment_status,
        },
      ]);

    if (bookingError) {
      throw bookingError;
    }

    // Retrieve the ID of the inserted booking
    const { data: insertedBooking, error: selectError } = await supabase
      .from("bookings")
      .select("id")
      .eq("owner_id", ownerId)
      .eq("booked_start", start)
      .eq("booked_stop", end)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (selectError) {
      throw selectError;
    }

    const bookingId = insertedBooking.id;

    // Insert data into the 'pet_booking' table
    const petBookingData = pets.map((pet) => ({
      pet_id: pet.id, // Assuming each pet object in the pets array has an 'id' property
      booking_id: bookingId,
    }));

    const { error: petBookingError } = await supabase
      .from("pet_booking")
      .insert(petBookingData);

    if (petBookingError) {
      throw petBookingError;
    }

    // Fetch the sitter's email, latitude, and longitude from the Supabase table
    const { data: sitterData, error: sitterError } = await supabase
      .from("sitters")
      .select("email, latitude, longitude")
      .eq("id", sitterId)
      .single();

    if (sitterError) {
      throw sitterError;
    }

    const { email, latitude, longitude } = sitterData;

    // Construct link to add event to Google Calendar
    const startDate = new Date(start); // Assuming `start` is a date object
    const endDate = new Date(end);

    const options = { timeZone: "Asia/Bangkok" }; // Set Thailand time zone
    const displayStartDate = startDate.toLocaleString("en-US", options);
    const displayEndDate = endDate.toLocaleString("en-US", options);
    const formattedStartDate = startDate
      .toISOString()
      .replace(/-|:|\.\d+/g, "");
    const formattedEndDate = endDate.toISOString().replace(/-|:|\.\d+/g, "");

    const googleCalendarLink = `https://calendar.google.com/calendar/u/0/r/eventedit?text=Pet+Sitting&dates=${formattedStartDate}/${formattedEndDate}&details=${message}&location=${latitude},${longitude}`;

    // Send an email invitation to the sitter
    const msg = {
      to: email,
      from: "peerawet1996@gmail.com",
      subject: "New Booking Alert",
      html: `<p>Hello,</p><p>You have a new booking request. Please log in to your account to review and confirm.</p>
       <p><strong>Booking Details:</strong></p>
       <ul>
           <li>Date & Time: ${displayStartDate} to ${displayEndDate}</li>
           <li>Price: ${price}</li>
           <li>Message: ${message}</li>
       </ul>
       <p>To accept the booking and add it to your Google Calendar, please <a href="${googleCalendarLink}">click here</a>.</p>`,
    };

    await sgMail.send(msg);

    res.status(200).json({ bookingId: bookingId });
  } catch (error) {
    console.error("Error inserting data into bookings table:", error);
    res.status(500).send("Internal Server Error");
  }
});

bookingsRouter.put("/cancel/:id", async (req, res) => {
  const bookingId = Number(req.params.id);
  // console.log(bookingId);

  try {
    const { data, error } = await supabase
      .from("bookings")
      .update({ status: "Canceled" })
      .eq("id", bookingId);

    if (error) {
      throw new Error(error.message);
    }

    return res.status(200).json({ message: "Booking canceled successfully" });
  } catch (err) {
    console.error("Error canceling booking:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

bookingsRouter.get("/myBookingResult/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Fetch bookings data with an additional column "pets" for the count
    const { data: bookings, error: bookingsError } = await supabase
      .from("bookings")
      .select(
        "*,sitter_id(id,full_name,trade_name),owners(full_name), pet_bookings:pet_booking(booking_id,pet_id(pet_name)) "
      )
      .eq("id", id);

    if (bookingsError) {
      console.error("Error fetching bookings data:", bookingsError.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Calculate pets count, format booked date, and calculate duration for each booking
    const bookingsWithFormattedDate = bookings.map((booking) => {
      const petsCount = booking.pet_bookings ? booking.pet_bookings.length : 0;

      // Format booked start and stop date
      const formattedStartDate = new Date(booking.booked_start).toLocaleString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );
      const formattedStopDate = new Date(booking.booked_stop).toLocaleString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );
      const bookedDate = `${formattedStartDate} - ${formattedStopDate}`;

      // Calculate duration
      const startDateTime = new Date(booking.booked_start);
      const stopDateTime = new Date(booking.booked_stop);
      const durationInMilliseconds = stopDateTime - startDateTime;
      const durationInHours = durationInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours

      return {
        ...booking,
        pets: petsCount,
        booked_date: bookedDate,
        duration: durationInHours, //.toFixed(2) << Limit to 2 decimal places
      };
    });

    res.json(bookingsWithFormattedDate);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

bookingsRouter.get("/:id", async (req, res) => {
  const bookedId = req.params.id;

  try {
    // Fetch bookings data with an additional column "pets" for the count
    const { data: booking, error: bookingError } = await supabase
      .from("bookings")
      .select(
        "owners(full_name,*), pet_bookings:pet_booking(booking_id,pet_id(*)),*"
      )
      .eq("id", bookedId)
      .single();

    if (bookingError) {
      console.error("Error fetching booking data:", bookingError.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Calculate pets count, format booked date, and calculate duration
    const petsCount = booking.pet_bookings ? booking.pet_bookings.length : 0;
    const formattedStartDate = new Date(booking.booked_start).toLocaleString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }
    );
    const formattedStopDate = new Date(booking.booked_stop).toLocaleString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }
    );
    const bookedDate = `${formattedStartDate} - ${formattedStopDate}`;
    const startDateTime = new Date(booking.booked_start);
    const stopDateTime = new Date(booking.booked_stop);
    const durationInMilliseconds = stopDateTime - startDateTime;
    const durationInHours = durationInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours

    const formattedBirthday = new Date(booking.owners.birthday).toLocaleString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );
    const formattedCreatAt = new Date(booking.created_at).toLocaleString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }
    );

    const bookingWithFormattedDate = {
      ...booking,
      created_at: formattedCreatAt,
      pets: petsCount,
      booked_date: bookedDate,
      duration: durationInHours.toFixed(2),
      owners: {
        ...booking.owners,
        birthday: formattedBirthday,
      },
    };

    res.json(bookingWithFormattedDate);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

bookingsRouter.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Fetch bookings data with an additional column "pets" for the count
    const { data: bookings, error: bookingsError } = await supabase
      .from("bookings")
      .select(
        "*,sitter_id(id,full_name,trade_name),owners(full_name), pet_bookings:pet_booking(booking_id,pet_id(pet_name)) "
      )
      .eq("sitter_id", id);

    if (bookingsError) {
      console.error("Error fetching bookings data:", bookingsError.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Calculate pets count, format booked date, and calculate duration for each booking
    const bookingsWithFormattedDate = bookings.map((booking) => {
      const petsCount = booking.pet_bookings ? booking.pet_bookings.length : 0;

      // Format booked start and stop date
      const formattedStartDate = new Date(booking.booked_start).toLocaleString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );
      const formattedStopDate = new Date(booking.booked_stop).toLocaleString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );
      const bookedDate = `${formattedStartDate} - ${formattedStopDate}`;

      // Calculate duration
      const startDateTime = new Date(booking.booked_start);
      const stopDateTime = new Date(booking.booked_stop);
      const durationInMilliseconds = stopDateTime - startDateTime;
      const durationInHours = durationInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
      const formattedBirthday = new Date(
        booking.owners.birthday
      ).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      const formattedCreatAt = new Date(booking.created_at).toLocaleString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );

      const bookingWithFormattedDate = {
        ...booking,
        created_at: formattedCreatAt,
        pets: petsCount,
        booked_date: bookedDate,
        duration: durationInHours.toFixed(2),
        owners: {
          ...booking.owners,
          birthday: formattedBirthday,
        },
      };

      return {
        ...booking,
        pets: petsCount,
        booked_date: bookedDate,
        duration: durationInHours, //.toFixed(2) << Limit to 2 decimal places
      };
    });

    res.json(bookingsWithFormattedDate);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

bookingsRouter.delete("/:id", async (req, res) => {
  const bookingId = req.params.id;

  try {
    // Check if the booking exists
    const { data: booking } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", bookingId)
      .single();

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Delete the booking
    const { error } = await supabase
      .from("bookings")
      .delete()
      .eq("id", bookingId);

    if (error) {
      console.error("Error deleting booking:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.status(204).end(); // No content, successful deletion
  } catch (error) {
    console.error("Error deleting booking:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

bookingsRouter.put("/:id", async (req, res) => {
  const bookingId = Number(req.params.id);
  const statusChange = req.body.status;

  try {
    const { data, error } = await supabase
      .from("bookings")
      .update({ status: statusChange })
      .eq("id", bookingId);

    if (error) {
      throw new Error(error.message);
    }

    return res.status(200).json({ message: "Booking updated successfully" });
  } catch (err) {
    console.error("Error canceling booking:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
