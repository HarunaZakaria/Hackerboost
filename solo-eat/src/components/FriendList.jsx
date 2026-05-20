import Friend from "./Friend";

export default function FriendList({ friends, selectedFriend, onSelection }) {
  return (
    <>
      {friends.map((friend, index) => (
        <Friend
          key={index}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </>
  );
}
