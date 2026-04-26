import { useState } from "react";

export default function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  // handle input text change
  function handleInputText(event) {
    const newInputText = event.target.value;
    setDescription(newInputText);
  }

  // handle quantity change
  function handleQuantity(event) {
    const newQuantity = event.target.value;
    setQuantity(Number(newQuantity));
  }

  //handle form submit

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    console.log(newItem);
  }
  return (
    <>
      <form>
        <h2>What do you need for your trip?</h2>
        <div>
          <select
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantity}
          >
            {Array.from({ length: 20 }, (_, i) => i + 0).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Item ...."
            value={description}
            onChange={handleInputText}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Add</button>
        </div>
      </form>
    </>
  );
}
