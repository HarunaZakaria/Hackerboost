
function Product(props) {
  return (
    <div className="product">
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} className="product-img" />
      <p>{props.price}</p>
      <p>{props.quantity}</p>
    </div>
  );
}

export default Product;
