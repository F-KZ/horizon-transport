import React from "react";
import CarPng from "../../assets/profile.png";
import { useState } from "react";


const scrollToSection = () => {
  // Sélectionner la section à laquelle vous souhaitez faire défiler en utilisant son ID
  const section = document.getElementById('contact');

  // Vérifier si la section existe
  if (section) {
    // Faire défiler jusqu'à la section
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Profession = ({ switchSide}) => {
  return(
    <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                En quoi consiste le métier de chauffeur professionnel ?
              </h1>
              <p data-aos="fade-up" className="text-justify leading-8 tracking-wide">
              Celui-ci consiste à conduire des véhicules terrestres privés,
              destinés au transport payant de passagers et de leurs bagages, par un chauffeur qualifié.
              Souvent les VTC optent pour un véhicule haut de gamme.
              La réservation au préalable est obligatoire, ainsi le montant de la course est connu d&apos;avance.
              C&apos;est la différence entre un Taxi et un VTC
              </p>
              <p data-aos="fade-up">
                N&apos;attendez plus et rejoignez-nous sans plus attendre !
              </p>
              <button
              onClick={switchSide}
               data-aos="fade-up" className="button-outline">
                en quoi consiste la formation ?
              </button>
            </div>
  )
}

const Formation = () => {
  return(
    <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                En quoi consiste la formation ?
              </h1>
              <p data-aos="fade-up" className="text-justify leading-8 tracking-wide">
              Notre objectif c’est votre réussite à l’examen de votre choix, votre examen est structuré en deux parties :
              </p>
              <p data-aos="fade-up">
              1. Une épreuve d’admissibilité (la théorie)
              <br/>
              2. Une épreuve d’admission (la conduite)
              </p>
              <button
              onClick={scrollToSection}
               data-aos="fade-up" className="button-outline">
                plus d&apos;infos
              </button>
            </div>
  )
}




const About = () => {
  const [count, setCount] = useState(true);

  const switchSide = () => {
    setCount(() => false);
  };

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
            {count ? <Profession switchSide={switchSide} /> : <Formation/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
