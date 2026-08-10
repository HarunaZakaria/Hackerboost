const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const item = require("./src/models/items");
const itemModel = require("./src/models/items");

dotenv.config();

const port = process.env.port || 5000;
const app = express();
//const port = 5000;

//connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Connection error:", err));

//root route
app.get("/", (req, res) => {
  res.send("Hello");
});

//create an Item
app.post("/api/items", async (req, res) => {
  try {
    const item = await itemModel.create({
      description: req.body.description,
      quantity: req.body.quantity,
    });

    if (!item) {
      res.status(404).json({
        status: "fail",
        message: "item not created",
      });
    }
    res.status(201).json({
      status: "success",
      item: item,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
});
//toogle packed items
app.patch("/api/items/:id", async (req, res) => {
  try {
    const currentItem = await itemModel.findById(req.params.id);
    if (!currentItem) {
      res.status(404).json({
        status: "fail",
        message: "Item not found",
      });
    }
    const item = await itemModel.findByIdAndUpdate(
      req.params.id,
      { packed: !currentItem.packed },
      { new: true },
    );
    res.status(201).json({
      status: "Success",
      data: item,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
});

///listen on port
app.listen(port, () => {
  console.log(`App running on: http://localhost:${port}`);
});
