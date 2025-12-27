import React from 'react'
import { Places } from '../assets/assets'
import StarIcon from '@mui/icons-material/Star';
import coll1 from "../assets/Collection-diningout/coll1.avif";


const AllDetailedCollection = () => {
    return (
        <div className='mx-4 md:mx-10 lg:mx-24 h'>

            <div className="relative flex items-end h-[260px] rounded-xl overflow-hidden my-10">
                {/* Background Image */}
                <img
                    src={coll1}
                    alt="Luxury Dining"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute  h-40 w-90 rounded-xl bg-black/80 flex flex-col justify-end p-5">
                    <p className="text-white text-sm tracking-widest">
                        ZOMATO COLLECTIONS
                    </p>

                    <p className="text-white text-xl font-semibold mt-1">
                        Luxury Dining Places
                    </p>

                    <p className="text-white text-sm mt-1 max-w-md">
                        Restaurants that are unmatched on multiple fronts with luxurious indoor
                        settings and extravagant menus.
                    </p>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Places.map((res) => (
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
                                <h3 className="font-semibold text-2lg">{res.name}</h3>
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
                            </div>

                            <p className="text-gray-500 text-sm mt-1">
                                {res.distance}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllDetailedCollection