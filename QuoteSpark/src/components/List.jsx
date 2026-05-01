import { useState } from "react";
import people from "../data";
import GetImgUrl from "../utils";

export default function List() {
  const [specialist, setSpecialist] = useState("");

  //handle chemist click
  function handleChemist() {
    const name = "chemist";
    setSpecialist(name);
    console.log(specialist);
  }
  //handle mathematician click
  function handleMathematician() {
    setSpecialist("mathematician");
    console.log(specialist);
  }
  //handle Phsicians click
  function handlePhsician() {
    setSpecialist("Phsician");
    console.log(specialist);
  }
  return (
    <div>
      <h1>Scientist</h1>
      <div className="specilist-btns">
        <button onClick={handleChemist}>Chemist</button>
        <button onClick={handleMathematician}>Mathematicians</button>
        <button onClick={handlePhsician}>Phsicians</button>
      </div>
      <ul>
        {people.map((person) => (
          <div key={person.id}>
            <h2 key={person.id}> {person.name}</h2>
            <p>{person.profession}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
