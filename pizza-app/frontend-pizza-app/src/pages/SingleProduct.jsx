import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/product/${_id}`
        );
        const data = await response.json();
        console.log("Fetched Data:", data);
        setProduct(data); // Store the fetched product object
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [_id]);

  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Product Details</h1>
      <div className="grid grid-cols-1 my-8 gap-6">
        {product ? (
          <Product product={product} _id={product._id} />
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
