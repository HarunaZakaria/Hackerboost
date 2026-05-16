import Button from "./Button";

export default function Friend({ friend, selectedFriend, onSelection }) {
  const { name, image, balance } = friend;
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{balance}</p>
        <Button onHandleClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </>
  );
}
