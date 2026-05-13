import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  //handle add friends click
  function handleAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onHandleClick={handleAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

export default App;
