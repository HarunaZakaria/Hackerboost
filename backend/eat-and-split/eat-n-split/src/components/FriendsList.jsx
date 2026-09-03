import Friend from "./Friend";

export default function FriendsList({ selectedFriend, onSelection, friends }) {
  friends.map((friend) => {
    console.log(friend._id);
  });

  return (
    <>
      <ul className="list">
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend._id}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
          />
        ))}
      </ul>
    </>
  );
}
