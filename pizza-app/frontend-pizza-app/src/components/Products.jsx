import { useState } from "react";
import Product from "./Product";
import { useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {products && Array.isArray(products.products) ? (
          products.products.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Products;
