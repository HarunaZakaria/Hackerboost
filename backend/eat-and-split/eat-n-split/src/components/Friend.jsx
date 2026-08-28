import Button from "./Button";

export default function Friend({ friend, selectedFriend, onSelection }) {
  const { name, image, balance } = friend;
  const isSelected = selectedFriend?._id === friend._id;
  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img src={image} alt={name} className="image" />
        <h3>{name}</h3>
        <p>Your balance: {balance}</p>
        <Button onHandleClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </>
  );
}
