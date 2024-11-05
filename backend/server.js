import express from "express";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDB();

const app = express();
const port = 3000;

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
