import React from "react";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";

const Layer4 = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

    
      <img
        src="/concave.jpg"
        alt=""
        className="absolute h-full w-full"
      />


      <div className="relative z-10 h-full flex items-center justify-center">

        <motion.img
          src="/coin1.avif"
          alt="coin1"
          className="absolute top-20 left-26 w-33"
          initial={{ x: -200, y: -200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

     
        <motion.img
          src="/coin2.avif"
          alt="coin2"
          className="absolute top-15 right-22 w-55"
          initial={{ x: 200, y: -200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        />

        {/* CENTER CONTENT */}
        <div className="relative z-20 text-center">

          <img
            src="/gold.avif"
            alt="gold"
            className="mx-auto w-[35%]"
          />

          <h1 className="text-xl font-bold mt-6">
            Gold Membership
          </h1>

          <p className="text-3xl text-yellow-700">
            India's top savings <br /> program for food lovers
          </p>

          <p className="m-3 text-3xl font-bold text-white flex items-center justify-center gap-x-2 tracking-widest">
            <StarIcon className="text-yellow-700" />
            <span>GOLD BENEFITS</span>
            <StarIcon className="text-yellow-700" />
          </p>

          {/* STATS */}
          <div className="mt-10 flex gap-10 justify-center">

            {/* ticket 1 */}
            <div className="flex items-center gap-4">
              <img src="/ticket1.avif" alt="" className="w-20" />
              <div>
                <p className="font-semibold text-white text-left">Free Delivery</p>
                <p className="text-sm text-gray-300">
                  At all restaurants within 7 km
                </p>
              </div>
            </div>

            {/* ticket 2 */}
            <div className="flex items-center gap-4">
              <img src="/ticket2.avif" alt="" className="w-20" />
              <div>
                <p className="font-semibold text-white text-left ">Up to 30% extra off</p>
                <p className="text-sm text-gray-300">
                  At 20,000+ partner restaurants
                </p>
              </div>
            </div>

          </div>
        </div> 

        {/* BOTTOM COIN */}
        <motion.img
          src="/coin3.avif"
          alt="coin3"
          className="absolute bottom-20 right-38 w-40"
          initial={{ x: 200, y: 200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        />

      </div> 
    </div>
  );
};

export default Layer4;
