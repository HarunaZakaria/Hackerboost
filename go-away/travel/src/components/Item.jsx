export default function Item({ item, deleteItem, onToggle }) {
  const { description, quantity, packed } = item;
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggle(item._id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => deleteItem(item._id)} className="button">
        X
      </button>
    </li>
  );
}
