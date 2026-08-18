import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import friendsModel from "./src/models/friends";

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

//get all friends api
app.get("/api/friends", async (req, res) => {
  try {
    const friends = await friendsModel.find();
    if (!friends) {
      res.status(404).json({
        status: "fail",
        message: "Friends not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: { friends },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

// add new friend
app.post("/api/friends", async (req, res) => {
  try {
    const friend = await friendsModel.create({
      name: req.body.name,
      image: `https://i.pravatar.cc/100?u=${Date.now()}`, // Unique avatar URL
    });
    res.status(201).json({
      status: "Success",
      data: { friend },
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
});

//update balance
app.patch("/api/friends/:id/balace", async (req, res) => {
  try {
    const friend = await friendsModel.findByIdAndUpdate(
      req.params.id,
      { $inc: { balace: req.body.amount } },
      { new: true, runValidators: true },
    );
    if (!friend) {
      return res.status(404).json({
        status: "fail",
        message: "Friend not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: { friend },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
});
app.listen(port, () => {
  console.log(`app running on port: ${port}`);
});
