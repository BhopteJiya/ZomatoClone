import React from "react";
import { restaurants } from "../../assets/assets";

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
              <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">
                 {res.rating}
              </span>
            </div>

            <p className="text-gray-500 text-sm">
              {res.cuisine.join(", ")}
            </p>

            <p className="text-gray-400 text-sm mt-1">
              {res.address}
            </p>

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
