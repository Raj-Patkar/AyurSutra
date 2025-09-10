import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // your existing DB connection
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();

// Middleware
app.use(cors());              // allow frontend → backend
app.use(express.json());      // parse JSON requests
app.use("/api/auth", authRoutes);  // routes


// Connect to MongoDB (your existing code)
connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000; //5173
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


console.log("MONGO_URI from env:", process.env.MONGO_URI);