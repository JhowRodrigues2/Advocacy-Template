import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div
      className="flex text-white bg-[#93282C]
     w-full h-auto justify-around flex-wrap"
    >
      <div
        data-aos="fade-right"
        className=" text-3xl font-bold w-1/2 flex justify-center items-center"
      >
        LOGO AREA
      </div>

      <div
        data-aos-delay="1000"
        data-aos="fade-left"
        className="justify-center font-medium  md:text-xl flex  w-1/3 p-3 flex-col"
      >
        <h1>CONTATOS</h1>
        <ul className="flex flex-col justify-around">
          <li>
            <i className="fa-solid fa-phone text-[#FFDAC4]"></i> Telefone: (99)
            99999-9999
          </li>
          <li>
            <i className="fa-regular fa-envelope text-[#FFDAC4]"> </i>{" "}
            contato@contato.com.br
          </li>
          <li>
            <i className="fa-solid fa-location-dot text-[#FFDAC4]"></i> Rua
            Vereador Antônio Ferreira da Costa, 66, sala 75- Centro, Teófilo
            Otoni-MG | CEP: 39802072.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
