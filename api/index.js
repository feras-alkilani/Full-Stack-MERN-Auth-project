import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 50000 // تحديد المهلة بـ 5 ثوانٍ
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const app = express();

app.use(express.json());

app.use("/api/user", userRoutes); // Moved above app.listen
app.use("/api/auth", authRoutes); // Moved above app.listen

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
