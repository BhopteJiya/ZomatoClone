import React from 'react'

const DiningOffer = () => {
  return (
    <div className='border border-gray-400 rounded-xl w-[720px] p-10 mb-5' >
    <h1 className=' text-2xl'  >Dining Offers</h1>
    <p className='mb-6'>Tap on any offer to know more </p>

    <div className='flex gap-4 flex-wrap' >
        <div className='text-white rounded-xl flex flex-col justify-between  bg-gradient-to-r from-blue-300 via-blue-600 to-blue-800 w-fit p-3' >
            <div className='mb-6 text-sm font-semibold'>
            <h1>PRE-BOOK OFFER</h1>
            </div>
            <div  className=' text-sm '>
                <p>Flat 10% OFF</p>
                <p>Valid from 12PM to 5PM <br /> 02 Jan Booking required</p>
            </div>
</div>
             <div className='border border-gray-300 rounded-xl flex flex-col justify-between  w-fit p-3' >
            <div className='mb-6 text-sm font-semibold'>
            <h1 className='text-blue-400 ' >SURPRISE</h1>
            </div>
            <div  className=' text-sm '>
                <p  className='font-semibold' >Get a <br />scratch card after</p>
                <p>after every transaction</p>
            </div>
</div>
             <div className=' rounded-xl flex flex-col justify-between border border-gray-300  w-fit p-3' >
            <div className='mb-6 text-sm font-semibold'>
            <h1 className='text-blue-400'>BANK OFFER</h1>
            </div>
            <div  className=' text-sm '>
                <p className='font-semibold'>25% OFF up to ₹5000 <br /> using American Express <br /> Platinum Card</p>
                <p>and more with other banks</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default DiningOffer;