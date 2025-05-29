import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/api/product/${_id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchData();
  }, [_id]);

  if (!product) {
    return <div className="container mx-auto mt-12">Product not found</div>;
  }

  return (
    <div className="container mx-auto mt-12">
      <button
        className="mb-12 font-bold cursor-pointer"
        onClick={() => {
          navigate("/");
        }}>
        Back
      </button>
      <div className="flex items-center">
        <img src={product.image} alt="pizza" />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-md">{product.size}</div>
          <div className="font-bold mt-2">₹ {product.price}</div>
          <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4 cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
