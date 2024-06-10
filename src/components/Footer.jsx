import logo from "../images/logo.svg";

function Footer() {
  return (
    <footer className="bg-[#181818]">
      <div className="mx-12 mt-12 mb-2">
        <div className="flex flex-col gap-3 md:flex-col lg:flex-row md:justify-between md:items-center py-10">
          <div className="max-h-20 max-w-20 mb-3">
            <img src={logo} alt="Company-Logo" />
          </div>
          <div className="text-cyan-50 font-medium text-xs flex gap-6 flex-col lg:flex-row md:justify-between mb-2">
            <a href="#" className="p-0 md:px-5">
              HOME
            </a>
            <a href="#" className="p-0 md:px-5">
              ABOUT
            </a>
            <a href="#" className="p-0 md:px-5">
              PROJECT
            </a>
            <a href="#" className="p-0 md:px-5">
              CONTACT
            </a>
          </div>
          <div className="text-white text-xl flex gap-7 flex-col lg:flex-row md:justify-between">
            <i className="fa-brands fa-facebook p-0 md:px-5"></i>
            <i className="fa-brands fa-twitter p-0 md:px-5"></i>
            <i className="fa-brands fa-youtube p-0 md:px-5"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
