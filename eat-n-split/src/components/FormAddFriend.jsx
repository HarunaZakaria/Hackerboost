import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = new Date();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={handleFormSubmit}>
        <label>Friend Name</label>
        <input
          type="text"
          placeholder="Friend name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label> Image Url</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
