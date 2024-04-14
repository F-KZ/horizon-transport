import React from "react";
import { FaUserCircle, FaArrowCircleLeft  } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  console.log("showMenu", showMenu);

  const hideMenu = () => {
    setShowMenu(() => false);
  }
  
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Horizon Transports</h1>
            <h1 className="text-sm text-slate-500">formation VTC & Taxi</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li >
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
            <p className="text-sm" onClick={hideMenu} >Fermez le menu </p>
          </ul>
        </nav>
      </div>
     {/* <div className="footer">
        <h1>
          Made with ❤ by <a href="https://dilshad-ahmed.github.io/">Dilshad</a>{" "}
        </h1>
      </div>*/}
    </div>
  );
};

export default ResponsiveMenu;
