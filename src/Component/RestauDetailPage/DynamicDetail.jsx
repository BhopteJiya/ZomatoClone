import { useParams } from "react-router-dom";
// import { restaurants } from "../../assets/assets";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Dialog } from "@mui/material";
import { enhancedRestaurants } from "../../assets/assets";
import AddCallIcon from '@mui/icons-material/AddCall';
import { color } from "framer-motion";
import DirectionsIcon from '@mui/icons-material/Directions';
import ReplyIcon from '@mui/icons-material/Reply';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Images from "./Images";



const DynamicDetail = () => {
    const { id } = useParams();
    const [openBookTable, setOpenBookTable] = useState(false);

    const restaurant = enhancedRestaurants.find(
        (r) => r.id.toString() === id
    );

    if (!restaurant) {
        return <h2>Restaurant not found</h2>;
    }

    return (
        <div className=" max-w-6xl mx-auto p-6">

<div className="sticky top-0 z-40 bg-white" >
            <div className=" flex justify-between flex-wrap"  >

                {/* NAME */}
                <h1 className="text-5xl font-bold mt-6">
                    {restaurant.name}
                </h1>

                {/* CUISINE */}


                {/* RATING */}
                <div className="flex gap-3" >

                    <div className="flex items-center gap-2 mt-3">
                        <span className="bg-green-700 text-white px-3 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                            {restaurant.rating.value}
                            <StarIcon sx={{ fontSize: "small" }} />

                        </span>
                        <span className="text-xs ml-2 flex flex-col">
                            {restaurant.rating.count}+ <span className="" >
                                dining ratings
                            </span>
                        </span>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                        <span className="bg-green-700 text-white px-3 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                            {restaurant.rating.value}
                            <StarIcon sx={{ fontSize: "small" }} />

                        </span>
                        <span className="text-xs ml-2 flex flex-col ">
                            {restaurant.rating.count}+<span className="" >
                                delivery ratings
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            <p className="text-gray-500 mt-2 text-lg">
                {Array.isArray(restaurant.cuisine)
                    ? restaurant.cuisine.join(", ")
                    : restaurant.cuisine}
            </p>


            {/* ADDRESS */}
            <p className="mt-1 text-gray-400">
                {restaurant.address.full}
            </p>

            {/* DESCRIPTION */}

            {/* POINTS */}


            {/* TIMINGS */}
            <div className="mt-1 flex gap-4 flex-wrap">
                <span className="px-4 my-2  rounded-full border border-gray-400 text-sm text-gray-500 ">
                    <span className="text-orange-400" > Timing :</span> {restaurant.timing.open} – {restaurant.timing.close}

                </span>
                <span className="px-4 my-2  rounded-full border text-gray-500 border-gray-400 text-sm">
                    Monday to Saturday
                </span>
                <span><p className="mt-2 text-gray-500">
                    <AddCallIcon sx={{ color: "#f87171" }} /> 91{restaurant.mobile}
                </p></span><span className="text-red-400 mt-2 font-bold" >+1 more</span>
            </div>

            {/* Filter buttons */}
            <div className="flex gap-3 m-2 flex-wrap" >
                <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        restaurant.address.full
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-400 rounded-lg ">
                        <DirectionsIcon sx={{ color: "error.light" }} />
                        Directions
                    </button>
                </a>

                <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                        `Check out ${restaurant.name} ${window.location.href}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-400 rounded-lg " > <ReplyIcon sx={{ color: "error.light" }} />Share</button>
                </a>

                <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        restaurant.address.full
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-400 rounded-lg  " ><BeenhereIcon sx={{ color: "error.light" }} />Review</button>
                </a>
                <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        restaurant.address.full
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-400 rounded-lg " ><ReviewsIcon sx={{ color: "error.light" }}></ReviewsIcon>Book a Table</button>
                </a>
            </div>



</div>

            {/* IMAGE */}
          <Images images={restaurant.images}></Images>
            {/* BOOK TABLE BUTTON */}
           
        </div>
    );
};

export default DynamicDetail;
