import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Form from "./components/Contact/Form"
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Prix from "./components/Prix/Prix";
import Politique from "./components/Footer/Politique";
import Conditions from "./components/Footer/Conditions";
import Mentions from "./components/Footer/Mentions";
import Indicateur from "./components/Indicateur/Indicateur";
import { BrowserRouter, Router, Routes, Route} from "react-router-dom";
// import Experience from "./components/Experience/Experience";

const App = () => {
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
          <Route path="/" element={<Home theme={theme} setTheme={setTheme}  />} />
          <Route path="/conditions" element={<Conditions/>} />
          <Route path="/mentions" element={<Mentions/>} />
          <Route path="/politique" element={<Politique />} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

function Home({ theme, setTheme }) {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme}/>
      <About />
      <Services />
      <CarList />
      <Testimonial />
      <Indicateur />
      <Prix />
      <Form />
    </>
  );
}

export default App;
