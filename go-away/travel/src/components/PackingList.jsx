import Item from "./Item";

export default function PackingList({
  items,
  deleteItem,
  onToggle,
  onClearList,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item._id}
            deleteItem={deleteItem}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <button onClick={onClearList}>Clear List</button>
    </div>
  );
}
