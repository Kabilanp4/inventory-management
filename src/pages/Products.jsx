import { useState } from "react";
import ProductTable from "../features/products/components/ProductTable";
import { useProducts } from "../features/products/hooks/useProducts";
import { useDebounce } from "../hooks/useDebounce";

function Products() {
  // Local states
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  //Tanstack Query states
  const {
    data: products,
    isLoading,
    error,
  } = useProducts({
    search: debouncedSearch,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;
  return (
    <>
      <div>
        <label>Search Product : </label>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            console.log("e.target.value", e.target.value);
            setSearch(e.target.value);
          }}
          placeholder="Search Product"
        />
      </div>
      <hr></hr>
      <ProductTable products={products}></ProductTable>;
    </>
  );
}

export default Products;
