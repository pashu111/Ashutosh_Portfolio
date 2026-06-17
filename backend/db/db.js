import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.warn(
      "Database connection skipped: add MONGO_URI to backend/.env with your MongoDB connection string."
    );
    return;
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error(`Database connection failed: ${error.message}`);
    console.error(
      "Check that MONGO_URI in backend/.env is your exact MongoDB Atlas connection string and that your Atlas network access allows your IP."
    );
  }
};
