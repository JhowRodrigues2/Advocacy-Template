import React from "react";
import { Carousel } from "react-responsive-carousel";
import Img1 from "../assets/img1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "/src/App.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Carousel showArrows={true} autoPlay={true}>
        <div>
          <img src={Img1} className="h-[600px] object-cover " />
          <div className="description absolute top-0 ml-7 text-white  h-full flex items-center">
            <div>
              <p className="text-2xl">Atendimento em Todo Brasil</p>
              <br></br>
              <div className="text-5xl">
                Suprote Jurídico Dinâmico <br></br>e Inovador
              </div>
              <div className="flex justify-center mt-3">
                <ul className="w-44 h-10 cursor-pointer flex items-center justify-center bg-[#e6e6e6] text-black text-xl hover:ease-in duration-300 hover:bg-[#93282C] hover:text-white">
                  <Link to={"/contato"}>Fale conosco agora</Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
