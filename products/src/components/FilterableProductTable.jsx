import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./Search";

export default function FilterableProductTable({ products }) {
  const [filterTex, setFilterText] = useState("Fruits");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar filterTex={filterTex} inStockOnly={inStockOnly} />
      <ProductTable
        products={products}
        filterTex={filterTex}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
