import React, { useState } from "react";
//Icons
import { RiCircleFill, RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full p-4 h-[10vh] z-50">
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative bg-white">
          Power<spam className="text-5xl text-primary">.</spam>
          <RiCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[80%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full "
        }  z-50 top-0 xl:static flex-1 flex flex-col xl:flex-row  items-center justify-center gap-10 transition-all duration-500`}
      >
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Products</a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden  text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </header>
  );
};

export default Header;
