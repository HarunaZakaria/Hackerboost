import { useState } from "react";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Header from "./components/Header";

const Groceries = [
  {
    id: 1,
    name: "Cabbage",
    price: 20,
  },
  {
    id: 2,
    name: "Carrote",
    price: 15,
  },
  {
    id: 3,
    name: " Tomatoes",
    price: 25,
  },
  {
    id: 4,
    name: " Pepper",
    price: 10,
  },
  {
    id: 5,
    name: "Onion",
    price: 5,
  },
];

function App() {
  const [newItem, setNewItem] = useState([]);
  return (
    <>
      <Header />
      <Form newItem={newItem} setNewItem={setNewItem} />
      <GroceryList  newItem={newItem} />
    </>
  );
}

export default App;
