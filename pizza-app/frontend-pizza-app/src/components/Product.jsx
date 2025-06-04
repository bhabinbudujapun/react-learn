import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext.jsx";
import { addToCart } from "../helpers/CartUtils.jsx";

const Product = (props) => {
  const { product } = props;

  // _cart construction
  // const cart = {
  //     items: {
  //         'product_id': itemNumber,
  //         'product_id': itemNumber,
  //         'product_id': itemNumber,
  //     },
  //     totalItems: 5
  // }
  //

  const { cart, setCart } = useContext(CartContext);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <>
      <div>
        <Link to={`/products/${product.$_id}`}>
          <img src={`${product.image}`} alt={product.name} />
        </Link>
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{product.name}</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            {product.size}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>₹ {product.price}</span>
          <button
            disabled={isAdding}
            onClick={(e) => addToCart(e, product, cart, setCart, setIsAdding)}
            className={`${
              isAdding ? "bg-green-500" : "bg-yellow-500"
            } py-1 px-4 rounded-full font-bold cursor-pointer`}>
            ADD{isAdding ? "ED" : ""}
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
