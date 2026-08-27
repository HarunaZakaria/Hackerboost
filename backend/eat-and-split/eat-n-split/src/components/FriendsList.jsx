import Friend from "./Friend";

export default function FriendsList({ selectedFriend, onSelection, friends }) {
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
