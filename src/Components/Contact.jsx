import React, { useEffect } from "react";

import BgContact from "../assets/bg-contact.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      id="contact"
      className=" w-full min-h-screen bg-[#93282C] "
      style={{
        backgroundImage: `url("${BgContact}")`,
      }}
    >
      <div
        className="flex flex-col text-white items-center gap-8 pt-20 pl-5 pr-5"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-sans font-bold">Fale Conosco</h1>
        <p className="font-sans text-xl">
          Envie uma mensagem no nosso formulário ou entre em contato conosco
          através do nosso endereço ou número de telefone.
        </p>
      </div>
      <div
        className=" min-h-[80vh] flex items-center justify-center"
        data-aos="fade-up"
      >
        <div className=" min-w-[33%] h-[auto] text-white pb-4 ">
          <div className="justify-center p-5 font-medium text-2xl flex ">
            <ul className="flex flex-col justify-around">
              <li>
                <i className="fa-solid fa-phone text-[#FFDAC4]"></i> Telefone:
                (99) 99999-9999
              </li>
              <li>
                <i className="fa-regular fa-envelope text-[#FFDAC4]"> </i>{" "}
                contato@contato.com.br
              </li>
            </ul>
          </div>
          <form
            action=""
            className="flex flex-col pt-5
          pl-10 pr-10 justify-around gap-2 overflow-x-hidden"
            onSubmit={handleSubmit}
          >
            <label htmlFor="nome" className="cursor-pointer">
              Nome
            </label>
            <input
              required
              type="text"
              id="nome"
              className="h-12 border border-[#818a91] rounded-md text-[#93282C] p-2 focus:outline-none"
            />
            <label htmlFor="telefone" className="cursor-pointer">
              Telefone
            </label>
            <input
              required
              type="number"
              id="telefone"
              className="h-12 border border-[#818a91] rounded-md text-[#93282C] p-2 focus:outline-none"
            />
            <label htmlFor="email" className="cursor-pointer">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              className="h-12 border border-[#818a91] rounded-md text-[#93282C] p-2 focus:outline-none"
            />
            <label htmlFor="msg">Mensagem</label>
            <textarea
              required
              id="msg"
              rows={8}
              className="border border-[#818a91] rounded-md text-[#93282C] p-2 focus:outline-none"
            ></textarea>
            <input
              type="submit"
              value="Enviar Mensagem"
              className=" bg-white text-black xl:w-60 w-full h-16 mt-3 font-semibold text-xl cursor-pointer hover:text-[#93282C] hover:ease-in transition duration-150"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
