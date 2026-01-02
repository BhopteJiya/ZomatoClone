import React, { useState } from "react";
import DynamicDetail from "../Component/RestauDetailPage/DynamicDetail";
import RestaurantNavbar from "../Component/RestauDetailPage/Static/RestaurantNavbar";
import Navbar from "../Component/Navbar/Navbar";
import Overview from "../Component/RestauDetailPage/Static/Overview/Overview";
import Review from "../Component/RestauDetailPage/Static/Review";
import Photosall from "../Component/RestauDetailPage/Photosall";
import Menu from "../Component/RestauDetailPage/Static/Overview/Menu";
import BookTableForm from "../Component/RestauDetailPage/BookTableForm";

const RestaurantDetail = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="mx-4 md:mx-10 lg:mx-24">
      <Navbar />
      <DynamicDetail />

      {/* pass state to navbar */}
      <RestaurantNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* CONTENT SWITCH */}
      {activeTab === "overview" && <Overview />}
      {activeTab === "reviews" && <Review />}
      {activeTab === "menu" && <div><Menu/></div>}
      {activeTab === "photos" && <div><Photosall/></div>}
      {activeTab === "book" && <div><BookTableForm></BookTableForm></div>}
    </div>
  );
};

export default RestaurantDetail;
