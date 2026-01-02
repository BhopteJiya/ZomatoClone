import delivery from "../../assets/HomeNavbar/delivery.webp";
import diningout from "../../assets/HomeNavbar/diningout.avif";
import nightlife from "../../assets/HomeNavbar/nightlife.webp";

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: "diningOut",
      label: "Dining Out",
      icon: diningout,
    },
    {
      id: "delivery",
      label: "Delivery",
      icon: delivery,
    },
    {
      id: "nightLife",
      label: "Nightlife",
      icon: nightlife,
    },
  ];

  return (
 <div
  className="
    flex
    gap-6 sm:gap-8 md:gap-10
    border-b
    overflow-x-auto md:overflow-x-visible
    whitespace-nowrap
    scrollbar-hide
    
    px-4 sm:px-6 md:px-0
    -mx-4 sm:-mx-6 md:mx-0
  "
>
  {tabs.map((tab) => {
    const isActive = activeTab === tab.id;

    return (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className="
          flex items-center gap-2 pb-3 relative
          shrink-0
        "
      >
        {/* Icon */}
        <div
          className={`rounded-full p-2 sm:p-3 transition-all cursor-pointer ${
            isActive ? "bg-red-300" : "bg-gray-200"
          }`}
        >
          <img
            src={tab.icon}
            alt={tab.label}
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
          />
        </div>

        {/* Text */}
        <p
          className={`font-medium text-sm sm:text-base transition-all ${
            isActive ? "text-red-400" : "text-gray-500"
          }`}
        >
          {tab.label}
        </p>

        {/* Underline */}
        {isActive && (
          <span className="absolute bottom-0 left-0 h-[3px] w-full bg-red-500 rounded-full"></span>
        )}
      </button>
    );
  })}
</div>


  );
};

export default Tabs;
