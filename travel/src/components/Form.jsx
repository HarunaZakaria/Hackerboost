import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ items, setItems }) {
  //handle form submit
  const [newItem, setNewItem] = useState({
    id: uuidv4(),
    quantity: 1,
    description: "",
  });

  //handle submit
  function handleSubmit(e) {
    e.preventDefault();
    setItems((items) => [...items, newItem]);
    setNewItem({
      id: uuidv4(),
      quantity: 1,
      description: "",
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>What do you need for you trip?</h3>
        <select
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.vaue })}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num}>{num}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item...."
          value={newItem.description}
          onChange={(e) =>
            setNewItem({ ...newItem, description: e.target.value })
          }
        />
        <button>Add</button>
      </form>
    </div>
  );
}
