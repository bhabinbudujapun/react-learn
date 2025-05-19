// import "./src/index.css";
import Home from "./src/pages/Home.jsx";
import About from "./src/pages/About.jsx";
import Navigation from "./src/components/Navigation.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./src/pages/Cart.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
