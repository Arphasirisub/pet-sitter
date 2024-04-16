import { Router } from "express";
import supabase from "../utills/supabase.js";
import dotenv from "dotenv";
import oAuth2Client from "../utills/google.js";
import { protect } from "../middlewares/protect.js";
import { google } from "googleapis";
export const googleRouter = Router();
dotenv.config();

const scopes = ["https://www.googleapis.com/auth/calendar"];

googleRouter.get("/", async (req, res) => {
  const url = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
  res.redirect(url);
});

googleRouter.get("/callback/", async (req, res) => {
  const code = req.query.code;
  console.log(code);

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    return res.send({ msg: "You have successfully connect calendar" });
  } catch (error) {
    console.error("Error exchanging authorization code for tokens:", error);
    res.status(500).send("Error exchanging authorization code for tokens");
  }
});

googleRouter.post("/googleLogin", async (req, res) => {
  try {
    async function signInWithGoogle() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        // Handle error
        return res.status(500).json({ error: error.message });
      }

      // Authentication successful
      return res.status(200).json({ data });
    }

    await signInWithGoogle();
  } catch (error) {
    // Handle unexpected errors
    console.error("Error:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});

googleRouter.post("/schedule_event/:id", async (req, res) => {
  const sitterId = req.params.id;
  const { start, end, pets, price, message, payment } = req.body;

  try {
    const { data: sitterData, error: sitterError } = await supabase
      .from("sitters")
      .select("email, latitude, longitude")
      .eq("id", sitterId)
      .single();

    if (sitterError) {
      throw sitterError;
    }

    const { email, latitude, longitude } = sitterData;
    // Assuming `calendar` is initialized somewhere in your code
    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

    // Define event details
    const event = {
      summary: "Pet Appointment", // Event title
      description: message, // Event description
      start: {
        // Start time of the event (in UTC ISO format)
        dateTime: new Date(start).toISOString(), // Convert timestamp to ISO string
        timeZone: "Asia/Bangkok", // Time zone of the start time
      },
      end: {
        // End time of the event (in UTC ISO format)
        dateTime: new Date(end).toISOString(), // Convert timestamp to ISO string
        timeZone: "Asia/Bangkok", // Time zone of the end time
      },
      location: `Latitude: ${latitude}, Longitude: ${longitude}`, // Location of the appointment
    };

    // Insert the event into the user's primary calendar
    const response = await calendar.events.insert({
      calendarId: "primary", // 'primary' refers to the user's primary calendar
      requestBody: event,
    });

    console.log("Event created: %s", response.data.htmlLink); // Log the URL of the created event

    res.status(200).send("Event scheduled successfully."); // Send response to the client
  } catch (error) {
    console.error("Error scheduling event:", error);
    res.status(500).send("Error scheduling event."); // Send error response to the client
  }
});
