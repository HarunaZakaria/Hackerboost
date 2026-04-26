import { useState } from "react";

export default function Form() {
  const [newItem, setNewItem] = useState({
    quantity: 0,
    description: "",
  });
  //handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log(newItem);
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
