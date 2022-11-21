import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpeg";
import Img3 from "../assets/img3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "/src/App.css";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  const [index, setIndex] = useState(0);
  const onChange = (e) => {
    setIndex(e);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="home" className="w-full">
      <Carousel showArrows={true} autoPlay={true} onChange={onChange}>
        <div>
          <img src={Img1} className="h-[600px] object-cover " />
          {index == 0 && (
            <div
              className="absolute top-0 ml-10 text-white  h-full flex items-center "
              data-aos="fade-right"
            >
              <div>
                <p className="text-2xl">Atendimento em Todo Brasil</p>
                <br></br>
                <div className="text-5xl">
                  Suprote Jurídico Dinâmico <br></br>e Inovador
                </div>
                <div className="flex justify-center mt-3">
                  <ul className="w-44 h-10 cursor-pointer flex items-center justify-center bg-[#e6e6e6] text-black text-xl hover:ease-in duration-300 hover:bg-[#93282C] hover:text-white">
                    <Link to={"/#contact"}>Fale conosco agora</Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <img src={Img2} className="h-[600px] object-cover " />
          {index == 1 && (
            <div
              className=" absolute top-0 ml-10 text-white  h-full flex items-center "
              data-aos="fade-right"
            >
              <div>
                <p className="text-2xl">Atendimento em Todo Brasil</p>
                <br></br>
                <div className="text-5xl">
                  Soluções Jurídicas <br></br>Inteligentes
                </div>
                <div className="flex justify-center mt-3">
                  <ul className="w-44 h-10 cursor-pointer flex items-center justify-center bg-[#e6e6e6] text-black text-xl hover:ease-in duration-300 hover:bg-[#93282C] hover:text-white">
                    <Link to={"/#contact"}>Fale conosco agora</Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <img src={Img3} className="h-[600px] object-cover " />
          {index == 2 && (
            <div
              className=" absolute top-0 ml-10 text-white  h-full flex items-center"
              data-aos="fade-right"
            >
              <div>
                <p className="text-2xl">Atendimento em Todo Brasil</p>
                <br></br>
                <div className="text-5xl">
                  Estrutura Tecnológica que <br></br>Garante Segurança
                </div>
                <div className="flex justify-center mt-3">
                  <ul className="w-44 h-10 cursor-pointer flex items-center justify-center bg-[#e6e6e6] text-black text-xl hover:ease-in duration-300 hover:bg-[#93282C] hover:text-white">
                    <Link to={"/#contact"}>Fale conosco agora</Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
