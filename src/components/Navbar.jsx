import logo from "../images/logo.svg";

function Navbar() {
  return (
    <nav className="mt-8">
      <div className="mx-12">
        <div className="flex justify-between items-center">
          <div className="max-h-20 max-w-20">
            <img src={logo}></img>
          </div>
          <div className="hidden lg:block content-between text-cyan-50 font-medium text-base">
            <a href="#" className="px-7">
              HOME<i className="fa-solid fa-caret-down pl-3 text-base"></i>
            </a>
            <a href="#" className="px-7">
              PROJECT
            </a>
            <a href="#" className="px-7">
              ABOUT
            </a>
            <a href="#" className="px-7">
              CONTACT
            </a>
            <a href="#" className="pl-7">
              OTHER PAGE
              <i className="fa-solid fa-caret-down pl-3 text-base"></i>
            </a>
          </div>
          <div className="lg:hidden">
            <a href="#">
              <i className="fa-solid fa-bars text-white text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
