import { useState } from "react";
import {
  FaWhatsapp,
  FaLocationArrow,
  FaPhoneAlt,
  FaAt,
} from "react-icons/fa";
import story from "../../assets/story8.webp"
import MyForm from "./Formulaire";

const Form = () => {
  return (
    <div
    data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false" className="flex justify-center items-center px-4 sm:pt-12">
    <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 dark:bg-dark bg-slate-100 max-w-4xl p-8 rounded-xl shadow-lg ">
      <div  className="flex flex-col gap-4 pt-[5rem]">
        <div>
          <h1 className="font-bold text-4xl tracking-wide">Contactez-nous</h1>
        </div>
       <MyForm/>
      </div>
      <div id="form">
        <div className=" rounded-xl p-8 text-gray-600">
        <img
        width={300}
         src={story}
          alt="photo decorative"
         />
         
          {/*<form action="" className="flex flex-col space-y-2">
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

          </form>*/}
        </div>
      </div>
    </div>

    </div>
  )
}

export default Form;