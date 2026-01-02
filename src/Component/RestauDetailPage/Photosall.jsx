import React from 'react'
import { restaurants } from '../../assets/assets'

const Photosall = () => {
  return (
    <>
    <div>Photos</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer ">

    {
        restaurants.map((res)=>(
            <div key={res.id}>
                <img src={res.image} alt="photo" 
                 loading="lazy"
            className="h-48 w-full object-cover"
             />
            </div>

        ))
    }
    </div>
    </>
  )
}

export default Photosall