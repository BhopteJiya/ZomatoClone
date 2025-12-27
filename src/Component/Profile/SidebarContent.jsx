import React, { useState } from "react";
import Sidebar from "./Sidebar";

const SidebarContent = () => {
  const [active, setActive] = useState("Reviews");

 const renderContent = () => {
  switch (active) {
    case "Reviews":
      return (
        <div>
            <p className="text-center text-xl p-5">No reviews yet</p>
            <img src="/NothingImage.avif" alt="nothing"
            className="w-full max-w-md mx-auto h-auto"
            />
        </div>
      )

    case "Photos":
      return (
        <div>
            <p className="text-center text-xl p-5">You have not uploaded any photos yet</p>
            <img src="/NothingImage.avif" alt="nothing"
            className="w-full max-w-md mx-auto h-auto"
            />
        </div>
      )

    case "Followers":
      return (
        <div>
            <p className="text-center text-xl p-5">No have no followers yet</p>
            <img src="/NothingImage.avif" alt="nothing"
            className="w-full h-90"
            />
        </div>
      )

    case "Recently Viewed":
      return (
        <div>
            <p className="text-center text-xl p-5">Nothing to show </p>
            <img src="/NothingImage.avif" alt="nothing"
            className="w-full max-w-md mx-auto h-auto"
            />
        </div>
      )

    case "My addresses":
      return (
        <div>
            <p className="text-center text-xl p-5">No Address to show </p>
            <img src="/NothingImage.avif" alt="nothing"
            className="w-full max-w-md mx-auto h-auto"
            />
        </div>
      )

    case "Manage Cards":
      return (
        <div>
            <p className="text-center text-xl p-5">No Cards</p>
            <img src="/NothingImage.avif" alt="nothing"
            className="w-full max-w-md mx-auto h-auto"
            />
        </div>
      )

    case "Your Booking":
      return (
        <div>
            <p className="text-center text-xl p-5">No Bookings yet</p>
            <img src="/NothingImage.avif" alt="nothing"
            className="w-full max-w-md mx-auto h-auto"
            />
        </div>
      )
    default:
      return <p className="text-center text-xl p-5">Select a section</p>;
  }
};


  return (
    <div className="flex flex-col lg:flex-row mx-4 md:mx-10 lg:mx-24 gap-6 lg:gap-8 mt-8">
        <div>

      <Sidebar active={active} setActive={setActive} />
        </div>

      {/* RIGHT CONTENT */}
      <div className=" flex-1 rounded-lg p-4 md:p-6 bg-white my-5">
        {renderContent()}
      </div>
    </div>
  );
};

export default SidebarContent;
