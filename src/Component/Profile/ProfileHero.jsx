import React from 'react'
import EditSquareIcon from '@mui/icons-material/EditSquare';
import { color } from 'framer-motion';

const ProfileHero = () => {
  return (
    <div  >
   <div className='flex relative h-70 w-full bg-red-200 '>
   <div className='flex  items-center' >
    <img src="/Profileicon.avif" alt="profile" />
     
   </div>
   <div className='' >
    <div>
    <button className='text-white bg-red-400 p-2 rounded-md' ><EditSquareIcon sx={{color:"white"}} /> EditProfile</button>
    </div>
    <div className='flex gap-6' >
        <p>0 Review</p>
        <p>0 Photos</p>
        <p>0 Followers</p>
    </div>

   </div>
   
   
   </div>


    </div>
  )
}

export default ProfileHero