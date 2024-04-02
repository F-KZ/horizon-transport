import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import borcel from "../../assets/logo.png"

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" flex flex-row items-center sm:justify-between justify-center flex-wrap py-5">
          {/* company Details */}
          <div className=" py-8 px-4 "> <img
            width={200}
            src={borcel}
          /></div>
          
          {/* Links */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Informations Légales
            </h1>
            <p className="text-sm">
              Mentions Légales{" "}
            </p>
            <br />
            <p className="text-sm">
              Politique de confidentialité et des cookies
            </p>
            <br/>
            <p className="text-sm">
              Conditions Générales de vente
            </p>
          </div>
          {/* Social Handle */}
          <div className=" py-8 px-4 flex flex-col items-center">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Horizon Transports
            </h1>
            <p className="text-sm">
              Société de transports, service et formation .{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Rouen</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <a href="tel:+33 7 69 98 98 85">+33 7 69 98 98 85</a>
              <br/>
              <a href="tel:+33 9 81 03 60 52">+33 9 81 03 60 52</a>
            </div>
          </div>
          {/* <div className="footer">
        <h1>
          Made with ❤ by <a href="https://dilshad-ahmed.github.io/">Dilshad</a>{" "}
        </h1>
      </div>*/}
        </div>
      </section>
    </div>
  );
};

export default Footer;
