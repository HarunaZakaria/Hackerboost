function Product(props) {
  return (
    <div className="product">
      <div>
        <h2>{props.name}</h2>
        <img src={props.img} alt={props.name} className="product-img" />
        <p className="descriptions">{props.description}</p>
        <p><strong>Price:</strong> ${props.price}</p>
        <p><strong>Qty:</strong> {props.quantity}</p>
      </div>
    </div>
  );
}

export default Product;
