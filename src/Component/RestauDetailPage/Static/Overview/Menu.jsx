import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Menu = () => {
  return (
    <>
    <div className='w-[720px] border border-gray-400 rounded-xl mt-3' >
<div className='flex justify-between m-4' >
    <p>Menu</p>
    <p className='text-red-500' >See all Menu<ArrowRightIcon/></p>
</div>
<div className='m-4' >
    <p className='mb-3' >Cuisines</p>
  <div className="flex flex-wrap gap-3 ">
  {[
    "North Indian",
    "Pizza",
    "Pasta",
    "Chinese",
    "Japanese",
    "Biryani",
    "Fast Food",
    "Dessert",
  ].map((item) => (
    <button
      key={item}
      className="flex items-center gap-2 px-3 py-1
                 border border-yellow-200 rounded-full text-sm
                 hover:bg-gray-100"
                 >
      <StarIcon sx={{ fontSize: 16,color:"yellow" }} />
      <span className="text-yellow-700 font-medium">
        {item}
      </span>
       <StarIcon sx={{ fontSize: 16,color:"yellow" }} />
    </button>
  ))}
</div>

</div>
<div className='flex'>
  <div className='m-4  ' >
  <img src="/menu1.avif" alt="barmenu"  className='rounded-md object-cover   transition-transform duration-300
             hover:scale-95 cursor-pointer' />
   <p className='text-gray-700 text-semibold ' >Bar Menu</p>
   <p  className='text-gray-700 text-xs'>11 pages</p>
  </div>

   <div className='m-4 ' >
  <img src="/menu2.avif" alt="barmenu"  className='rounded-md object-cover   transition-transform duration-300
             hover:scale-95 cursor-pointer' />
   <p className='text-gray-700 text-semibold ' >Food Menu</p>
   <p  className='text-gray-700 text-xs'>10 pages</p>
  </div>
    <div className='m-4 ' >
  <img src="/beverages.avif" alt="barmenu"  className='rounded-md object-cover   transition-transform duration-300
             hover:scale-95 cursor-pointer' />
   <p className='text-gray-700 text-semibold '>Beverages</p>
   <p  className='text-gray-700 text-xs'>5 pages</p>
  </div>
</div>

    </div>
    <div className='border my-3 border-gray-500 rounded-xl w-[720px] ' >
      <div  className='p-3'>

   <p> <span className='text-2xl' >Average Cost</span> <br />
₹2,500 for two people (approx.) Without alcohol
<p className='text-xs text-gray-500'>

Exclusive of applicable taxes and charges, if any
</p>
<p className='text-xs text-gray-500'>
How do we calculate cost for two?
</p>
<p className='text-gray-600'>
Digital payments accepted</p>
</p>
    </div>
      </div>
     <div className="border my-3 border-gray-500 rounded-xl max-w-[720px] w-full">
  <p className="m-3 text-2xl font-semibold">More Info</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    
    <div className="flex items-center gap-2">
      <CheckCircleIcon sx={{ color: "green" }} />
      <span>Lunch</span>
    </div>

    <div className="flex items-center gap-2">
      <CheckCircleIcon sx={{ color: "green" }} />
      <span>Dinner</span>
    </div>

    <div className="flex items-center gap-2">
      <CheckCircleIcon sx={{ color: "green" }} />
      <span>Serve Alcohol</span>
    </div>

    <div className="flex items-center gap-2">
      <CheckCircleIcon sx={{ color: "green" }} />
      <span>Outdoor Sitting</span>
    </div>

    <div className="flex items-center gap-2">
      <CheckCircleIcon sx={{ color: "green" }} />
      <span>Indoor Sitting</span>
    </div>

  </div>
</div>

             </>
  )
}

export default Menu