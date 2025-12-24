import React, { useState } from "react";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import Tabs from "../Component/Navbar/Tabs";

import Delivery from "../Component/Delivery/Delivery";
import DiningOut from "../Component/DiningOut/DiningOut";
import NightLife from "../Component/NightLife/NightLife";
import HomeFooter from "../Component/Footer/HomeFooter";

const Home = () => {
  const [activeTab, setActiveTab] = useState("diningOut");
    const [city, setCity] = useState("Mumbai");

  return (
    <>
     <div className="mx-4 sm:none md:mx-10 lg:mx-24">
  <Navbar city={city} setCity={setCity} />

  {/* Tabs */}
  <div className="mt-4 mb-4 md:mt-6 lg:mt-10">
    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
  </div>

  {/* Screen */}
  {getCorrectScreen(activeTab)}
</div>


      <HomeFooter></HomeFooter>
    </>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "delivery":
      return <Delivery />;
    case "diningOut":
      return <DiningOut  />;
    case "nightLife":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};

export default Home;
