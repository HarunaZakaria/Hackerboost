export default function Stats({ items }) {
  //number of items
  const numOfItems = items.length;

  //number of  items packed
  const itemsPacked = items.filter((item) => item.packed).length;

  //percentsge of items packed
  const percentage = Math.floor((itemsPacked / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You've got everyting from your list"
          : `You have ${numOfItems} on your list and you have packed ${itemsPacked} (${percentage})`}

      </em>
    </footer>
  );
}
