import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const BottomContent = () => {
    return (
          <>
        <div>
            <h1 className='text-2xl text-gray-900 leading-loose tracking-widest my-5 mt-10' >HELP US MAKE ZOMATO BETTER</h1>
            <div className='p-3 my-3' >
                <p className='text-xl font-semibold' >
                    Report an error in this listing
                </p>
                <p className='text-gray-600' >
                    Help us make Zomato more updated and relevant for everyone
                </p>

                <button className='text-red-500' >

                    Report now <ArrowRightIcon></ArrowRightIcon>
                </button>
            </div>
              <div className='p-3 my-3' >
                <p className='text-xl font-semibold' >
                  Claim this listing
                </p>
                <p className='text-gray-600' >
                    Claim this listing to get access to a free management and analytics dashboard, where you can edit information, track your page views, and more
                </p>

                <button className='text-red-500' >

                   Claim now <ArrowRightIcon></ArrowRightIcon>
                </button>
            </div>


        </div>
        <div>
            <div className='m-2'>
                <p className='text-xl font-semibold ' >  Related to UBUD, By Pass Road (North)</p>
                <p className='my-3' >Restaurants in Indore, Indore Restaurants, By Pass Road (North) restaurants, Best By Pass Road (North) restaurants, North Indore restaurants, Casual Dining in Indore, Casual Dining near me, Casual Dining in By Pass Road (North), in Indore, near me, in By Pass Road (North)</p>
            </div>
             <div className='m-2'>
                <p className='text-xl font-semibold ' >  Restaurants around By Pass Road (North)</p>
                <p className='my-3' >Pipliyanana restaurants, Khajrana restaurants, Tilak Nagar restaurants, Old Palasia restaurants Casual Dining in Indore, Casual Dining near me, Casual Dining in By Pass Road (North), in Indore, near me, in By Pass Road (North)</p>
            </div>
             <div className='m-2'>
                <p className='text-xl font-semibold ' > Frequent searches leading to this page</p>
                <p className='my-3' >ubud menu, ubud by pass road (north) menu, ubud indore, ubud indore menu, ubud restaurant Casual Dining in Indore, Casual Dining near me, Casual Dining in By Pass Road (North), in Indore, near me, in By Pass Road (North)</p>
            </div>

        </div>
      
        </>
    )
}

export default BottomContent