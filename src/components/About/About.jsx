import React from "react";
import CarPng from "../../assets/profile.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                En quoi consiste la profession ?
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              Le métier de chauffeur VTC consiste à conduire des personnes dans un véhicule haut de gamme dans le cadre de leurs déplacements et ce, contre rémunération. La réservation du véhicule est obligatoire et le montant de la course connu à l’avance par le client : c’est ce qui distingue, entres autres, un conducteur VTC d’un chauffeur de taxi.
              </p>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                tempora.
              </p>
              <button data-aos="fade-up" className="button-outline">
                plus d'infos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;