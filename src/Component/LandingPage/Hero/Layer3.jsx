import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Layer3 = () => {
  // Ref for the phone animation
  const phoneRef = useRef(null);
  const phoneInView = useInView(phoneRef, { once: true });

  return (
    <div className="bg-gradient-to-b from-pink-100 to-white min-h-screen flex flex-col items-center justify-center text-center px-6">

      {/* TEXT SECTION */}
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl text-red-400 font-bold mb-6">
          What’s waiting for you <br /> on the app?
        </h1>

        <p className="text-gray-600 text-lg md:text-xl">
          Our app is packed with features <br />
          that enable you to experience food <br />
          delivery like never before
        </p>
      </div>

      {/* IMAGES SECTION */}
      <div className="flex items-end gap-12">

        {/* LEFT IMAGE */}
        <img
          src="/item1.jpeg"
          alt="feature"
          className="w-60"
        />

        {/* CENTER IMAGE (ANIMATED) */}
        <motion.img
          ref={phoneRef}
          src="/phone.jpeg"
          alt="feature"
          className="w-60"
          initial={{ y: 120, opacity: 0 }}
          animate={phoneInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* RIGHT IMAGE */}
        <img
          src="/item2.jpeg"
          alt="feature"
          className="w-60"
        />

      </div>
    </div>
  );
};

export default Layer3;
