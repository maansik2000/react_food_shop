import React from "react";
import Header from "../components/Header";
import PopularFoodSection from "../components/PopularFoodSection";
import AboutUs from "../components/AboutUs";
import Testomonial from "../components/Testomonial";
import Partner from "../components/Partner";
import Footer from "../components/Footer";
import SubsribeSection from "../components/SubsribeSection";

function Home() {
  return (
    <div>
      <div className="FirstSection">
        <Header />
      </div>

      <PopularFoodSection />
      <AboutUs />
      <Testomonial />
      <Partner />
      <SubsribeSection />
      <Footer />
    </div>
  );
}

export default Home;
