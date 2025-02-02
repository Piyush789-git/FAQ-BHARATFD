// ./config/db.js
import mongoose from "mongoose";

export const connectDB = async () => {  // Named export
  try {
    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/FAQ');
    console.log(`MongoDB connected\nHost is ${connection.connection.host}`);
  } catch (error) {
    console.error("Error connecting to database", error);
    throw new Error("Error connecting to database");
  }
};
