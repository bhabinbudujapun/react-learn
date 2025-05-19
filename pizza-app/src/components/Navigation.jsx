import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <ul>
          <li>
            <Link to="/">
              <img src="../../public/images/logo.png" alt="" srcset="" />
            </Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
