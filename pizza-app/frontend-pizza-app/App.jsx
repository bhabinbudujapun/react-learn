// import "./src/index.css";
import Cart from "./src/pages/Cart.jsx";
import Home from "./src/pages/Home.jsx";
import About from "./src/pages/About.jsx";
import AllProduct from "./src/pages/AllProduct.jsx";
import SingleProduct from "./src/pages/SingleProduct.jsx";
import Navigation from "./src/components/Navigation.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<AllProduct />} />
          <Route path="/products/:_id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
