export default function Item({ item }) {
  const { description, quantity, packed } = item;
  return (
    <div>
      <li>
        <input type="checkbox" />
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          {quantity} {description}
        </span>
        <button>Delete</button>
      </li>
    </div>
  );
}
