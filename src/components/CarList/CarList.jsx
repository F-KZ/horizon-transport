import React from "react";
import whiteCar from "../../assets/balanceColor.png";
import car2 from "../../assets/exam.png";
import car3 from "../../assets/permis.png";

const carList = [
  {
    name: "Casier judiciaire vierge ",
    price: "Éligibilité à l’examen sous réserve d’un casier judiciaire vierge (bulletin n°2)",
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "Permis depuis 3 ans",
    price: "Vous devez être détenteur de votre permis depuis plus de 3 ans au moment de l’examen",
    image: car3,
    aosDelay: "500",
  },
  {
    name: "Examen VTC",
    price: " La réussite à la théorie vous donne accès à la pratique puis la pratique vous donne tout simplement accès à votre carte professionnelle.",
    image: car2,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Chauffeur VTC oui mais à quelles conditions ?
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
         
Pour devenir chauffeur VTC sachez qu’il existe des prérequis <span className="font-semibold text-red-500">indispensable</span> pour la profession.
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain "
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>{data.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing 
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
        */}
      </div>
    </div>
  );
};

export default CarList;