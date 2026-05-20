import { useState } from "react";

export default function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleFormSUbmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = new Date();

    const newFriend = {
      id,
      image: `${image}?=${id}`,
      name,
      balace: 0,
    };
    onAddFriend(newFriend);
    console.log(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <>
      <form onSubmit={handleFormSUbmit}>
        <h3>Add a friend</h3>
        <label>Friend Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Image</label>
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
