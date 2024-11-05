import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstant = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log(
      `MONDODB connected and host: ${connectionInstant.connection.host}`
    );
  } catch (err) {
    console.log("MONGODB connection failed", err);
    process.exit(1);
  }
};

export default connectDB;
