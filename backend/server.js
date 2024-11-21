import express from "express";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({
  path: "./.env", // path is the location of the env file
});

connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // origin means where the request is coming from
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json()); // Parses incoming request bodies with JSON payloads and converts them to JavaScript objects
// that can be accessed via req.body.
app.use(cookieParser()); // // Parses cookies from incoming requests and makes them available in req.cookies
const port = process.env.PORT || 5500;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/info", (req, res) => {
  const contactInfo = [
    { id: 1, name: "Aditya", age: 30, lastName: "Sabat" },
    { id: 2, name: "Aditya", age: 30, lastName: "Sabat" },
    { id: 3, name: "Aditya", age: 30, lastName: "Sabat" },
  ];
  // res.json(contactInfo)
  res.send(contactInfo);
});

app.listen(port, () => {
  console.log(`Server is listening on ${port} `);
});
