const ProductTable = ({ products }) => {
  return (
    <>
      {products.items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  );
};

export default ProductTable;
