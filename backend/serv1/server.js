const express = require("express");
const app = express();
const port = 5000;

// Pizza data - same pizzas from the Pizza Menu project!
const pizzas = [
  {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with Italian olive oil and rosemary",
    price: 6,
    soldOut: false,
    photoName: "focaccia.jpg",
  },
  {
    id: 2,
    name: "Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    soldOut: false,
    photoName: "margherita.jpg",
  },
  {
    id: 3,
    name: "Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    soldOut: false,
    photoName: "spinaci.jpg",
  },
  {
    id: 4,
    name: "Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    soldOut: false,
    photoName: "funghi.jpg",
  },
  {
    id: 5,
    name: "Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    soldOut: true,
    photoName: "salamino.jpg",
  },
  {
    id: 6,
    name: "Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    soldOut: false,
    photoName: "prosciutto.jpg",
  },
];

//root route
app.get("/", (req, res) => {
  res.send("Hello Harunzy at Hackerboost");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

//get a pizza by id not working for now
app.get("/api/pizzas/:id", (req, res) => {
  const pizzaId = req.params.id;
  const pizza = pizzas.find((p) => p.id === parseInt(pizzaId));
  if (!pizza) {
    return res.status(404).json({
      message: "Pizza not found",
    });
    res.status(200).json(pizza);
  }

  res.json({
    status: true,
    pizza: pizza,
  });
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

//get all pizzas
app.get("/api/pizzas", (req, res) => {
  res.json({
    status: "success",
    total: pizzas.length,
    pizzas: pizzas,
  });
});

//listen
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
