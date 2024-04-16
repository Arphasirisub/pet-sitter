import { Router } from "express";
import supabase from "../utills/supabase.js";
import { protect } from "../middlewares/protect.js";

export const petsRouter = Router();

// petsRouter.get("/ownerPet",protect, async (req, res) => {
//   try {
//     const ownerId = req.userId
//     const { data, error } = await supabase
//       .from("pets")
//       .select("*")
//       .eq("owner_id", ownerId)
//       .order("createdAt", { ascending: false }); // Sort by createdAt in descending order

//     if (error) {
//       throw error; // Throw an error to be caught by the catch block
//     }

//     // Send the fetched data back to the client
//     res.json({ data });
//   } catch (error) {
//     // Handle errors
//     console.error("Error fetching data from 'pets' table:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

petsRouter.get("/getpet/:petid", async (req, res) => {
  try {
    const petId = req.params.petid; // Retrieve the 'petid' parameter from the request URL
    const { data, error } = await supabase
      .from("pets")
      .select("*")
      .eq("id", petId)
      .single(); // Fetch the pet data based on the 'id' column

    if (error) {
      throw error; // Throw an error to be caught by the catch block
    }

    // Send the fetched data back to the client
    res.json({ data });
  } catch (error) {
    // Handle errors
    console.error("Error fetching data from 'pets' table:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

petsRouter.post("/:id", async (req, res) => {
  try {
    const owner_id = req.params.id;
    const newPost = { ...req.body, created_at: new Date(), owner_id };

    // Insert data into 'pets' table
    const { data, error } = await supabase
      .from("pets")
      .insert([newPost], { returning: "minimal" });

    if (error) {
      throw error; // Throw an error to be caught by the catch block
    }

    res.status(201).json({ message: "Pet created successfully" }); // Sending success response
  } catch (error) {
    console.error("Error creating pet:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

petsRouter.put("/:id", async (req, res) => {
  try {
    const petId = req.params.id;
    const updatedPetData = { ...req.body };
    // , updated_at: new Date()
    // Update data in 'pets' table
    const { data, error } = await supabase
      .from("pets")
      .update(updatedPetData)
      .eq("id", petId);

    if (error) {
      throw error; // Throw an error to be caught by the catch block
    }

    res.status(200).json({ message: "Pet updated successfully" }); // Sending success response
  } catch (error) {
    console.error("Error updating pet:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

petsRouter.delete("/:id", async (req, res) => {
  try {
    const petId = req.params.id;

    // Delete data from 'pets' table
    const { data, error } = await supabase
      .from("pets")
      .update({ isDeleted: true })
      .eq("id", petId);

    if (error) {
      throw error; // Throw an error to be caught by the catch block
    }

    res.status(200).json({ message: "Pet deleted successfully" }); // Sending success response
  } catch (error) {
    console.error("Error deleting pet:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

petsRouter.get("/myPets", protect, async (req, res) => {
  try {
    const ownerId = req.userId;
    const { data, error } = await supabase
      .from("pets")
      .select("*")
      .eq("owner_id", ownerId)
      .eq("isDeleted", false)
      .order("created_at", { ascending: false }); // Sort by createdAt in descending order

    if (error) {
      console.error("Error fetching data:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Check if response has already been sent before sending another one
    if (!res.headersSent) {
      res.json({ data });
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
