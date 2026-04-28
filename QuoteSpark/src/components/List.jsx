import people from "../data";
import GetImgUrl from "../utils";
export default function List() {
  const listItem = people.map((person) => {
    <li key={person.id}>
      <img src={GetImgUrl} alt={person.name} />
      <p>
        <b>{person.name}: </b>
        {" " + person.profession + " "}
        Known for {person.accomplishment}
      </p>
    </li>;
  });
  console.log(listItem);
  return (
    <div>
      <h1>Scientist</h1>
      <ul>{listItem}</ul>
    </div>
  );
}
