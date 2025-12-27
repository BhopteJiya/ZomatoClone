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
        className="w-full h-96 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-4">
        {restaurant.name}
      </h1>

      <p className="text-gray-600 mt-2">
        {restaurant.cuisine.join(", ")}
      </p>

      <p className="mt-2">
         {restaurant.rating}
      </p>

      <p className="mt-2 text-gray-700">
        {restaurant.address}
      </p>

      <p className="mt-4">
        {restaurant.description}
      </p>

      <div className="mt-6 flex gap-6">
        <span>{restaurant.timings}</span>
        <span>{restaurant.costForTwo}</span>
      </div>
    </div>
  );
};

export default RestaurantDetail;
