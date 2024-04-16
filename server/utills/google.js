import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();
// Your client ID, client secret, and redirect URI
const clientId = process.env.GOOGLE_ID;
const clientSecret = process.env.GOOGLE_SECRET;
const redirectUri = "http://localhost:4000/google/callback";

// Create an OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  redirectUri
);

export default oAuth2Client;
