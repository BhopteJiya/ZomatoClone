import React from 'react'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from 'react';

const Explore = () => {

    
      const [openIndex, setOpenIndex] = useState(null);
    
      const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div>

        <div className="m-5">
      <p className="text-4xl font-semibold mb-10 mt-20">
        Explore Options near Me
      </p>

      <div className="flex flex-col w-[80%] gap-5">

        {/* 1 */}
        <div>
          <button
            onClick={() => toggle(1)}
            className="text-xl border border-gray-300 p-4 rounded-xl
                       flex justify-between items-center w-full"
          >
            Popular Cuisine near me
            <ArrowDropDownIcon
              className={`transition-transform ${
                openIndex === 1 ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === 1 && (
            <p className="mt-3 text-gray-600 ml-2">
              North Indian, South Indian, Chinese, Italian, Fast Food, Desserts, Chinese, Maharastraian, Bengali,
            </p>
          )}
        </div>

        {/* 2 */}
        <div>
          <button
            onClick={() => toggle(2)}
            className="text-xl border border-gray-300 p-4 rounded-xl
                       flex justify-between items-center w-full"
          >
            Popular restaurant types near me
            <ArrowDropDownIcon
              className={`transition-transform ${
                openIndex === 2 ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === 2 && (
            <p className="mt-3 text-gray-600 ml-2">
              Cafes, Quick Bites, Fine Dining, Bakeries, Food Courts
            </p>
          )}
        </div>

        {/* 3 */}
        <div>
          <button
            onClick={() => toggle(3)}
            className="text-xl border border-gray-300 p-4 rounded-xl
                       flex justify-between items-center w-full"
          >
            Top restaurant chains
            <ArrowDropDownIcon
              className={`transition-transform ${
                openIndex === 3 ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === 3 && (
            <p className="mt-3 text-gray-600 ml-2">
              Domino's, McDonald's, KFC, Burger King, Pizza Hut
            </p>
          )}
        </div>

        {/* 4 */}
        <div>
          <button
            onClick={() => toggle(4)}
            className="text-xl border border-gray-300 p-4 rounded-xl
                       flex justify-between items-center w-full"
          >
            Cities we deliver to
            <ArrowDropDownIcon
              className={`transition-transform ${
                openIndex === 4 ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === 4 && (
            <p className="mt-3 text-gray-600 ml-2">
              Delhi, Mumbai, Bangalore, Pune, Hyderabad, Chennai
            </p>
          )}
        </div>

        {/* 5 */}
        <div>
          <button
            onClick={() => toggle(5)}
            className="text-xl border border-gray-300 p-4 rounded-xl
                       flex justify-between items-center w-full"
          >
            Popular Dishes Near Me
            <ArrowDropDownIcon
              className={`transition-transform ${
                openIndex === 5 ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === 5 && (
            <p className="mt-3 text-gray-600 ml-2">
              Biryani, Pizza, Burgers, Momos, Butter Chicken
            </p>
          )}
        </div>

      </div>
    </div>
    </div>
  )
}

export default Explore



