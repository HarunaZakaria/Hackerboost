export default function Item({ item, deleteItem, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        // checked={Boolean(item.packed)}
        checked={item.packed}
        onChange={() => onToggle(item._id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item._id)} className="button">
        X
      </button>
    </li>
  );
}
