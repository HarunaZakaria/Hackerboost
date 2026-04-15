export default function SearchBar() {
  return (
    <div>
      <form action="#" className="form">
        <input
          type="text"
          name="search-text"
          placeholder="Search... "
          required
        />
        <div className="check-box">
          <input type="checkbox" />
          <p>Only show products in stock</p>
        </div>
      </form>
    </div>
  );
}
