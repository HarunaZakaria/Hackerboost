import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <main className="product-detail-page">
        <div className="empty-state">
          <span className="empty-icon">😕</span>
          <h3>Product not found</h3>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </main>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  function handleAddToCart() {
    if (!selectedSize) { alert("Please select a size"); return; }
    for (let i = 0; i < qty; i++) addToCart(product, selectedSize);
  }

  function handleBuyNow() {
    if (!selectedSize) { alert("Please select a size"); return; }
    addToCart(product, selectedSize);
    navigate("/cart");
  }

  function handleWhatsApp() {
    const baseUrl = window.location.origin;
    const imageUrl = `${baseUrl}${product.imgUrl}`;
    const msg = encodeURIComponent(
      `Hi! I'd like to order from Harunzy Collection 👟\n\n` +
      `🛒 *${product.name}*\n` +
      `📏 Size: EU ${selectedSize || "(not selected)"}\n` +
      `🔢 Qty: ${qty}\n` +
      `💰 Price: GHC${product.price * qty}\n\n` +
      `🖼️ Product Image: ${imageUrl}\n\n` +
      `Please confirm availability. Thank you!`
    );
    window.open(`https://wa.me/233545771497?text=${msg}`, "_blank");
  }

  return (
    <main className="product-detail-page">
      <nav className="breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/shop">Shop</Link><span>/</span><span className="current">{product.name}</span></nav>
      <div className="product-detail" id="product-detail">
        <div className="product-detail-gallery">
          <div className="product-detail-main-img">
            <img src={product.imgUrl} alt={product.name} />
            {discount > 0 && <span className="product-card-badge">-{discount}%</span>}
          </div>
        </div>
        <div className="product-detail-info">
          <span className="product-detail-category">{product.category}</span>
          <h1 className="product-detail-name">{product.name}</h1>
          <div className="product-detail-rating">
            <span className="stars">{"★".repeat(Math.floor(product.rating))}</span>
            <span className="rating-value">{product.rating}</span>
            <span className="rating-count">({product.reviews} reviews)</span>
          </div>
          <div className="product-detail-price">
            <span className="current-price">Ghc{product.price}</span>
            {product.originalPrice > product.price && (<><span className="original-price">Ghc{product.originalPrice}</span><span className="discount-tag">Save {discount}%</span></>)}
          </div>
          <p className="product-detail-desc">{product.description}</p>
          <div className="product-detail-section">
            <h4>Select Size {selectedSize && <span className="selected-label">— EU {selectedSize}</span>}</h4>
            <div className="size-grid">{product.sizes.map((s) => (<button key={s} className={`size-btn ${selectedSize === s ? "active" : ""}`} onClick={() => setSelectedSize(s)}>{s}</button>))}</div>
          </div>
          <div className="product-detail-section">
            <h4>Available Colors</h4>
            <div className="color-tags">{product.colors.map((c) => (<span key={c} className="color-tag">{c}</span>))}</div>
          </div>
          <div className="product-detail-section">
            <h4>Quantity</h4>
            <div className="qty-selector">
              <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span className="qty-value">{qty}</span>
              <button className="qty-btn" onClick={() => setQty(Math.min(product.quantity, qty + 1))}>+</button>
              <span className="qty-stock">{product.quantity} in stock</span>
            </div>
          </div>
          <div className="product-detail-actions">
            <button className="btn btn-primary btn-lg" onClick={handleAddToCart} id="add-to-cart-btn">Add to Cart</button>
            <button className="btn btn-accent btn-lg" onClick={handleBuyNow} id="buy-now-btn">Buy Now</button>
          </div>
          <button className="whatsapp-order-btn" onClick={handleWhatsApp} id="whatsapp-order-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order via WhatsApp
          </button>
          <div className="product-detail-features"><h4>Features</h4><ul>{product.features.map((f, i) => (<li key={i}>{f}</li>))}</ul></div>
        </div>
      </div>
      {related.length > 0 && (
        <section className="section" id="related-products">
          <div className="section-header"><div><span className="section-tag">You May Also Like</span><h2 className="section-title">Related Products</h2></div></div>
          <div className="product-grid">{related.map((p) => (<ProductCard key={p.id} product={p} />))}</div>
        </section>
      )}
    </main>
  );
}

export default ProductDetail;
