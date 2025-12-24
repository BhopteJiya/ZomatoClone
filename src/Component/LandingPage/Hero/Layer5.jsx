import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Layer5 = () => {
    const nav=useNavigate();

    return (
        <div className='max-h-fit w-full ' >
            <div className='' >
                <div className='flex flex-col justify-center items-center m-6' >
                    <div><img src="/eternal.avif" alt="eternal" />
                    </div>
                    <div className='font-bold text-3xl m-2 text-gray-600 ' >Powering India's  <br /> changing LifeStyle</div>
                </div>
                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-10 cursor-pointer">

                    {/* single card */}
                    <div className="flex flex-col items-center text-center w-full h-fit w-fit p-5 border border-pink-500 bg-gradient-to-bl from-pink-300 to-white rounded-2xl 
                    transition-transform duration-300 hover:scale-110">

                        <img
                            src="/zomatored.png"
                            alt="zomatored"
                            className="h-70 w-70 object-contain mb-4 rounded-3xl"
                        />

                        <p className="font-semibold text-lg">Zomato</p>

                        <p className="text-sm text-gray-700 mt-2">
                            Get the app now <br />
                            to start ordering <br />
                            your favorite dishes!
                        </p>
                        <button className='m-4'  onClick={() => nav("/home")} >Check it out <ArrowRightIcon></ArrowRightIcon></button>
                    </div>

                    {/* single card */}
                    <div className="flex flex-col items-center text-center  w-full h-fit w-fit p-5
    border border-yellow-400 
    bg-gradient-to-bl from-yellow-300 to-white 
    rounded-2xl  transition-transform duration-300 hover:scale-110">

                        <img
                            src="/Blinkit.avif"
                            alt="blinkit"
                            className=" object-contain mb-4 rounded-3xl"
                        />

                        <p className="font-semibold text-lg">Blinkit</p>

                        <p className="text-sm text-gray-700 mt-2">
                            Get the app now <br />
                            to start ordering <br />
                            your favorite dishes!
                        </p>
                     <button className='m-4'  onClick={() => nav("/home")} >Check it out <ArrowRightIcon></ArrowRightIcon></button>

                    </div>

                    {/* single card */}
                    <div className="flex flex-col items-center text-center 
    w-full h-fit w-fit p-5 border border-blue-400   bg-gradient-to-bl from-blue-400 to-white 
    rounded-2xl transition-transform duration-300 hover:scale-110 ">

                        <img
                            src="/district.avif"
                            alt="district"
                            className="rounded-3xl object-contain mb-4"
                        />

                        <p className="font-semibold text-lg">District</p>

                        <p className="text-sm text-gray-700 mt-2">
                            Get the app now <br />
                            to start ordering <br />
                            your favorite dishes!
                        </p>
                  <button className='m-4'  onClick={() => nav("/home")} >Check it out <ArrowRightIcon></ArrowRightIcon></button>

                    </div>

                    {/* single card */}
                    <div className="flex flex-col items-center text-center  w-full h-fit w-fit p-5    border border-pink-500 
    bg-gradient-to-bl from-pink-300 to-white 
    rounded-2xl transition-transform duration-300 hover:scale-110">

                        <img
                            src="/hyperpure.avif"
                            alt="hyperpure"
                            className="rounded-3xl object-contain mb-4"
                        />

                        <p className="font-semibold text-lg">Hyperpure</p>

                        <p className="text-sm text-gray-700 mt-2">
                            Get the app now <br />
                            to start ordering <br />
                            your favorite dishes!
                        </p>
                     <button className='m-4'  onClick={() => nav("/home")} >Check it out <ArrowRightIcon></ArrowRightIcon></button>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Layer5