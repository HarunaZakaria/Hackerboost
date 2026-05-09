import { useState } from "react";
//import Form from "./components/Form";
//import GroceryList from "./components/GroceryList";
import Header from "./components/Header";
import StepMessage from "./components/StepMessage";

function App() {
  const [newItem, setNewItem] = useState([]);

  //handle delete
  function handleDelete(id) {
    setNewItem((item) => newItem.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header />
      {/* <Form newItem={newItem} setNewItem={setNewItem} />
      <GroceryList newItem={newItem} deleteItem={handleDelete} /> */}
      <StepMessage step={1}>
        <p>Leaning children props now</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Practing children props now</p>
      </StepMessage>
    </>
  );
}

export default App;
