import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-[#93282C] h-[10vh] text-white flex justify-around items-center font-sans lg:text-xl text-sm  ">
      <div className="hidden lg:flex">
        <Link to={"/"}>LOGO</Link>
      </div>
      <div className="w-[500px] ">
        <ul className="flex items-center justify-around h-[10vh]">
          <Link to={"/"} className=" hover:text-[#FFDAC4]">
            Home
          </Link>
          <Link to={"/servicos"} className=" hover:text-[#FFDAC4]">
            Serviços
          </Link>
          <Link to={"/equipe"} className=" hover:text-[#FFDAC4]">
            Equipe
          </Link>
          <Link to={"/institucional"} className=" hover:text-[#FFDAC4]">
            Institucional
          </Link>
        </ul>
      </div>
      <div className="hidden w-52 lg:flex items-center">
        <ul className=" w-44 h-10 cursor-pointer flex items-center justify-center bg-[#e6e6e6] text-black text-xl hover:w-48 hover:h-12 ease-in duration-300">
          <Link to={"/contato"}>Fale Conosco</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
