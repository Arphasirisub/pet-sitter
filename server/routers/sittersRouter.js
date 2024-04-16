import { Router } from "express";
import supabase from "../utills/supabase.js";
import { protect } from "../middlewares/protect.js";

export const sittersRouter = Router();

sittersRouter.get("/sitterProflie", protect, async (req, res) => {
  const id = req.userId;

  try {
    const { data, error } = await supabase
      .from("sitters")
      .select("*,comments(*,owner_id(full_name,profile_img))")
      .eq("id", id);
    // .eq("is_active", true);

    if (error) {
      console.error("Error fetching data:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ error: "Sitter not found" });
    }

    const singleObject = data[0]; // Extract the first object from the array

    res.json(singleObject);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

sittersRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from("sitters")
      .select("*,comments(*,owner_id(full_name,profile_img))")
      .eq("id", id)
      .eq("is_active", true);

    if (error) {
      console.error("Error fetching data:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ error: "Sitter not found" });
    }

    const singleObject = data[0]; // Extract the first object from the array

    res.json(singleObject);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

sittersRouter.get("/", async (req, res) => {
  const experienceRange = req.query.experience;
  const fullName = req.query.full_name;
  // const district = req.query.full_name;
  const rating = Number(req.query.rating);
  const dog = req.query.dog === "true";
  const cat = req.query.cat === "true";
  const bird = req.query.bird === "true";
  const rabbit = req.query.rabbit === "true";

  try {
    let query = supabase.from("sitters").select("*").eq("is_active", true);
    // .ilike("full_name", `%${fullName}%`)
    // .ilike("district", `%${district}%`);

    if (experienceRange) {
      let [minExp, maxExp] = experienceRange.split("-");

      // Convert minExp and maxExp to numeric values
      minExp = parseFloat(minExp);
      maxExp = maxExp === "+" ? 9999 : parseFloat(maxExp);

      // Check if minExp and maxExp are valid numbers
      if (isNaN(minExp) || isNaN(maxExp)) {
        return res.status(400).json({ error: "Invalid experience range" });
      }

      // Assume you want to filter experiences within the provided range
      query = query.gte("experience", minExp).lte("experience", maxExp);
    }

    if (fullName) {
      query = query.ilike("full_name", `%${fullName}%`);
    }
    // else if(district) {
    //   query = query.ilike("district", `%${district}%`);
    // }

    if (!isNaN(rating) && rating >= 1 && rating <= 5) {
      // Add filter for rating if it's a valid number between 1 and 5
      query = query.eq("rating", rating);
    }

    // Filter by pet types using boolean values
    if (dog) {
      query = query.eq("dog", true);
    }

    if (cat) {
      query = query.eq("cat", true);
    }

    if (bird) {
      query = query.eq("bird", true);
    }

    if (rabbit) {
      query = query.eq("rabbit", true);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching data:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json({ data });
  } catch (error) {
    console.error("Unexpected error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

sittersRouter.get("/booking/payoutOption", protect, async (req, res) => {
  const sitterId = req.userId;
  // console.log(sitterId);
  try {
    // Fetch bookings data with an additional column "pets" for the count
    const { data: bookings, error: bookingsError } = await supabase
      .from("bookings")
      .select(
        "*,sitter_id(id,full_name,trade_name,bank_name,bank_numbers),owners(full_name), pet_bookings:pet_booking(booking_id,pet_id(pet_name)) "
      )
      .eq("sitter_id", sitterId);

    if (bookingsError) {
      console.error("Error fetching bookings data:", bookingsError.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ error: sitterId });
    }

    // Filter bookings with status "Success"
    const successBookings = bookings.filter(
      (booking) => booking.status === "Success"
    );

    // Calculate total price
    const totalPrice = successBookings.reduce(
      (total, booking) => total + booking.price,
      0
    );

    // Send total price in response
    res.json({ totalPrice, successBookings });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

sittersRouter.put("/myProfile", protect, async (req, res) => {
  try {
    const sitterId = req.userId;
    const {
      full_name,
      experience,
      phone,
      introduction,
      trade_name,
      dog,
      cat,
      bird,
      rabbit,
      service,
      my_place,
      profile_img,
      image_gallery,
      address_detail,
      sub_district,
      district,
      province,
      post_code,
      latitude,
      longitude,
      is_active,
    } = req.body;
    console.log(req.body);
    const { data, error } = await supabase
      .from("sitters")
      .update({
        full_name,
        experience,
        phone,
        introduction,
        trade_name,
        dog,
        cat,
        bird,
        rabbit,
        service,
        my_place,
        profile_img,
        image_gallery,
        address_detail,
        sub_district,
        district,
        province,
        post_code,
        latitude,
        longitude,
        is_active,
      })
      .eq("id", sitterId)
      .single();

    res.status(200).json({ message: "Data has been update !" });

    if (error) {
      return res.status(500).json({ error: error.message });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

sittersRouter.post("/myGallery", protect, async (req, res) => {
  try {
    const sitterId = req.userId;
    const { image } = req.body; // Assuming the request body contains the image object to delete

    const { data, error } = await supabase
      .from("sitters")
      .update()
      .eq("id", sitterId);
    res.status(200).json({ message: "Successfully deleted gallery." });

    if (error) {
      return res.status(500).json({ error: error.message });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
