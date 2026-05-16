import Friend from "./Friend";

export default function FriendsList({ selectedFriend, onSelection, friends }) {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
          />
        ))}
      </ul>
    </>
  );
}
