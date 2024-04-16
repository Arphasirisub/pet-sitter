import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
// dotenv.config() is a method provided by the dotenv package in Node.js.
//It is used to load environment variables from a file named .env into the Node.js process.
//The .env file typically contains key-value pairs of environment variables.

//The dotenv.config() function looks for the .env file in the current working directory
//of your Node.js process. The current working directory is typically the directory
//from which you launch your Node.js application.

export const protect = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Token has invalid format",
    });
  }

  const tokenWithoutBearer = token.split(" ")[1];

  jwt.verify(tokenWithoutBearer, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(401).json({
        message: "Token is invalid",
      });
    }

    // Extract user ID from payload
    const userId = payload.id;

    // Set userId on req object
    req.userId = userId;

    next();
  });
};
