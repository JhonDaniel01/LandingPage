import React from "react";
import {
  RiCircleFill,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTwitterXFill,
  RiGithubFill,
} from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="bg-footer xl:p-20 p-8 relative">
      <div className="flex flex-col md:flex-row xl:-mt-10 -mt-4 items-center justify-between border-b pb-8 border-gray-500 gap-4">
        {/* Logo */}
        <div className="w-1/6">
          {" "}
          <a
            href="#"
            className="p-1 text-2xl font-bold relative bg-footer text-white z-30"
          >
            Power<spam className="text-5xl text-primary">.</spam>
            <RiCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
          </a>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="#" className="block bg-primary text-white p-4 rounded-full">
            <RiInstagramLine />
          </a>
          <a href="#" className="block bg-primary text-white p-4 rounded-full">
            <RiFacebookBoxLine />
          </a>
          <a href="#" className="block bg-primary text-white p-4 rounded-full">
            <RiTwitterXFill />
          </a>
          <a href="#" className="block bg-primary text-white p-4 rounded-full">
            <RiGithubFill />
          </a>
        </nav>
      </div>
      <div className=" mt-8">
        <h3 className="md:text-left text-center tex-lg font-bold text-white">
          Company
        </h3>
        {/* Menu footer */}
        <nav className="flex-col md:flex-row mt-4 flex items-center justify-between gap-4">
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Press
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Investors
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Events
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Teams of use
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <button
            type="submit"
            className=" text-lg font-sembold py-2 px-6 rounded-xl bg-primary text-white hover:text-white transition-colors"
          >
            Contarc Us
          </button>
        </nav>
      </div>
      <div className="mt-20 ">
        <p className="text-gray-300 text-center">
          © JhonDaniel - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
