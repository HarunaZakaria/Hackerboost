import { useState } from "react";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Header from "./components/Header";

function App() {
  const [newItem, setNewItem] = useState([]);

  //handle delete
  function handleDelete(id) {
    setNewItem((item) => newItem.filter((item) => item.id !== id));
  }
  return (
    <>
      <Header />
      <Form newItem={newItem} setNewItem={setNewItem} />
      <GroceryList newItem={newItem} deleteItem={handleDelete} />
    </>
  );
}

export default App;
