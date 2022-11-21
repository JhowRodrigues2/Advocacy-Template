import React from "react";
import { HashLink as Link } from "react-router-hash-link";
const Header = () => {
  return (
    <nav
      id="header"
      className="fixed top-0 z-20 left-0 w-full bg-[#93282C] h-[10vh] shadow flex"
    >
      <div className="container m-auto flex justify-between items-center text-white">
        <Link to={"/#home"} smooth className="pl-8 py-4 text-xl font-bold">
          LOGO
        </Link>
        <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
          <Link to={"/#home"} smooth className="hover:text-[#FFDAC4] py-4 px-6">
            Home
          </Link>
          <Link
            to={"/#service"}
            smooth
            className="hover:text-[#FFDAC4] py-4 px-6"
          >
            Serviços
          </Link>
          <Link to={"/#team"} smooth className="hover:text-[#FFDAC4] py-4 px-6">
            Equipe
          </Link>
          <Link
            to={"/#institutional"}
            smooth
            className="hover:text-[#FFDAC4] py-4 px-6"
          >
            Institucional
          </Link>
        </ul>
        <ul className=" w-44 h-10 cursor-pointer md:flex items-center justify-center bg-[#e6e6e6] text-black text-xl hover:w-48 hover:h-12 ease-in duration-300 hidden">
          <Link to={"/#contact"} smooth>
            Fale Conosco
          </Link>
        </ul>
        <button className="block md:hidden py-3 px4 mx-2 roudend focus:outline-none group">
          <div className="w-5 h-1 bg-white mb-1"></div>
          <div className="w-5 h-1 bg-white mb-1"></div>
          <div className="w-5 h-1 bg-white mb-1"></div>
          <div className="w-5 h-1 bg-white"></div>
          <div
            className=" absolute top-0 -right-full w-8/12 h-[366px] bg-white border opacity-0
         group-focus:right-0 group-focus:opacity-100 transition-all duration-300"
          >
            <ul className=" flex flex-col items-center w-full text-base cursor-pointer pt-10">
              <Link
                to={"/#home"}
                smooth
                className="text-[#93282C] hover:bg-[#93282C] hover:text-white py-4 px-6 w-full"
              >
                Home
              </Link>
              <Link
                to={"/#service"}
                smooth
                className="text-[#93282C] hover:bg-[#93282C] hover:text-white py-4 px-6 w-full"
              >
                Serviços
              </Link>
              <Link
                to={"/#team"}
                smooth
                className="text-[#93282C] hover:bg-[#93282C] hover:text-white py-4 px-6 w-full"
              >
                Equipe
              </Link>
              <Link
                to={"/#institutional"}
                smooth
                className="text-[#93282C] hover:bg-[#93282C] hover:text-white py-4 px-6 w-full"
              >
                Institucional
              </Link>
              <Link
                to={"/#contact"}
                smooth
                className="text-[#93282C] hover:bg-[#93282C] hover:text-white py-4 px-6 w-full"
              >
                Fale Conosco
              </Link>
            </ul>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Header;
