import { Router } from "express";
import supabase from "../utills/supabase.js";
import { protect } from "../middlewares/protect.js";

export const ownersRouter = Router();

ownersRouter.get("/myProfile", protect, async (req, res) => {
  const ownerId = req.userId;

  try {
    console.log(ownerId);
    const owner = await supabase
      .from("owners")
      .select("*")
      .eq("id", ownerId)
      .single();

    if (owner.length === 0) {
      return res.status(404).json({ error: "Owner not found" });
    }

    res.json({ data: owner });
  } catch (error) {
    console.error("Error fetching owner:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

ownersRouter.get("/", async (req, res) => {
  try {
    const data = await supabase.from("owners").select("*");
    res.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ownersRouter.get("/:id", async (req, res) => {
//   try {
//     const ownerId = req.params.id;
//     const { data, error } = await supabase
//       .from("owners")
//       .select("*")
//       .eq("id", ownerId)
//       .single(); // Assuming you expect a single record based on the route

//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }

//     res.status(200).json({ data });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

ownersRouter.put("/myProfile", protect, async (req, res) => {
  try {
    const ownerId = req.userId;
    const { full_name, email, phone, profile_img, birthday } = req.body;
    console.log(profile_img, birthday);
    // Check if required fields are present
    if (!full_name || !email || !phone || !profile_img || !birthday) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Update owner information in the database
    const { data, error } = await supabase
      .from("owners")
      .update({
        full_name,
        email,
        phone,
        profile_img,
        created_at: new Date().toISOString(),
        birthday,
      })
      .eq("id", ownerId)
      .single();

    // Check for errors during the update
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // Return the updated owner information
    res.status(200).json({ message: "Data has been update !" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
