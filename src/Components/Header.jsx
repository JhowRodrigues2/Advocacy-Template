import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div
      id="header"
      className="w-full z-10 fixed bg-[#93282C] h-[10vh] text-white flex justify-around items-center font-sans lg:text-xl text-sm  "
    >
      <div className="hidden lg:flex">
        <Link to={"/"} className="text-xl font-bold">
          LOGO
        </Link>
      </div>
      <div className="w-[500px] ">
        <ul className="flex items-center justify-around h-[10vh]">
          <Link to={"/#home"} smooth className=" hover:text-[#FFDAC4]">
            Home
          </Link>
          <Link to={"/#service"} smooth className=" hover:text-[#FFDAC4]">
            Serviços
          </Link>
          <Link to={"/#team"} smooth className=" hover:text-[#FFDAC4]">
            Equipe
          </Link>
          <Link to={"/#institutional"} smooth className=" hover:text-[#FFDAC4]">
            Institucional
          </Link>
        </ul>
      </div>
      <div className="hidden w-52 lg:flex items-center">
        <ul className=" w-44 h-10 cursor-pointer flex items-center justify-center bg-[#e6e6e6] text-black text-xl hover:w-48 hover:h-12 ease-in duration-300">
          <Link to={"/#contact"} smooth>
            Fale Conosco
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
