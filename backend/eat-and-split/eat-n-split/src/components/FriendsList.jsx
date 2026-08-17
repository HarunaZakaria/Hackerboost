import Friend from "./Friend";

export default function FriendsList({ selectedFriend, onSelection, friends }) {
  return (
    <>
      <ul>
        {friends.map((friend, index) => (
          <Friend
            friend={friend}
            key={index}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
          />
        ))}
      </ul>
    </>
  );
}
