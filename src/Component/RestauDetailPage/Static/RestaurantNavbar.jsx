import React from "react";

const tabs = [
  { label: "Overview", id: "overview" },
  { label: "Reviews", id: "reviews" },
  { label: "Photos", id: "photos" },
  { label: "Menu", id: "menu" },
  { label: "Book a Table", id: "book" },
];

const RestaurantNavbar = ({ activeTab, setActiveTab }) => {
  
  return (
    <div className="top-16 z-40 bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex gap-8 px-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 font-semibold whitespace-nowrap border-b-2 transition
              ${
                activeTab === tab.id
                  ? "text-red-500 border-red-500"
                  : "text-gray-600 border-transparent hover:text-red-500 hover:border-red-500"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RestaurantNavbar;
