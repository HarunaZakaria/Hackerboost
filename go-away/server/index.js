const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const itemModel = require("./src/models/items");
const catchAsync = require("./src/utils/catchAsync");

dotenv.config();

const port = process.env.port || 5000;
const app = express();
//const port = 5000;

//middlewares
app.use(cors());
app.use(express.json());

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
app.post(
  "/api/items",
  catchAsync(async (req, res) => {
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
      item: { item },
    });
  }),
);
app.get(
  "/api/items",
  catchAsync(async (req, res) => {
    const items = await itemModel.find();
    if (!items) {
      return res.status(404).json({
        status: "fail",
        message: "No item found",
      });
    }
    res.status(200).json({
      status: "success",
      data: { items },
    });
  }),
);
//toogle packed items
app.patch(
  "/api/items/:id",
  catchAsync(async (req, res) => {
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
      data: { item },
    });
  }),
);

//find item and delete
app.delete("/api/items/:id", async (req, res) => {
  try {
    const deleteItem = await itemModel.findByIdAndDelete(req.params.id);
    if (!deleteItem) {
      return res.status(404).json({
        status: "Fail",
        message: "Item not found",
      });
    }
    res.status(204).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
});
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
///listen on port
app.listen(port, () => {
  console.log(`App running on: http://localhost:${port}`);
});
