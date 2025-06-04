import { useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
import { useState } from "react";

const Cart = () => {
  let total = 0;
  const { cart, setCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!cart.items) return;

    fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [cart]);

  const getQty = (productId) => {
    return cart.items[productId];
  };

  const increment = (productId) => {
    const currentQty = cart.items[productId];
    const _cart = { ...cart };
    _cart.items[productId] = currentQty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  };

  const decrement = (productId) => {
    const currentQty = cart.items[productId];
    if (currentQty === 1) return;
    const _cart = { ...cart };
    _cart.items[productId] = currentQty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  };

  const getSum = (productId, price) => {
    const sum = price * getQty(productId);
    total += sum;
    return sum;
  };

  const handleDelete = (productId) => {
    const _cart = { ...cart };
    const currentQty = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= currentQty;
    setCart(_cart);
    const updatedProductList = products.filter(
      (product) => product.$_id !== productId
    );
    setProducts(updatedProductList);
  };

  const handleOrderNow = () => {
    window.alert("Order placed successfully!!");
    setProducts([]);
    setCart({});
  };

  return (
    <>
      <div className="container mx-auto lg:w-1/2 w-full pb-24">
        <h1 className="my-12 font-bold">Cart Items</h1>
        <ul>
          {products.map((product) => (
            <li className="mb-12" key={product.$_id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="h-20"
                    src={product.image}
                    alt={product.name}
                  />
                  <span className="font-bold ml-4 w-48">{product.name}</span>
                </div>
                <div>
                  <button
                    onClick={() => {
                      decrement(product.$_id);
                    }}
                    className="bg-yellow-500 px-4 py0-2 rounded-full leading-none">
                    -
                  </button>
                  <b className="px-4">{getQty(product.$_id)}</b>
                  <button
                    onClick={() => {
                      increment(product.$_id);
                    }}
                    className="bg-yellow-500 px-4 py0-2 rounded-full leading-none">
                    +
                  </button>
                </div>
                <span>₹ {getSum(product.$_id, product.price)} </span>
                <button
                  onClick={() => {
                    handleDelete(product.$_id);
                  }}
                  className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <hr className="my-6" />
        <div className="text-right">
          <b>Grand Total: </b> ₹ {total}
        </div>
        <div className="text-right mt-6">
          <button
            onClick={handleOrderNow}
            className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
