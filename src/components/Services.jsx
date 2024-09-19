import React from "react";
import {
  RiMailFill,
  RiBarcodeLine,
  RiBookmark3Fill,
  RiSmartphoneFill,
  RiMacFill,
} from "react-icons/ri";
const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 xl:p-20 md:gap-20 gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] fond-bold">Lorem ipsum dolor </h1>
        <p className="text-[20px] text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
          excepturi porro quod.
        </p>
        <form>
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500 text-xl " />
            <input
              type="text"
              className="w-full bg-gray-100 text-gray-400 py-4 pl-10 rounded-xl outline-none pr-36"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="absolute text-lg font-sembold py-2 px-6 rounded-xl bg-primary text-white top-1/2 -translate-y-1/2 right-2"
            >
              Suscribete
            </button>
          </div>
        </form>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="flex flex-col gap-2">
          <RiBarcodeLine className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold ">Ui/Ux Desing</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiBookmark3Fill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold ">Logo Branding</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold ">App Design</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold ">Website Design</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
