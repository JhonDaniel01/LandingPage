import React from "react";
import {
  RiCircleFill,
  RiPlayFill,
  RiStarFill,
  RiCheckboxBlankFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8 p-8 ">
      {/* Information */}
      <div className=" md:col-span-5 flex items-center justify-center p-4  xl:p-16 ">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold leading-[4rem] xl:leading-[7rem]">
            Web Design Impactful Digital{" "}
            <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">
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
          <div className="flex flex-col md:flex-row items-center gap-8">
            <button className="md:w-full bg-primary text-white py-2 px-6 rounded-xl text-xl">
              Contact Us
            </button>
            <button className="md:w-full flex items-center gap-4 py-2 px-6 rounded-xl text-xl text-left">
              <RiPlayFill className=" bg-secondary text-primary p-4 box-content rounded-full" />{" "}
              Watch our <br />
              introduction video
            </button>
          </div>
        </div>
      </div>
      {/* Imagen hero*/}
      <div className="md:col-span-3 flex items-center justify-center relative p-8">
        <div>
          <img
            src="hero.png"
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col gap-2 justify-center max-w-[250px] mx-auto -mt-12">
            {/* Centrar div tambien  ml-[50%] -translate-x-1/2*/}
            <div className="flex items-center">
              <img
                src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/apoyo-optimismo-alegre-agradable-morena-europea-gafas-sueter-mostrando-pulgares-arriba-impresionado-encantado-que-gusta-producto-dando-respuesta-positiva-recomendandolo-sobre-pared-gris_176420-35790.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/seguro-joven-apuntando-camara_74855-4132.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/fotos-premium/trabajador-construccion-joven-guapo-barba_251136-3489.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 tracking-[1px]">
              120 + Employees
            </h2>
            <div className="flex items-center gab-2 text-gray-500 ">
              <RiStarFill className="text-primary" />
              5.0 (3.1 K Reiviews)
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
              <div className="relative">
                <RiCircleFill className=" text-primary text-8xl " />
                <div className="absolute bg-white -left-0 -top-0 w-14 h-14"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Circulo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[280px] w-[280px] md:h-[380px] md:w-[380px] bg-secondary border-[10px] border-primary rounded-full -z-10 "></div>
        {/* Logos */}
        <img
          src="figma.png"
          className="md:w-20 md:h-20 w-10 h-10 object-cover rounded-full border-l-8 border-gray-600 absolute top-[12%] xl:right-[10%] right-[20%]"
        />
        <img
          src="adobe.png"
          className="md:w-20 md:h-20 w-10 h-10 object-cover rounded-full border-l-8 border-gray-600 absolute xl:top-[2%] xl:left-[10%] top-[10%] left-[20%]"
        />
        <img
          src="sketch.png"
          className="md:w-20 md:h-20 w-10 h-10 object-cover rounded-full absolute bottom-[5%] left-[15%] xl:left-[3%] -rotate-12"
        />
      </div>
    </section>
  );
};

export default Hero;
