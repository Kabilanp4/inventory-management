import { useState } from "react";
import ProductForm from "../features/products/components/ProductForm";
import ProductTable from "../features/products/components/ProductTable";
import { useProducts } from "../features/products/hooks/useProducts";
import { useDebounce } from "../hooks/useDebounce";

function Products() {
  // Local states
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const [page, setPage] = useState(1);
  const limit = 10;
  //Tanstack Query states
  const { data, isLoading, error } = useProducts({
    search: debouncedSearch,
    page,
    limit,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;
  return (
    <>
      <ProductForm />
      <div>
        <label>Search Product : </label>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search Product"
        />
      </div>
      <hr></hr>
      <ProductTable products={data}></ProductTable>;
      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <span>
          Page {page} of {data.totalPages || 1}{" "}
        </span>
        <button
          disabled={page === data.totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Products;
