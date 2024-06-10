import ui from "../images/ui-design.svg";
import product from "../images/product-design.svg";
import brand from "../images/branding.svg";

function Services() {
  return (
    <div className="mx-12 my-10">
      <div className="flex flex-col justify-around gap-4 lg:flex lg:flex-row">
        <div className="bg-[#181818] p-10">
          <img src={ui} alt="UI-Design" />
          <h1 className="text-2xl text-[#FDFDFD] font-bold mt-3">UI Design</h1>
          <p className="text-xl text-[#7C7C7C] my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <a href="#" className="text-[#ef4040] font-semibold">
            KNOW MORE <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="bg-[#c91b28] p-10">
          <img src={product} alt="Products" />
          <h1 className="text-2xl text-[#FDFDFD] font-bold mt-3">
            Product Design
          </h1>
          <p className="text-xl text-[#FDFDFD] my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <a href="#" className="text-[#FDFDFD] font-semibold">
            KNOW MORE <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="bg-[#181818] p-10">
          <img src={brand} alt="Brands" />
          <h1 className="text-2xl text-[#FDFDFD] font-bold mt-3">Branding</h1>
          <p className="text-xl text-[#7C7C7C] my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <a href="#" className="text-[#ef4040] font-semibold">
            KNOW MORE <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
