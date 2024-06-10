import assets from "../images/assets";

function Projects() {
  return (
    <div className="mx-12">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold">
            FEATURED PROJECTS
          </h1>
          <p className="text-[#c4c4c4] text-base md:text-1xl font-light mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="mt-3">
          <button className="bg-[#ff3343] text-xs sm:text-base font-semibold text-white px-7 py-3 ">
            VIEW ALL
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-8">
        <div className="flex-1">
          <img
            src={assets.project01}
            alt="Company-Featured-Project-01"
            className="bg-[#181818] px-8 py-12"
          />
          <h1 className="text-xl sm:text-2xl text-[#FDFDFD] font-bold my-2">
            The Vintage
          </h1>
          <a
            href="#"
            className="text-[#ef4040] font-semibold text-sm sm:text-base">
            KNOW MORE <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="flex-1">
          <img
            src={assets.project02}
            alt="Company-Featured-Project-02"
            className="bg-[#181818] px-8 py-12"
          />
          <h1 className="text-xl sm:text-2xl text-[#FDFDFD] font-bold my-2">
            Foodasa
          </h1>
          <a
            href="#"
            className="text-[#ef4040] font-semibold text-sm sm:text-base">
            KNOW MORE <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-8">
        <div className="flex-1 max-w-lx">
          <img
            src={assets.project03}
            alt="Company-Featured-Project-03"
            className="bg-[#181818] px-8 py-12"
          />
          <h1 className="text-xl sm:text-2xl text-[#FDFDFD] font-bold my-2">
            Marco Accent
          </h1>
          <a
            href="#"
            className="text-[#ef4040] font-semibold text-sm sm:text-base">
            KNOW MORE <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="flex-1 max-w-4lx">
          <img
            src={assets.project04}
            alt="Company-Featured-Project-04"
            className="bg-[#181818] px-8 py-12"
          />
          <h1 className="text-xl sm:text-2xl text-[#FDFDFD] font-bold my-2">
            Mozaik
          </h1>
          <a
            href="#"
            className="text-[#ef4040] font-semibold text-sm sm:text-base">
            KNOW MORE <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
