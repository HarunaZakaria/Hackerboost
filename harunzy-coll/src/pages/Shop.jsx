import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import products, { categories } from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  function handleCategoryChange(catId) {
    setActiveCategory(catId);
    setSearchParams(catId === "all" ? {} : { category: catId });
  }

  return (
    <main className="shop-page">
      <div className="shop-header" id="shop-header">
        <h1>Shop All Sandals</h1>
        <p>Browse our entire collection of premium handcrafted sandals</p>
      </div>

      <div className="shop-controls" id="shop-controls">
        <div className="shop-search">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search sandals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            id="search-input"
          />
        </div>

        <div className="shop-filters">
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`pill ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            id="sort-select"
          >
            <option value="default">Sort by: Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Name: A-Z</option>
          </select>
        </div>
      </div>

      <div className="shop-results-info">
        <p>
          Showing <strong>{filteredProducts.length}</strong> of{" "}
          <strong>{products.length}</strong> products
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid" id="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state" id="no-results">
          <span className="empty-icon">🔍</span>
          <h3>No sandals found</h3>
          <p>Try adjusting your search or filter to find what you're looking for.</p>
          <button
            className="btn btn-outline"
            onClick={() => {
              setSearchQuery("");
              handleCategoryChange("all");
              setSortBy("default");
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </main>
  );
}

export default Shop;
