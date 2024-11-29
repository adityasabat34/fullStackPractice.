import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // origin means where the request is coming from
    credentials: true,
  })
);

app.use(express.json()); // for requesting body parsing
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Returns middleware that only parses urlencoded bodies
app.use(cookieParser()); // Parses cookies from incoming requests and makes them available in req.cookies
app.use(express.static("public")); // This is a built-in middleware function in Express. It serves static files and is based on serve-static.

//All Routes Import
import userRouter from "./src/routes/userRoute.js";

app.use("/api/v1/users", userRouter);

export { app };
