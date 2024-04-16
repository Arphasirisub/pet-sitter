import { Router } from "express";
import supabase from "../utills/supabase.js";
import { protect } from "../middlewares/protect.js";

export const commentsRouter = Router();

commentsRouter.get("/myPost", protect, async (req, res) => {
  const owner_id = req.userId;
  const sitter_id = req.query.sitter_id;
  const booking_id = Number(req.query.booking_id);

  // Validate the input parameters
  if (!sitter_id || !booking_id) {
    return res
      .status(400)
      .json({ error: "Sitter ID and Booking ID are required" });
  }

  try {
    const { data, error } = await supabase
      .from("comments")
      .select("*,owners(profile_img,full_name)")
      .eq("owner_id", owner_id)
      .eq("sitter_id", sitter_id)
      .eq("booking_id", booking_id);

    if (error) {
      console.error("Error fetching data:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    data.forEach((comment) => {
      const dateStr = comment.created_at;
      const date = new Date(dateStr);
      const options = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      };
      comment.created_at = date.toLocaleDateString("en-US", options);
    });

    res.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

commentsRouter.post("/myPost/:sitterId", protect, async (req, res) => {
  const owner_id = req.userId;
  const sitter_id = req.params.sitterId;
  const { content, rating, booking_id } = req.body;

  if (!content || !rating) {
    return res.status(400).json({ error: "Content and rating are required" });
  }

  try {
    const { data, error } = await supabase.from("comments").insert({
      content: content,
      rating: rating,
      owner_id: owner_id,
      sitter_id: sitter_id,
      booking_id: booking_id,
    });

    const { update, errorUpdate } = await supabase
      .from("bookings")
      .update({
        review: true,
      })
      .eq("id", booking_id);

    if (error) {
      return console.log(error);
    }
    res.json({ message: "Review submitted successfully" });
  } catch (error) {
    console.error("Error fetching data from 'pets' table:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
