import express from "express";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({
  path: "./.env",
});

connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());
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
