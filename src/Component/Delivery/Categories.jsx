import pizza from "../../assets/delivery/pizza.avif";
import burg from "../../assets/delivery/Burger.avif";
import cake from "../../assets/delivery/cake.avif";
import biryani from "../../assets/delivery/biryani.avif";
import chicken from "../../assets/delivery/Chicken.avif";
import NN from "../../assets/delivery/NorthIndian.avif";
import sandwitch from "../../assets/delivery/sandwitch.avif";
import thali from "../../assets/delivery/Thali.avif";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRef } from "react";


const Categories = () => {
  const scrollRef = useRef(null);


  const cate = [
    { id: 1, label: "Pizza", icon: pizza },
    { id: 2, label: "Thali", icon: thali },
    { id: 3, label: "Cake", icon: cake },
    { id: 4, label: "North Indian", icon: NN },
    { id: 5, label: "Biryani", icon: biryani },
    { id: 6, label: "Sandwich", icon: sandwitch },
    { id: 7, label: "Burger", icon: burg },
    { id: 8, label: "Chicken", icon: chicken },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
   <div className="bg-gray-100 px-4 py-6">

  {/* Filters */}
  <div className="flex flex-wrap gap-3 text-gray-600 mb-6">
    <p className="border border-gray-400 px-4 py-2 rounded-lg cursor-pointer">
      Filter
    </p>
    <p className="border border-gray-400 px-4 py-2 rounded-lg cursor-pointer">
      Offer
    </p>
    <p className="border border-gray-400 px-4 py-2 rounded-lg cursor-pointer">
      Rating: 4.5+
    </p>
  </div>

  {/* Section Heading */}
  <p className="text-3xl md:text-4xl font-semibold mb-6">
    Inspiration for your first order
  </p>

  {/* Scroll Wrapper (IMPORTANT) */}
  <div className="relative">

    {/* Left Arrow */}
    <button
      onClick={scrollLeft}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                 bg-gray-200 shadow-md rounded-full p-2 hover:scale-110 transition"
    >
      <ChevronLeftIcon />
    </button>

    {/* Right Arrow */}
    <button
      onClick={scrollRight}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                 bg-gray-200 shadow-md rounded-full p-2 hover:scale-110 transition"
    >
      <ChevronRightIcon />
    </button>

    {/* Scroll Container */}
    <div
      ref={scrollRef}
      className="flex gap-10 overflow-x-auto overflow-y-hidden scrollbar-hide px-12 mb-10"
    >
      {cate.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center shrink-0 cursor-pointer"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-md hover:scale-105 transition">
            <img
              src={item.icon}
              alt={item.label}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-gray-700 font-medium">
            {item.label}
          </p>
        </div>
      ))}
    </div>

  </div>
</div>

  );
};

export default Categories;
