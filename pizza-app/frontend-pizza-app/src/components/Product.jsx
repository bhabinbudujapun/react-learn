import { Link } from "react-router-dom";

const Product = (props) => {
  const { product } = props;

  return (
    <Link to={`/products/${product.$_id}`}>
      <div>
        <img src={`${product.image}`} alt="pizza" />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{product.name}</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            {product.size}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>₹ {product.price}</span>
          <button>ADD</button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
