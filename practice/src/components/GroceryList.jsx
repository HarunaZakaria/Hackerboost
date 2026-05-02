import List from "./List";

export default function GroceryList({newItem}) {
  return (
    <>

        {newItem.map((grocery) =>(
            <div key={grocery.id}>
                <List name={grocery.name} price={grocery.price}/>
            </div>
        ))}
      
    </>
  );
}
