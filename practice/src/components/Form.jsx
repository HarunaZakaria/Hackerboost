import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ newItem, setNewItem }) {
  const [items, setItems] = useState({
    id: uuidv4(),
    name: "",
    price: 0,
  });

  //handleGroceryName
  function handleGroceryName(e) {
    e.preventDefault();
    setNewItem((newItem) => [...newItem, items]);
   setItems({
    id: uuidv4(),
    name: "",
    price: 0,
   })
  }
  return (
    <>
      <form onSubmit={handleGroceryName}>
        <h2>Buy your Groceries now</h2>
        <input
          type="text"
          placeholder="Grocesy..."
          onChange={(e) => setItems({ ...items, name: e.target.value })}
          name={items.name}
          value={items.name}
        />
        <input
          type="number"
          placeholder="Ghc"
          value={items.price}
          name={items.price}
          onChange={(e) => setItems({ ...items, price: e.target.value })}
        />
        <button>Add</button>
      </form>
    </>
  );
}
