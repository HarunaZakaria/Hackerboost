import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ items, setItems }) {
  const [newItem, setNewItem] = useState({
    //id: uuidv4(),
    quantity: 1,
    description: "",
  });

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
      setItems((items) => [...items, data.data]);
      setNewItem({
        quantity: 1,
        description: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
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
