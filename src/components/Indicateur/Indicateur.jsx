import React from 'react';

const Indicateur = () => {
    return (
        <div
    data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false" className="flex justify-center items-center px-4 sm:pt-12 pb-9 sm:pb-0">
            <div className='flex flex-col flex-nowrap space-y-6 border-double border-4 border-sky-500 p-4 rounded-lg'>
            <h1 className='font-bold text-4xl tracking-wide'> INDICATEUR DE RESULTAT A VENIR :</h1>
            <ul className='flex flex-col space-y-6 items-center sm:items-start'>
                <li><span>⭐</span>Taux de Satisfaction.</li>
                <li><span>⭐</span>Taux de Recommandation.</li>
                <li className='text-center sm:text-justify'><span>⭐</span>Taux de réussite à l'éxamen de certification de capacité de conducteur de voiture avec chauffeur.</li>
            </ul>

            </div>
        </div>
    );
}

export default Indicateur;
