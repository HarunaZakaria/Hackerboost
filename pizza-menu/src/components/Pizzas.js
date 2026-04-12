function Pizza(props) {
  return (
    <div>
        <div className="pizza">
      <img src={props.image} alt="Pizza" />
      <div>
        <h3>{props.name}</h3>
      <p>{props.description}</p>
      <span>{props.price}</span>
      </div>
    </div>
    </div>
  );
}

export default Pizza;
