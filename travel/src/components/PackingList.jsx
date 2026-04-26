import Item from "./Item";

export default function PackingList({ initialItems }) {

  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}

        
      </ul>
    </div>
  );
}
