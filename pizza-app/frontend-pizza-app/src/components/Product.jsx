import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext.jsx";

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

  const addToCart = (event, product) => {
    event.preventDefault();
    let _cart = { ...cart };

    if (!_cart.items) {
      _cart.items = {};
    }

    if (_cart.items[product.$_id]) {
      _cart.items[product.$_id] += 1;
    } else {
      _cart.items[product.$_id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }

    _cart.totalItems += 1;

    setCart(_cart);

    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <Link to={`/products/${product.$_id}`}>
      <div>
        <img src={`${product.image}`} alt={product.name} />
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
            onClick={(e) => {
              addToCart(e, product);
            }}
            className={`${
              isAdding ? "bg-green-500" : "bg-yellow-500"
            } py-1 px-4 rounded-full font-bold cursor-pointer`}>
            ADD{isAdding ? "ED" : ""}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
