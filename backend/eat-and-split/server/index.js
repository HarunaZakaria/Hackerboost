import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import friendsModel from "./src/models/friends.js";
import catchAsync from "./src/utils/catchAsync.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());

//connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Connection error:", err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

//get all friends api
app.get(
  "/api/friends",
  catchAsync(async (req, res) => {
    const friends = await friendsModel.find();
    if (!friends) {
      res.status(404).json({
        status: "fail",
        message: "Friends not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: friends,
    });
  }),
);

// add new friend
app.post(
  "/api/friends",
  catchAsync(async (req, res) => {
    const friend = await friendsModel.create({
      name: req.body.name,
      image: `https://i.pravatar.cc/100?u=${Date.now()}`, // Unique avatar URL
    });
    res.status(201).json({
      status: "Success",
      data: { friend },
    });
  }),
);

//update balance
app.patch(
  "/api/friends/:id/balance",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const { balance } = req.body;
    const friend = await friendsModel.findByIdAndUpdate(
      id,
      { balance },
      { returnDocument: "after", runValidators: true },
      // { $inc: { balace: req.body.balace } },
      // { new: true, runValidators: true },
    );
    if (!friend) {
      return res.status(404).json({
        status: "fail",
        message: "Friend not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: [friend],
    });
  }),
);
//error handling
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
//listening port
app.listen(port, () => {
  console.log(`app running on port: ${port}`);
});
