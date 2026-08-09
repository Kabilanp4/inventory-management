const ProductTable = ({ products }) => {
  return (
    <>
      {products.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  );
};

export default ProductTable;
