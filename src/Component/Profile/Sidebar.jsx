import React, { useState } from "react";


const Sidebar = ({ active, setActive }) => {
  
  const itemClass = (item) =>
    `py-2 px-3 rounded-md cursor-pointer transition-all
     ${
       active === item
         ? "bg-gradient-to-r from-red-500 via-red-100 to-white text-gray-700 font-medium"
         : "text-gray-700 hover:bg-gray-100"
     }`;

  return (
    <div className="w-full lg:w-[260px] p-5">
      <div className="border border-gray-300 p-4 rounded-lg">

      
        <p className="text-gray-500 tracking-widest text-xs mb-2">
          ACTIVITY
        </p>

        <p className={itemClass("Reviews")} onClick={() => setActive("Reviews")}>
          Reviews
        </p>

        <p className={itemClass("Photos")} onClick={() => setActive("Photos")}>
          Photos
        </p>

        <p className={itemClass("Followers")} onClick={() => setActive("Followers")}>
          Followers
        </p>

        <p
          className={itemClass("Recently Viewed")}
          onClick={() => setActive("Recently Viewed")}
        >
          Recently Viewed
        </p>

    
        <p className="text-gray-500 tracking-widest text-xs mt-6 mb-2">
          ONLINE ORDERING
        </p>

        <p
          className={itemClass("My addresses")}
          onClick={() => setActive("My addresses")}
        >
          My addresses
        </p>

        <p className="text-gray-500 tracking-widest text-xs mt-6 mb-2">
          PAYMENTS
        </p>

        <p
          className={itemClass("Manage Cards")}
          onClick={() => setActive("Manage Cards")}
        >
          Manage Cards
        </p>

       
        <p className="text-gray-500 tracking-widest text-xs mt-6 mb-2">
          TABLE BOOKING
        </p>

        <p
          className={itemClass("Your Booking")}
          onClick={() => setActive("Your Booking")}
        >
          Your Booking
        </p>


        <p className="text-gray-500 tracking-widest text-xs mt-6">
          ZOMATO PROFILE WIDGET
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
