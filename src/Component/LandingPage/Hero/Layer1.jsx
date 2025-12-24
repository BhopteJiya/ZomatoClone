import React from "react";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Layer1 = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">

            {/* Background Video */}
            <video
                src="/Topvideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Content on top of video */}
            <div className="relative z-10 flex flex-col items-center-safe justify-end h-full text-white text-center px-4">

                <img
                    src="/logo.avif"
                    alt="logo"
                    className="w-48 mb-6"
                />

                <h1 className="text-3xl md:text-5xl font-semibold">
                    India&apos;s #1 <br /> food delivery app
                </h1>

                <p className="mt-4 text-lg text-gray-200 max-w-xl">
                    Experience fast and easy online ordering
                    <br /> on the Zomato app
                </p>

                <div className="flex gap-4 mt-6">

                    <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3">
                        <img
                            src="/googleplay.png"
                            alt="Google Play"
                            className="h-8 w-8"
                        />
                        <div className="text-left leading-tight">
                            <span className="text-xs text-gray-300">Get it on</span>
                            <p className="text-sm font-semibold">Google Play</p>
                        </div>
                    </button>


                    <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3">
                        <img
                            src="/apple.png"
                            alt="App Store"
                            className="h-8 w-8"
                        />
                        <div className="text-left leading-tight">
                            <span className="text-xs text-gray-300">Download on the</span>
                            <p className="text-sm font-semibold">App Store</p>
                        </div>
                    </button>
                </div>
                <motion.div className="m-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <motion.h1 className="font-semibold" >Scroll Down <KeyboardDoubleArrowDownIcon /></motion.h1>
                </motion.div>
            </div>
        </div>
    );
};

export default Layer1;
