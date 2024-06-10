import assets from "../images/assets";

function Hero() {
  return (
    <div className="mx-12">
      <div className="flex flex-col-reverse lg:flex lg:flex-row lg:justify-between">
        <div className="md:shrink-1">
          <img src={assets.arthur} alt="" className="object-cover" />
        </div>
        <div className="content-center md:pt-7">
          <h1 className="text-red-500 sm:text-4xl font-bold my-3 text-3xl md:my-2">
            Hello I'm Arthur
          </h1>
          <h1 className="text-[#FDFDFD] sm:text-6xl text-4xl md:text-5xl font-bold my-2 md:my-1">
            Visual Designer
          </h1>
          <p className="text-[#7C7C7C] text-justify md:text-left text-lg font-normal mb-2 mt-3 md:pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            officiis dignissimos autem, maiores quam alias quia voluptate
            nostrum earum blanditiis quasi consequuntur.
          </p>
          <button className="bg-[#c91b28] font-semibold text-white my-5 px-5 py-2 sm:py-3 sm:px-7">
            ABOUT ME
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
