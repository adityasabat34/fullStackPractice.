import { app } from "./app.js";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env", // path is the location of the env file
});

(async () => {
  try {
    await connectDB();
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`⚙️ Server is running at port: ${port}`);
    });
  } catch (err) {
    console.error("MongoDB connection failed", err);
    process.exit(1);
  }
})();
// another sample for DB connection

// connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
// })
