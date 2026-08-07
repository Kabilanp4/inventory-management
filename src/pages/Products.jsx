import { useProducts } from "../features/products/hooks/useProducts";

function Products() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;
  return <h1>Dashboard</h1>;
}

export default Products;
