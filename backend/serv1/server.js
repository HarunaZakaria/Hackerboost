const dotenv = require("dotenv");
const express = require("express");
// const crypto = require("crypto");
const { mongo, default: mongoose } = require("mongoose");

const pizzaModel = require("./src/models/pizza.model");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//middle wear
app.use(express.json());

//connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Connection error:", err));

// Pizza data - same pizzas from the Pizza Menu project!
// const pizzas = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with Italian olive oil and rosemary",
//     price: 6,
//     soldOut: false,
//     photoName: "focaccia.jpg",
//   },
//   {
//     name: "Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     soldOut: false,
//     photoName: "margherita.jpg",
//   },
//   {
//     name: "Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     soldOut: false,
//     photoName: "spinaci.jpg",
//   },
//   {
//     name: "Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     soldOut: false,
//     photoName: "funghi.jpg",
//   },
//   {
//     name: "Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     soldOut: true,
//     photoName: "salamino.jpg",
//   },
//   {
//     name: "Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     soldOut: false,
//     photoName: "prosciutto.jpg",
//   },
// ];

//root route
app.get("/", (req, res) => {
  res.send("Hello Harunzy at Hackerboost");
});

//create a pizza
app.post("/api/pizzas", async (req, res) => {
  try {
    const newPizza = await pizzaModel.create(req.body);
    res.status(200).json({
      status: true,
      pizza: newPizza,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
});

//get a pizza by name
app.get("/api/pizzas/:name", (req, res) => {
  const pizzaName = req.params.name;
  const pizza = pizzas.find((p) => p.name === pizzaName);

  if (!pizza) {
    res.status(404).json({
      status: false,
      message: "Pls check the name very well",
      pizza: {},
    });
  }
  res.status(200).json({
    status: true,
    pizza: pizza,
  });
});

//get all pizzas from database
app.get("/api/pizzas", async (req, res) => {
  const pizzas = await pizzaModel.find();
  res.json({
    status: "success",
    total: pizzas.length,
    pizzas: pizzas,
  });
});

//get pizza price less than $10
app.get("/api/pizza/cheap", async (req, res) => {
  try {
    const cheapPizza = await pizzaModel.find({ price: { $lte: 10 } });
    res.status(201).json({
      status: "Success",
      pizza: cheapPizza,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
});

// sort pizza in ascending order
app.get("/api/sort", async (req, res) => {
  try {
    const sortPizza = await pizzaModel.find().sort({ price: 1 });
    res.status(201).json({
      status: "succes",
      pizza: sortPizza,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
});

//update data
app.patch("/api/pizza/:id", async (req, res) => {
  try {
    const pizza = await pizzaModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidator: true,
    });
    if (!pizza) {
      return res
        .status(404)
        .json({ status: "fail", message: "Pizza not found" });
    }
    res.status(201).json({ status: "Success", pizza: pizza });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
});
//listen
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
