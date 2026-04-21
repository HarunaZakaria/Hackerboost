import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  function handleWhatsAppCheckout() {
    if (cartItems.length === 0) return;
    let msg = "Hi! I'd like to place an order:\n\n";
    cartItems.forEach((item, i) => {
      msg += `${i + 1}. ${item.name} — Size: EU ${item.selectedSize}, Qty: ${item.qty}, $${item.price * item.qty}\n`;
    });
    msg += `\n💰 Total: $${cartTotal}\n\nPlease confirm. Thank you!`;
    window.open(`https://wa.me/233545771497?text=${encodeURIComponent(msg)}`, "_blank");
  }

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-state">
          <span className="empty-icon">🛒</span>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven&apos;t added any sandals yet.</p>
          <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <button className="btn btn-ghost" onClick={clearCart}>Clear Cart</button>
      </div>

      <div className="cart-layout">
        <div className="cart-items" id="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={`${item.id}-${item.selectedSize}`}>
              <Link to={`/product/${item.id}`} className="cart-item-img-link">
                <img src={item.imgUrl} alt={item.name} className="cart-item-img" />
              </Link>
              <div className="cart-item-info">
                <Link to={`/product/${item.id}`} className="cart-item-name">{item.name}</Link>
                <span className="cart-item-meta">Size: EU {item.selectedSize}</span>
                <span className="cart-item-price">${item.price}</span>
              </div>
              <div className="cart-item-qty">
                <button className="qty-btn" onClick={() => updateQuantity(item.id, item.selectedSize, item.qty - 1)}>−</button>
                <span className="qty-value">{item.qty}</span>
                <button className="qty-btn" onClick={() => updateQuantity(item.id, item.selectedSize, item.qty + 1)}>+</button>
              </div>
              <div className="cart-item-total">${item.price * item.qty}</div>
              <button className="cart-item-remove" onClick={() => removeFromCart(item.id, item.selectedSize)} aria-label="Remove item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary" id="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row"><span>Subtotal</span><span>${cartTotal}</span></div>
          <div className="summary-row"><span>Shipping</span><span>{cartTotal >= 200 ? "Free" : "$15"}</span></div>
          <div className="summary-divider"></div>
          <div className="summary-row total"><span>Total</span><span>${cartTotal >= 200 ? cartTotal : cartTotal + 15}</span></div>
          {cartTotal < 200 && <p className="free-shipping-note">Add ${200 - cartTotal} more for free shipping!</p>}
          <button className="btn btn-primary btn-lg btn-full" onClick={handleWhatsAppCheckout} id="checkout-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Checkout via WhatsApp
          </button>
          <Link to="/shop" className="btn btn-outline btn-full">Continue Shopping</Link>
        </div>
      </div>
    </main>
  );
}

export default CartPage;
