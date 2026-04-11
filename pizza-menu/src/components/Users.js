function User(props) {
  return (
    <duv>
      <img src={props.image} alt="profile" />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </duv>
  );
}
