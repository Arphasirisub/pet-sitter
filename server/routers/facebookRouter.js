import { Router } from "express";
import supabase from "../utills/supabase.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { protect } from "../middlewares/protect.js";
export const facebookRouter = Router();
dotenv.config();

facebookRouter.post("/facebookLogin", async (req, res) => {
  try {
    async function signInWithFacebook() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "facebook",
      });

      if (error) {
        // Handle error
        return res.status(500).json({ error: error.message });
      }

      // Authentication successful
      return res.status(200).json({ data });
    }

    await signInWithFacebook();
  } catch (error) {
    // Handle unexpected errors
    console.error("Error:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});
