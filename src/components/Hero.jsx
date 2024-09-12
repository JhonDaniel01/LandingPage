import React from "react";
import { RiCircleFill, RiPlayFill, RiStarFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* Information */}
      <div className=" md:col-span-5 flex items-center justify-center p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-7xl font-bold leading-[7rem]">
            Web Design Impactful Digital{" "}
            <span className="text-primary py-2 px-6 border-8 border-primary relative">
              Products
              <RiCircleFill className="text-base  absolute -left-5 -top-5 text-white p-2 bg-primary rounded-full box-content" />
              <RiCircleFill className="text-base  absolute -right-5 -top-5 text-white p-2 bg-primary rounded-full box-content" />
              <RiCircleFill className="text-base  absolute -left-5 -bottom-5 text-white p-2 bg-primary rounded-full box-content" />
              <RiCircleFill className="text-base  absolute -right-5 -bottom-5 text-white p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            diam libero, in ultricies sapien sodales id. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Sed sed nisi augue.
          </p>
          <div className="flex items-center gap-8">
            <button className="bg-primary text-white py-2 px-6 rounded-xl text-xl">
              Contact Us
            </button>
            <button className="flex items-center gap-4 py-2 px-6 rounded-xl text-xl text-left">
              <RiPlayFill className=" bg-secondary text-primary p-4 box-content rounded-full" />{" "}
              Watch our <br />
              introduction video
            </button>
          </div>
        </div>
      </div>
      {/* Imagen hero*/}
      <div className="md:col-span-3 flex items-center justify-center relative">
        <div>
          <img
            src="hero.png"
            className="w-[450px] h-[450px] object-cover -mt-28"
          />
          <div className="bg-white shadow-xl rounded-lg p-4 flex flex-col gap-2 justify-center max-w-[250px] mx-auto ">
            {/* Centrar div tambien  ml-[50%] -translate-x-1/2*/}
            <img
              src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
              className="w-10 h-10 object-contain rounded-full"
            />
            <h2 className="text-xl font-medium">120 + Employees</h2>
            <div className="flex items-center gab-2 text-gray-500 ">
              <RiStarFill className="text-primary" />
              5.0 (3.1 K Reiviews)
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[380px] bg-secondary border-[10px] border-primary rounded-full -z-10 "></div>
      </div>
    </section>
  );
};

export default Hero;
