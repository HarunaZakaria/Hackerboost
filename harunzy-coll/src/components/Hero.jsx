import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="hero-section">
      <div className="hero-bg">
        <img
          src="/images/hero-banner.png"
          alt="Premium sandals collection"
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <span className="hero-badge">New Collection 2026</span>
        <h1 className="hero-title">
          Walk in <span className="hero-accent">Comfort</span> &amp; Style
        </h1>
        <p className="hero-subtitle">
          Discover premium handcrafted sandals designed for the modern lifestyle.
          Unmatched quality, timeless design.
        </p>
        <div className="hero-actions">
          <Link to="/shop" className="btn btn-primary" id="hero-shop-btn">
            Shop Now
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to="/shop" className="btn btn-outline" id="hero-explore-btn">
            Explore Collection
          </Link>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">500+</span>
            <span className="hero-stat-label">Happy Customers</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">7</span>
            <span className="hero-stat-label">Premium Styles</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">4.8</span>
            <span className="hero-stat-label">Avg. Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
