import React, { useEffect } from "react";
import Man from "../assets/icon-h.png";
import Girl from "../assets/icon-f.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="team"
      className=" p-10 w-full flex justify-center min-h-screen flex-col"
    >
      <div className="flex justify-center w-full">
        <h1 className="font-bold text-3xl">Quem faz parte do Escritório</h1>
      </div>
      <div className="flex mt-10 justify-evenly flex-wrap xl:gap-1 gap-8 ">
        <div
          data-aos="fade-left"
          className="bg-[#e6e6e6] w-96 p-10 flex flex-col gap-4 "
        >
          <div className=" flex justify-center">
            <img src={Girl} alt="fundator" className="w-64 " />
          </div>
          <h2 className="text-3xl font-semibold text-center">
            Thawany Krettli
          </h2>
          <p className="text-center text-xl font-medium">Sócio-fundador</p>
          <ul className="flex flex-col gap-2">
            <li>
              • Sócia-fundadora, advogada, bacharel em Direito pela Faculdade de
              Direito de São Bernardo do Campo.
            </li>
            <li>
              •Pós-graduada em Direito Constitucional pela Pontifícia
              Universidade Católica de São Paulo (PUC-SP).
            </li>
            <li>
              • Pós-graduanda em Direito Imobiliário pela Escola Paulista de
              Direito (EPD).
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="1000"
          className="bg-[#e6e6e6] w-96 p-10 flex flex-col gap-4 "
        >
          <div className=" flex justify-center">
            <img src={Man} alt="fundator" className="w-64 " />
          </div>
          <h2 className="text-3xl font-semibold text-center">Jhow Rodrigues</h2>
          <p className="text-center text-xl font-medium">Sócio-fundador</p>
          <ul className="flex flex-col gap-2">
            <li>
              • Sócio-fundador, advogado, bacharel em direito pela Faculdade de
              Direito de São Bernardo do Campo.
            </li>
            <li>
              • Pós-graduado em Direito Processual Cível pela Escola Paulista de
              Direito (EPD).
            </li>
            <li>
              • Pós-graduando em Direito e Processo do Trabalho pela Faculdade
              de Direito de São Bernardo do Campo.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
