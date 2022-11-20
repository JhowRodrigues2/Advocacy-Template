import React from "react";
import Logo from "../assets/logo.png";
const Institutional = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        id="institutional"
        className="bg-[#e6e6e6] flex xl:flex-nowrap w-full min-h-[800px] flex-wrap items-center "
      >
        <div className=" p-10 flex flex-col gap-6 ">
          <h1 className="font-bold text-5xl text-[#93282C]">O Escritório </h1>
          <p className="mt-5 text-xl font-sans font-medium text-[#545454]">
            Somos a extensão da empresa e do projeto dos nossos clientes,
            oferecendo suporte jurídico dinâmico, inovador e descomplicado.
          </p>

          <p className=" text-xl font-sans font-medium text-[#545454]">
            Aqui desenvolvemos técnicas e visões estratégicas eficientes para
            proteger e auxiliar os clientes nos grandes desafios que enfrentam
            na gestão de seus negócios.
          </p>
          <p className="text-xl font-sans font-medium text-[#545454]">
            Com ética e transparência, buscamos construir mais que uma relação
            de prestação de serviços, aqui construímos vínculos duradouros.
          </p>
          <p className="text-xl font-sans font-medium text-[#545454]">
            Nos unimos aos seus desafios para garantir mais tranquilidade às
            suas decisões.
          </p>
          <p className=" text-xl font-sans font-medium text-[#545454]">
            Assim, crescemos juntos!
          </p>
        </div>
        <div className=" flex justify-center items-center p-10">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Institutional;
