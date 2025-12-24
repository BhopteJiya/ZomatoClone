import apna from "../../assets/delivery-brands/ApnaSweet.avif";
import burger from "../../assets/delivery-brands/Burgerking.png";
import dominos from "../../assets/delivery-brands/Dominos.avif";
import kfc from "../../assets/delivery-brands/kfc.avif";
import mcdelivery from "../../assets/delivery-brands/McDelivery.avif";
import nafees from "../../assets/delivery-brands/Nafees.avif";
import oye24 from "../../assets/delivery-brands/Oye24.avif";
import tinkus from "../../assets/delivery-brands/tinkus.avif";
import waffle from "../../assets/delivery-brands/waffle.avif";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useRef } from "react";

const TopBrands = () => {
    const scrollRef = useRef(null);

    const brands = [
        { id: 1, label: "ApnaSweets", label2: "26 min", icon: apna },
        { id: 2, label: "BurgerKing", label2: "16 min", icon: burger },
        { id: 3, label: "Dominos", label2: "20 min", icon: dominos },
        { id: 4, label: "KFC", label2: "36 min", icon: kfc },
        { id: 5, label: "McDelivery", label2: "30 min", icon: mcdelivery },
        { id: 6, label: "Nafees", label2: "10 min", icon: nafees },
        { id: 7, label: "Oye24", label2: "12 min", icon: oye24 },
        { id: 8, label: "Tinkus", label2: "38 min", icon: tinkus },
        { id: 9, label: "The Belgian Waffle", label2: "40 min", icon: waffle },
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
        <div className="mb-8">
  {/* Heading */}
  <p className="text-4xl font-semibold mb-10">
    Top brands for you
  </p>

  {/* Scroll Wrapper */}
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
      className="flex gap-10 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth px-12"
    >
      {brands.map((item) => (
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

          <p className="mt-3 font-medium text-gray-800">
            {item.label}
          </p>
          <p className="text-sm text-gray-500">
            {item.label2}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

    );
};

export default TopBrands;
