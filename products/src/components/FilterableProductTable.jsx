import ProductTable from "./ProductTable";
import SearchBar from "./Search";

export default function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
