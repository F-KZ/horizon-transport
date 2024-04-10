import React from 'react';

const Prix = () => {
    return (
        <div
    data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false" className="flex justify-center items-center px-4 sm:pt-12 pb-9 sm:pb-0">
            <div className='flex flex-col items-center flex-nowrap space-y-6 border-double border-4 border-sky-500 p-4 rounded-lg'>
            <h1 className='font-bold text-4xl tracking-wide'> PRÉSENTIEL</h1>
            <span>2400€</span>
            <ul className='flex flex-col space-y-6 items-center'>
                <li>Formation théorique VTC</li>
                <li>Formation pratique VTC 1 heure de prise en main</li>
                <li>Mise à disposition du véhicule pour l’examen pratique.</li>
            </ul>

            </div>
        </div>
    );
}

export default Prix;
