import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img src="../../images/logo.png" alt="logo" />
        </Link>
        <ul className="flex items-center">
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>

          <li className="ml-6">
            <Link to="/about">About</Link>
          </li>

          <li className="ml-6">
            <Link to="/cart">
              <div className="flex py-2 px-5 rounded-xl bg-[#F59E0D]">
                <span>7</span>
                <img src="../../images/cart.png" alt="" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
