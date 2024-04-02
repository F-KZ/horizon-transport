import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

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
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
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
              <a href="tel:+33 9 81 03 60 52">+33 9 81 03 60 52</a>
            </div>
            {/* Social Handle */}
            
          </div>
          {/* Links */}
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
