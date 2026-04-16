export default function SearchBar({ filterText, inStockOnly }) {
  return (
    <div>
      <form action="#" className="form">
        <input
          type="text"
          name="search-text"
          placeholder="Search... "
          value={filterText}
          required
        />
        <div className="check-box">
          <input type="checkbox" checked={inStockOnly} />
          <p>Only show products in stock</p>
        </div>
      </form>
    </div>
  );
}
