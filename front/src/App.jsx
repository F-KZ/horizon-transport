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
import { Helmet } from "react-helmet-async";

// import Experience from "./components/Experience/Experience";

const App = () => {
  // dark mode start
  const [theme, setTheme] = useState(
     localStorage.setItem("theme", "dark") 
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
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
    <>
    <SEO/>
    <BrowserRouter>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme}  />} />
          <Route path="/conditions" element={<Conditions/>} />
          <Route path="/mentions" element={<Mentions/>} />
          <Route path="/politique-de-confidentialite" element={<Politique />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </>
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

function SEO() {
  const seoData = {
    title: "Horizon-Transports - Formation VTC et Taxi",
    description: "Apprenez à devenir chauffeur VTC et Taxi avec nos formations de qualité.",
    url: "https://www.horizon-transports.com",
    keywords: "formation taxi rouen, formation vtc rouen, vtc, taxi, horizon, horizon transports, horizon transport",
    image: "https://www.horizon-transports.com/images/profile.webp",
    favicon: "/favicon.ico", // Favicon par défaut
    faviconPng: "/favicon-96x96.png" ,// Version PNG
    logo: "https://www.horizon-transports.com/favicon-96x96.png"
  };

  const logoSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Horizon Transports",
    "url": seoData.url,
    "logo": seoData.logo
  };

  return (
    <Helmet>
      {/* Title & Meta Description */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={seoData.keywords} />

      {/* Favicon */}
      <link rel="icon" href={seoData.favicon} type="image/x-icon" />
      <link rel="shortcut icon" href={seoData.favicon} type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href={seoData.faviconPng} />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph & Twitter */}
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.image} />

      {/* Schema.org Logo */}
      <script type="application/ld+json">
        {JSON.stringify(logoSchema)}
      </script>
    </Helmet>
  );
}



export default App;
