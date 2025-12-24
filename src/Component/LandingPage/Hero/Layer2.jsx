import { motion } from "framer-motion";

const Layer2 = () => {
  return (
    <div className="relative min-h-screen w-full">

      {/* Background */}
      <img
        src="/thread1.avif"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 h-full grid grid-cols-3 items-center px-20">

        {/* LEFT COLUMN – Burger */}
        <div>
          <img src="/toomato.avif" alt="static" className="w-20" />
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="flex justify-start"
          >
            <img src="/layer2.avif" alt="burger" />
          </motion.div>
        </div>

        {/* CENTER COLUMN – Text */}
        <div>
          <motion.div
            initial={{ z: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="text-center mb-15"
          >
            <img src="/layer2.3.avif" alt="static" className="w-20 mb-20" />
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="text-center mb-15"
          >
            <h1 className="text-red-500 text-6xl sm:text-5xl mb-7 font-bold">
              Better food for <br /> more people
            </h1>
            <p className="mt-4 text-gray-600 text-2lg">
              For over a decade, we’ve enabled our <br />
              customers to discover new tastes, <br />
              delivered right to their doorstep
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN – Momos + Pizza */}
        <div className="flex flex-col items-end ">
          <motion.img
            src="/layer2.2.avif"
            alt="momos"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <img src="/toomato.avif" alt="static" className="w-20" />

          <motion.img
            src="/layer2.4.avif"
            alt="pizza"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="w-80"
          />
        </div>

      </div>

      {/* Stats Box */}
      <div className='relative flex justify-center mt-5 pb-24'>
        <div className="
          flex gap-5 items-center justify-center 
          bg-white border border-gray-100 
          shadow-md shadow-gray-500 
          rounded-2xl px-6 py-4
        ">
          <div className="flex items-center">
            <div className="p-2">
              <h1 className="text-2xl font-bold text-violet-500 lg:text-3xl 2xl:text-4xl">
                3,00,000+
              </h1>
              <p className="text-slate-500 md:text-base lg:text-lg">restaurants</p>
            </div>
            <img src="/homeicon.webp" alt="homeicon" className="w-14" />
          </div>

          <div className="flex items-center">
            <div className="p-2">
              <h1 className="text-2xl font-bold text-violet-500 lg:text-3xl 2xl:text-4xl">
                800+
              </h1>
              <p className="text-slate-500 md:text-base lg:text-lg">cities</p>
            </div>
            <img src="/locc.avif" alt="location" className="w-10" />
          </div>

          <div className="flex items-center">
            <div className="p-2">
              <h1 className="text-2xl font-bold text-violet-500 lg:text-3xl 2xl:text-4xl">
                3 Billion+
              </h1>
              <p className="text-slate-500 md:text-base lg:text-lg">orders delivered</p>
            </div>
            <img src="/calander.avif" alt="calendar" className="w-12" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Layer2;
