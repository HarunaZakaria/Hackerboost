import { useState, useEffect } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";
import initialFriends from "./data";
import Header from "./components/Header";

function App() {
  const [friends, setFriends] = useState([]);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // fetch friends from the server
  useEffect(function () {
    async function fetchItems() {
      try {
        const response = await fetch("http://localhost:5000/api/friends");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setFriends(data.data);
        console.log(data.data);
      } catch (error) {
        setErro(error.message);
      }
    }

    fetchItems();
  }, []);

  //handle add friends click
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  //handle selected friend
  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  //handle split bill
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id == selectedFriend.id
          ? { ...friend, balace: friend.balance + value }
          : friend,
      ),
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <Header />
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelectedFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onHandleClick={handleAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
