import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const port = 5000;

//connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Connection error:", err));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log(`app running on port: ${port}`);
});
