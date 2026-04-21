import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0]);
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card"
      id={`product-card-${product.id}`}
    >
      <div className="product-card-img-wrap">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />
        {discount > 0 && (
          <span className="product-card-badge">-{discount}%</span>
        )}
        <button
          className="product-card-cart-btn"
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>
      <div className="product-card-info">
        <span className="product-card-category">{product.category}</span>
        <h3 className="product-card-name">{product.name}</h3>
        <div className="product-card-rating">
          <span className="stars">
            {"★".repeat(Math.floor(product.rating))}
            {product.rating % 1 >= 0.5 ? "½" : ""}
          </span>
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-card-price">
          <span className="current-price">GH₵{product.price}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">GH₵{product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
