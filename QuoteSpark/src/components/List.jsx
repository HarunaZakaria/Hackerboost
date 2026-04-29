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
  return (
    <div>
      <h1>Scientist</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}> {person.name}</li>
        ))}
      </ul>
    </div>
  );
}
