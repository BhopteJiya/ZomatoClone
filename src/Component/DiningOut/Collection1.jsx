import { useNavigate } from "react-router-dom";
import coll1 from "../../assets/Collection-diningout/coll1.avif";
import coll2 from "../../assets/Collection-diningout/coll2.avif";
import coll3 from "../../assets/Collection-diningout/coll3.avif";
import coll4 from "../../assets/Collection-diningout/coll4.avif";
import coll5 from "../../assets/Collection-diningout/coll5.avif";
import coll6 from "../../assets/Collection-diningout/coll6.avif";
import coll7 from "../../assets/Collection-diningout/coll7.avif";
import coll8 from "../../assets/Collection-diningout/coll8.avif";

import { useState, useRef, useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Collection1 = () => {
  const scrollRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

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

  const handleScroll = () => {
    const el = scrollRef.current;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const nav = useNavigate();

  const CollectionArray = [
    { id: "1", label: "Luxury Dining Places", label2: "21 Places", icon: coll1 },
    { id: "2", label: "Romantic Dining Places", label2: "15 Places", icon: coll2 },
    { id: "3", label: "Great Cafe", label2: "22 Places", icon: coll3 },
    { id: "4", label: "Local Favourite Places", label2: "21 Places", icon: coll4 },
    { id: "5", label: "Pan-Asian Restaurants", label2: "35 Places", icon: coll5 },
    { id: "6", label: "Sky High Sips", label2: "21 Places", icon: coll6 },
    { id: "7", label: "Best Buffets", label2: "33 Places", icon: coll7 },
    { id: "8", label: "Best Bar And Pubs", label2: "23 Places", icon: coll8 },
  ];

  return (
    <div className="max-h-screen w-full bg-gray-100 p-3">
      <div className="text-4xl mt-2 mb-2">Collections</div>

      <div className="flex flex-row justify-between mx-2 flex-wrap">
        <p className="text-gray-600 mt-3 text-xl">
          Explore curated lists of top restaurants, cafes, pubs, and bars in Indore, based on trends
        </p>
        <button className="mt-3 font-semibold text-md">
          All collections at your place
        </button>
      </div>

      <div className="relative">

        {/* LEFT ARROW */}
        {showLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       bg-gray-200 shadow-md rounded-full p-2 hover:scale-110 transition"
          >
            <ChevronLeftIcon />
          </button>
        )}

        {/* RIGHT ARROW */}
        {showRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       bg-gray-200 shadow-md rounded-full p-2 hover:scale-110 transition"
          >
            <ChevronRightIcon />
          </button>
        )}

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 mt-6 overflow-x-auto scrollbar-hide pb-4 px-10"
        >
          {CollectionArray.map((item) => (
            <div
              key={item.id}
              className="relative w-60 h-70 rounded-xl overflow-hidden cursor-pointer flex-shrink-0"
              onClick={() => nav("/detailedcollect")}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{item.label}</h3>
                <p className="text-sm">{item.label2}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Collection1;
