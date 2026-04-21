import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { Link } from "react-router-dom";

function Home() {
  const featured = products.filter((p) => p.isFeatured);
  const popular = products.filter((p) => p.isPopular);

  return (
    <main className="home-page">
      <Hero />

      {/* Features Strip */}
      <section className="features-strip" id="features-strip">
        <div className="feature-item">
          <span className="feature-icon">🚚</span>
          <div>
            <strong>Free Delivery</strong>
            <p>On orders over Ghc1000</p>
          </div>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🔄</span>
          <div>
            <strong>Easy Returns</strong>
            <p>30-day return policy</p>
          </div>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🛡️</span>
          <div>
            <strong>Genuine Quality</strong>
            <p>100% authentic products</p>
          </div>
        </div>
        <div className="feature-item">
          <span className="feature-icon">💬</span>
          <div>
            <strong>WhatsApp Support</strong>
            <p>Chat with us anytime</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" id="featured-products">
        <div className="section-header">
          <div>
            <span className="section-tag">Handpicked for You</span>
            <h2 className="section-title">Featured Collection</h2>
          </div>
          <Link to="/shop" className="btn btn-outline-sm">
            View All →
          </Link>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="promo-banner" id="promo-banner">
        <div className="promo-content">
          <span className="promo-tag">Limited Time Offer</span>
          <h2>Up to 20% Off All Sandals</h2>
          <p>
            Use code <strong>HARUNZY20</strong> at checkout via WhatsApp for
            exclusive discounts on your favourite styles.
          </p>
          <Link to="/shop" className="btn btn-primary">
            Shop the Sale
          </Link>
        </div>
      </section>

      {/* Popular Products */}
      <section className="section" id="popular-products">
        <div className="section-header">
          <div>
            <span className="section-tag">Trending Now</span>
            <h2 className="section-title">Most Popular</h2>
          </div>
          <Link to="/shop" className="btn btn-outline-sm">
            View All →
          </Link>
        </div>
        <div className="product-grid">
          {popular.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-us" id="why-choose-us">
        <div className="section-header center">
          <span className="section-tag">Why Harunzy</span>
          <h2 className="section-title">Crafted for Comfort</h2>
        </div>
        <div className="why-us-grid">
          <div className="why-us-card">
            <span className="why-us-icon">🌿</span>
            <h3>Natural Materials</h3>
            <p>
              Cork-latex footbeds, genuine leather, and sustainable materials
              that are kind to your feet and the planet.
            </p>
          </div>
          <div className="why-us-card">
            <span className="why-us-icon">✨</span>
            <h3>Premium Craftsmanship</h3>
            <p>
              Each pair is carefully crafted with attention to detail, ensuring
              lasting durability and timeless style.
            </p>
          </div>
          <div className="why-us-card">
            <span className="why-us-icon">🦶</span>
            <h3>Orthopedic Design</h3>
            <p>
              Anatomically shaped footbeds with deep heel cups and arch support
              for unmatched walking comfort.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
