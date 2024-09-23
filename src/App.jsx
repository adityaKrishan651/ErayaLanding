import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Gallery data={landingPageData} title="Period Positive" />
      {/* <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: 10}}>
        <div style={{padding: 10}}>
          <Carousel data={landingPageData.PeriodPositive} title="Period Positive" />
          <Carousel data={landingPageData.HappySmiles} title="Happy Smiles" />
        </div>
        <div style={{padding: 5}}>
          <Carousel data={landingPageData.EducateToEmpower} title="Educate To Empower" />
          <Carousel data={landingPageData.EarthWellWishers} title="Earth Well Wishers" />
        </div>
      </div> */}
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
