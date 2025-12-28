import { useParams } from "react-router-dom";
import { restaurants } from "../assets/assets";

const RestaurantDetail = () => {
  const { id } = useParams();
  console.log("Route param id:", id, typeof id);

  const restaurant = restaurants.find(
    (r) => r.id.toString() === id
  );

  if (!restaurant) {
    return <h2>Restaurant not found</h2>;
  }

  return (
   <div className="max-w-6xl mx-auto p-6">

  <img
    src={restaurant.image}
    alt={restaurant.name}
    className="w-full h-96 object-cover rounded-xl"
  />

  <h1 className="text-4xl font-bold mt-6">
    {restaurant.name}
  </h1>

  <p className="text-gray-600 mt-2 text-lg">
    {Array.isArray(restaurant.cuisine)
      ? restaurant.cuisine.join(", ")
      : restaurant.cuisine}
  </p>

  {/* Rating */}
  <div className="flex items-center gap-2 mt-3">
    <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
      ⭐ {restaurant.rating}
    </span>
  </div>

  <p className="mt-3 text-gray-700">
    📍 {restaurant.address}
  </p>

  {/* DESCRIPTION (STATIC) */}
  <p className="mt-6 text-gray-700 leading-relaxed">
    This restaurant is known for delivering delicious food made with quality ingredients and authentic flavors. It offers a wide variety of cuisines and ensures timely delivery with great customer experience. Whether you're craving comfort food or something new, this place aims to satisfy every appetite.
  </p>

  {/* POINTS (STATIC) */}
  <ul className="mt-4 space-y-2">
  <li className="flex items-center gap-2 text-gray-700">
    🍽 Wide variety of cuisines
  </li>
  <li className="flex items-center gap-2 text-gray-700">
    ⭐ Highly rated by customers
  </li>
  <li className="flex items-center gap-2 text-gray-700">
    🚀 Fast & reliable delivery
  </li>
  <li className="flex items-center gap-2 text-gray-700">
    🧼 Hygienic food preparation
  </li>
  <li className="flex items-center gap-2 text-gray-700">
    💳 Multiple payment options available
  </li>
</ul>


  {/* Timings & Cost */}
  <div className="mt-6 flex gap-4 flex-wrap">
    <span className="px-4 py-2 font-bold bg-gray-100 rounded-full text-sm">
    Timing : 7:00 AM - to - 10:00 PM
    </span>
    <span className="px-4 py-2 font-bold bg-gray-100 rounded-full text-sm">
     Monday to Saturday
    </span>
  </div>

</div>

  );
};

export default RestaurantDetail;
