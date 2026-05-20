import { use, useState } from "react";
import initialFriends from "./data";
import FriendList from "./components/FriendList";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelecetedFriend] = useState(null);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleSelectedFriend(friend) {
    setSelecetedFriend((currentFriend) =>
      currentFriend?.id === friend.id ? null : friend,
    );
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setSelecetedFriend((showAddFriend) => !showAddFriend);
  }
  return (
    <>
      <h1>Solo Eat</h1>
      <FriendList
        friends={friends}
        selectedFriend={selectedFriend}
        onSelection={handleSelectedFriend}
      />
      {showAddFriend && <AddFriendForm onAddFriend={handleAddFriend} />}
      <Button onHandleClick={handleAddFriend}>
        {showAddFriend ? "Close" : "Add Friend"}
      </Button>
    </>
  );
}

export default App;
