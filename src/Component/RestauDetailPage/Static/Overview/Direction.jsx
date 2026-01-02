import React from "react";
import { useParams } from "react-router-dom";
import { enhancedRestaurants } from "../../../../assets/assets";
import DirectionsIcon from '@mui/icons-material/Directions';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { toast } from "react-toastify";



const Direction = () => {

  const handleClick = () => {
    toast.success("Restaurant Address copy to clipboard");
  };

  const { id } = useParams(); 

   const restaurant = enhancedRestaurants.find(
          (r) => r.id.toString() === id
      );
  
  if (!restaurant) return <p>Restaurant not found</p>;

  return (
    <div>
      <h1 className="text-xl font-semibold mb-3">Direction</h1>

      <img
        src="/staticmap.png"
        alt="map"
        className="rounded-lg mb-3"
      />

      <p className="text-gray-700">
         {restaurant.address.full}
      </p>
<div className="flex gap-5 mt-5" >
<div>
    <button className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 "
   onClick={handleClick}
   > <ContentCopyIcon/> Copy Url</button>
</div>

<div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            restaurant.address.full
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        >
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-500 rounded-lg ">
                        <DirectionsIcon sx={{ color: "error.light" }} />
                        Directions
                    </button>
                </a>
            </div>

                    </div>
    </div>
  );
};

export default Direction;
