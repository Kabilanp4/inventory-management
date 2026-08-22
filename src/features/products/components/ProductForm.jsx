import { useState } from "react";
import { useCreateProduct } from "../hooks/useProducts";
const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    quantity: "",
  });

  console.log("useCreateProduct", useCreateProduct());

  const { mutate, isPending, error } = useCreateProduct();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        setFormData({
          name: "",
          brand: "",
          category: "",
          price: "",
          quantity: "",
        });
      },
    });
  };

  const handleFormUpdate = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form>
      <div>
        <label>Name : </label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData["name"]}
          onChange={(e) => handleFormUpdate(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label>Brand : </label>
        <input
          type="text"
          placeholder="Brand"
          name="brand"
          value={formData["brand"]}
          onChange={(e) => handleFormUpdate(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label>Category : </label>
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={formData["category"]}
          onChange={(e) => handleFormUpdate(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label>Price : </label>
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={formData["price"]}
          onChange={(e) => handleFormUpdate(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label>Quantity : </label>
        <input
          type="number"
          placeholder="Quantity"
          name="quantity"
          value={formData["quantity"]}
          onChange={(e) => handleFormUpdate(e.target.name, e.target.value)}
        />
      </div>
      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  );
};

export default ProductForm;
