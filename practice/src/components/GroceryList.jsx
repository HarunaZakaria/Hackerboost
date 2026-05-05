import List from "./List";

export default function GroceryList({ newItem, deleteItem }) {
  return (
    <>
      {newItem.map((grocery) => (
        <div key={grocery.id}>
          <List
            name={grocery.name}
            price={grocery.price}
            bought={grocery.bought}
            id={() => deleteItem(grocery.id)}
          />
        </div>
      ))}
    </>
  );
}
