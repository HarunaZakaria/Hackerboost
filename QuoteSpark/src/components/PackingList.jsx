export default function PackingList() {
  return (
    <div>
      <h1>Harunzy School Packing List</h1>
      <ul>
        <Item name="Laptop" isPacked={true} />
        <Item name="Marker" isPacked={false} />
        <Item name="Lesson Plan" isPacked={true} />
        <Item name="Leson Notes" isPacked={false} />
        <Item name="Reading Books" isPacked={true} />
      </ul>
    </div>
  );
}

function Item({ name, isPacked }) {
  return <li className="item">{name} ✅</li>;
}
