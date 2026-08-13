import { useState, useEffect } from "react";
import "./App.css";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Form from "./components/Form";

function App() {
  //acreate items
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErro] = useState(null);

  //fetch items from api
  useEffect(function () {
    async function fetchItems() {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/items");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setItems(data.data);
      } catch (error) {
        setErro(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchItems();
  }, []);

  //handle add item
  async function handleAddItem(newItem) {
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
    setItems((item) => [...items, data.data]);
  }

  //handle delete
  async function deleteItem(id) {
    const response = await fetch(`http://localhost:5000/api/items/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    setItems((item) => items.filter((item) => item._id !== id));
  }

  //handle toggle items
  async function toggleItem(_id) {
    const response = await fetch(`http://localhost:5000/api/items/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    setItems((item) =>
      items.map((item) => (item._id === _id ? data.data : item)),
    );
  }

  //handleClearList
  function handleClearList() {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (confirm) setItems([]);
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
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
