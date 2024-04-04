import React from "react";

const Theory = () => {
  return (
    <ul className="space-y-3">
    <li>Réglementation des transports publics (T3P)</li>
    <li>Réglementation nationale spécifique des VTC</li>
    <li>Réglementation nationale spécifique des Taxis</li>
    <li>Sécurité Routière</li>
    <li>Gestion</li>
    <li>Développement commercial</li>
    <li>Français</li>
    <li>Anglais</li>
    </ul>
  )
}

const Pratique = () => {
  return (
    <ul className="space-y-3">
    <li>Pour le VTC préparation et devis</li>
    <li>Utilisation de tout les équipements spéciaux pour les TAXIS</li>
    <li>capacité commercial et touristique </li>
    <li>Pratique sur un véhicule double commande disposant d&apos;eau, confuserie, magasine et journaux</li>
    
    
    </ul>
  )
}

const Accompagnement = () => {
  return (
    <p className="space-y-3">
    Pour les VTC un accompagnement individuel et personnalisé jusqu&apos;à l&apos;inscription sur la liste des VTC 
    et jusqu&apos;à l&apos;obstention de la carte pro pour les Taxis
    
    </p>
  )
}

const testimonialData = [
  {
    name: "La Théorie",
    image: "",
    description: <Theory/> ,
    aosDelay: "0",
  },
  {
    name: "La Pratique",
    image: "",
    description: <Pratique/>,
    aosDelay: "300",
  },
  {
    name: "L'Accompagnement",
    image: "",
    description: <Accompagnement/>,
    aosDelay: "1000",
  },
];



const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-12">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Programme de nos Formations
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Notre programme à été élaboré pour que vous ayez entre les mains tout les éléments nécessaires pour garantir votre réussite.
            </p>
          </div>

          <div className="grid grid-cols-1 items-end sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
              <h1 className="text-center text-2xl font-semibold">{skill.name}</h1>
                <div className="grid place-items-center ">
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <div>{skill.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span id="contact"></span>
    </>
  );
};

export default Testimonial;
