import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Layer6 = () => {
  const phoneRef = useRef(null);
  const phoneInView = useInView(phoneRef, { once: true });

  return (
    <div className="min-h-screen w-full flex items-center justify-center">

      <div className="m-20 p-10 rounded-3xl bg-gradient-to-b from-white to-pink-300 border-2 border-pink-300 flex items-center gap-16">

        {/* TEXT */}
        <div className="m-10 max-w-md">
          <p className="font-extrabold text-3xl">
            Download the app now!
          </p>
          <p className="font-semibold text-gray-600 mt-2">
            Experience seamless online ordering <br />
            only on the Zomato app
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3">
              <img src="/googleplay.png" className="h-8 w-8" />
              <div className="text-left leading-tight">
                <span className="text-xs text-gray-300">Get it on</span>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </button>

            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3">
              <img src="/apple.png" className="h-8 w-8" />
              <div className="text-left leading-tight">
                <span className="text-xs text-gray-300">Download on the</span>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </button>
          </div>
        </div>

        {/* PHONE */}
        <motion.div
          ref={phoneRef}
          className="relative w-[280px]"
          initial={{ y: 120, opacity: 0 }}
          animate={phoneInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="/halfmobile.avif"
            alt="mobile"
            className="w-full"
          />

          {/* INSIDE PHONE */}
          <div className="absolute top-[38%] left-1/2 -translate-x-1/2 flex flex-col items-center text-center px-4">
            <p className="text-black text-sm mb-4">
              Scan the QR code to <br /> download the app
            </p>
            <img
              src="https://b.zmtcdn.com/data/o2_assets/98cc4eba0a6f59e728e5223a70fd39551742471514.png"
              className="h-20 w-20 bg-white p-2 rounded-lg"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Layer6;
