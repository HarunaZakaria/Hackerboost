export default function List(props) {
  return (
    <>
      <div className="list">
        <input type="checkbox" />
        <p>
          {props.name} <span>Ghc{props.price}</span>
        </p>
        <button onClick={props.id}>X</button>
      </div>
    </>
  );
}
