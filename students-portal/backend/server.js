//import packages
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentsRoutes.js";

dotenv.config();

//create app
const app = express();

//middle ware
app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Students Portal API Running");
});

//connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
