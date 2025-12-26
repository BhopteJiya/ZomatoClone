import React from "react";
import { restaurants } from "../../assets/assets";
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Restaurants = () => {
  return (
    <div>
        <p className=" mt-5 mb-8 text-4xl " >Restaurants</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {restaurants.map((res) => (
          <div
          key={res.id}
          className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
          <img
            src={res.image}
            alt={res.name}
            className="h-48 w-full object-cover"
          />

          <div className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{res.name}</h3>
              <span className="bg-green-700 text-white text-sm px-1 py-1 rounded">
                 {res.rating}
                 <span  > 
                 <StarIcon sx={{ fontSize: "small" }} ></StarIcon>
                 </span>
              </span>
            </div>

            <p className="text-gray-500 text-sm">
              {res.cuisine.join(", ")}
            </p>
            <div className="flex justify-between" >

            <p className="text-gray-400 text-sm mt-1">
              {res.address}
            </p>
            <p  className="text-gray-400 text-sm mt-1" ><CurrencyRupeeIcon sx={{fontSize:"small"}} />{res.price} for two</p>
            </div>

            <p className="text-gray-500 text-sm mt-1">
               {res.distance}
            </p>
          </div>
        </div>
      ))}
    </div>
            </div>
  );
};

export default Restaurants;
