import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhoneAlt,
  FaAt,
} from "react-icons/fa";

const Form = () => {
  return (
    <div
    data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false" className="flex w-full justify-center items-center px-4">
    <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 dark:bg-dark bg-slate-100 w-full max-w-4xl p-8 rounded-xl shadow-lg ">
      <div id="info"  className="flex flex-col gap-4">
        <div>
          <h1 className="font-bold text-4xl tracking-wide">Contactez Nous</h1>
          <p className="pt-2 dark:text-cyan-100 text-sm">Contactez nous et nous vous répondrons dans les meilleurs delais.</p>
        </div>
        <div className="flex flex-col space-y-2 ">
        <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <p>numero a mettre</p>
            </div>
        <div className="flex items-center gap-3">
              <FaAt />
              <p>mail horizon</p>
            </div>
        <div className="flex items-center gap-3 ">
              <FaLocationArrow />
              <p>adresse ?</p>
            </div>
            </div>
      </div>
      <div id="form">
        <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
          <form action="" className="flex flex-col space-y-2">
          <div>
            <label htmlFor="" className="text-sm">Nom Complet</label>
            <input type="text" placeholder="Nom Complet" className=" mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
          </div> 
          <div>
            <label htmlFor="" className="text-sm">Email</label>
            <input type="email" placeholder="Email" className=" mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
          </div> 
          <div>
            <label htmlFor="" className="text-sm">Message</label>
            <textarea rows="4" placeholder="Message" className=" mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
          </div> 
          <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Envoyer</button>

          </form>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Form;