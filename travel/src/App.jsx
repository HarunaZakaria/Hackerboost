import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Form from "./components/Form";

const initialItems = [
  // { id: 1, description: "Passports", quantity: 2, packed: false },
  // { id: 2, description: "Socks", quantity: 12, packed: true },
  // { id: 3, description: "Charger", quantity: 1, packed: true },
];
function App() {
  //acreate items
  const [items, setItems] = useState([]);

  //handle delete
  function deleteItem(id) {
    setItems((item) => items.filter((item) => item.id !== id));
  }

  //handle toggle items
  function toggleItem(id) {
    setItems((item) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  return (
    <>
      <div className="app">
        <Logo />
        <Form items={items} setItems={setItems} />
        <PackingList
          items={items}
          deleteItem={deleteItem}
          onToggle={toggleItem}
        />
        <Stats />
      </div>
    </>
  );
}

export default App;
