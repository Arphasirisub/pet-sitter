import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { ownersRouter } from "./routers/ownerRouter.js";
import { authenticationRouter } from "./routers/authenticationRouter.js";
import { bookingsRouter } from "./routers/bookingsRouter.js";
import { sittersRouter } from "./routers/sittersRouter.js";
import { petsRouter } from "./routers/petsRouter.js";
import { facebookRouter } from "./routers/facebookRouter.js";
import { commentsRouter } from "./routers/commentsRouter.js";
import { googleRouter } from "./routers/googleRouter.js";
import { paymentRouter } from "./routers/paymentRouter.js";

function init() {
  dotenv.config();

  const app = express();
  const port = 4000;

  app.use(cors());
  app.use(bodyParser.json());

  app.get("/", (req, res) => {
    res.send("Hello supabase");
  });

  app.use("/owners", ownersRouter);
  app.use("/authentication", authenticationRouter);
  app.use("/bookings", bookingsRouter);
  app.use("/sitters", sittersRouter);
  app.use("/pets", petsRouter);
  app.use("/facebook", facebookRouter);
  app.use("/comments", commentsRouter);
  app.use("/google", googleRouter);
  app.use("/payments", paymentRouter);
  app.use(bodyParser.json({ limit: "35mb" }));

  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: "35mb",
      parameterLimit: 50000,
    })
  ),
    app.use((err, req, res, next) => {
      if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        res.status(400).json({ error: "Invalid JSON payload" });
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

init();
