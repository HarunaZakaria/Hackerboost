import { useState } from "react";

export default function List(props) {
  const [isBought, setIsBought] = useState(false);
  return (
    <>
      <div className="list">
        <p>
          {props.name} <span>Ghc{props.price}</span>
        </p>
        <button onClick={props.id}>X</button>
      </div>
    </>
  );
}
