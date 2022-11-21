import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div
      id="service"
      className="w-full h-auto flex flex-col justify-center items-center"
    >
      <div className="text-center flex flex-col gap-2">
        <p className="text-lg">Advogados Especializados</p>
        <h1 className="text-3xl font-bold"> Serviços Oferecidos</h1>
      </div>
      <div className="flex gap-10 flex-wrap justify-center w-3/5 mt-10 mb-10">
        <div className=" w-96 h-[fix-content] p-8 bg-[#e6e6e6] flex flex-col gap-5 text-[#93282C] hover:bg-[#93282C] hover:text-white hover:ease-in transition duration-300">
          <i className="fa-sharp fa-solid fa-gavel text-center text-6xl"></i>
          <h2 className="text-center text-2xl font-semibold  ">
            Direito Constitucional
          </h2>
          <ul className="flex flex-col gap-1 ">
            <li>• Ação Civil Pública</li>
            <li>• Ação Popular</li>
            <li>• Controle de Constitucionalidade</li>
            <li>• Mandado de Segurança</li>
            <li>• Mandado de Injunção</li>
            <li>• Reclamação Constitucional</li>
            <li>• Recurso Ordinário Constitucional</li>
            <li>• Consulta</li>
          </ul>
          <Link to={"/contato"} className=" text-xl text-center font-semibold">
            Saiba Mais
          </Link>
        </div>
        <div className=" w-96 h-[fix-content] p-8 bg-[#e6e6e6] flex flex-col gap-5 text-[#93282C] hover:bg-[#93282C] hover:text-white hover:ease-in transition duration-300">
          <i className="fa-solid fa-suitcase text-center text-6xl"></i>
          <h2 className="text-center text-2xl font-semibold  ">
            Direito Trabalhista
          </h2>
          <ul className="flex flex-col gap-1 ">
            <li>• Contencioso</li>
            <li>• Ações Trabalhistas</li>
            <li>• Recursos e Sustentação Oral</li>
            <li>•Consultivo para Empresas</li>
            <li>• Direito Coletivo – Sindicais</li>
            <li>• Implementação de Benefícios</li>
            <li>•Homologações extrajudiciais e judiciais</li>
            <li>• Processos administrativos e judiciais</li>
          </ul>
          <Link to={"/contato"} className=" text-xl text-center font-semibold">
            Saiba Mais
          </Link>
        </div>
        <div className=" w-96 h-[fix-content] p-8 bg-[#e6e6e6] flex flex-col gap-5 text-[#93282C] hover:bg-[#93282C] hover:text-white hover:ease-in transition duration-300">
          <i className="fa-sharp fa-solid fa-house-chimney text-center text-6xl"></i>
          <h2 className="text-center text-2xl font-semibold  ">
            Direito Imobiliário
          </h2>
          <ul className="flex flex-col gap-1 ">
            <li>• Locação</li>
            <li>• Condomínio</li>
            <li>• Usucapião</li>
            <li>• Ações Possessórias</li>
            <li>• Direito de Vizinhança</li>
            <li>• Compra e Venda de Imóveis</li>
            <li>• Assessoria em contrato de locaçã</li>
            <li>•Administração dos aluguéis</li>
          </ul>
          <Link to={"/contato"} className=" text-xl text-center font-semibold">
            Saiba Mais
          </Link>
        </div>{" "}
        <div className=" w-96 h-[fix-content] p-8 bg-[#e6e6e6] flex flex-col gap-5 text-[#93282C] hover:bg-[#93282C] hover:text-white hover:ease-in transition duration-300">
          <i className="fa-solid fa-scale-balanced text-center text-6xl"></i>
          <h2 className="text-center text-2xl font-semibold  ">
            Direito Administrativo
          </h2>
          <ul className="flex flex-col gap-1 ">
            <li>•Licitações e contratos público</li>
            <li>• Desapropriações</li>
            <li>• Impugnações administrativas</li>
            <li>• Questões regulatórias</li>
            <li>• Ações anulatórias de penalidades</li>
            <li>• Infraestrutura e concessões</li>
            <li>• Áreas públicas e PPP’s</li>
          </ul>
          <Link to={"/contato"} className=" text-xl text-center font-semibold">
            Saiba Mais
          </Link>
        </div>{" "}
        <div className=" w-96 h-[fix-content] p-8 bg-[#e6e6e6] flex flex-col gap-5 text-[#93282C] hover:bg-[#93282C] hover:text-white hover:ease-in transition duration-300">
          <i className="fa-sharp fa-solid fa-cart-shopping text-center text-6xl"></i>
          <h2 className="text-center text-2xl font-semibold  ">
            Direito do Consumidor
          </h2>
          <ul className="flex flex-col gap-1 ">
            <li>• Revisão contratual de cláusulas abusivas</li>
            <li>• Responsabilidade civil do fornecedor</li>
            <li>• Responsabilidade civil pelo vício do produto</li>
            <li>• Direito de Arrependimento</li>
            <li>• Compras pela internet</li>
          </ul>
          <Link to={"/contato"} className=" text-xl text-center font-semibold">
            Saiba Mais
          </Link>
        </div>{" "}
        <div className=" w-96 h-[fix-content] p-8 bg-[#e6e6e6] flex flex-col gap-5 text-[#93282C] hover:bg-[#93282C] hover:text-white hover:ease-in transition duration-300">
          <i className="fa-regular fa-heart text-center text-6xl"></i>
          <h2 className="text-center text-2xl font-semibold  ">
            Direito Constitucional
          </h2>
          <ul className="flex flex-col gap-1 ">
            <li>• Palestras</li>
            <li>•Consultivo</li>
            <li>• Títulos e Qualificações</li>
            <li>• Termo de Parceira</li>
            <li>• Imunidade Tributária e Isenções de Impostos</li>
            <li>• Assessoria em Projetos e Doações</li>
            <li>• Assessoria em Parceria Público Privada</li>
            <li>
              • Constituição e Regularização das Organizações da Sociedade Civil
            </li>
          </ul>
          <Link to={"/contato"} className=" text-xl text-center font-semibold">
            Saiba Mais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
