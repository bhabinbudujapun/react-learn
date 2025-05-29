// import "./src/index.css";
import Cart from "./src/pages/Cart.jsx";
import Home from "./src/pages/Home.jsx";
import About from "./src/pages/About.jsx";
import AllProduct from "./src/pages/AllProduct.jsx";
import SingleProduct from "./src/pages/SingleProduct.jsx";
import Navigation from "./src/components/Navigation.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CartContext from "./src/context/CartContext.jsx";
import { getCart, storeCart } from "./src/helpers/CartUtils.jsx";

const App = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    getCart().then((cart) => {
      setCart(JSON.parse(cart));
    });
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<AllProduct />} />
            <Route path="/products/:_id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
};

export default App;
