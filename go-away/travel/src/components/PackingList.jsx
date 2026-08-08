import Item from "./Item";

export default function PackingList({
  items,
  deleteItem,
  onToggle,
  onClearList,
}) {
  //console.log("This is from Packing list" + newItem);
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <Item
            item={item}
            key={index}
            deleteItem={deleteItem}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <button onClick={onClearList}>Clear List</button>
    </div>
  );
}
