import discount from "../../assets/Collection-diningout/discountbanner.avif";

const Banner = () => {
  return (
    <div>
        <div className="flex flex-wrap m-6 gap-3 text-gray-600" >
            <p className="border border-gray-500 w-fit p-2 rounded-lg" >Filter</p>
            <p className="border border-gray-500 w-fit p-2 rounded-lg">Offer</p>
            <p className="border border-gray-500 w-fit p-2 rounded-lg">Rating: 4.5+</p>
            <p className="border border-gray-500 w-fit p-2 rounded-lg">Pet friendly</p>
            <p className="border border-gray-500 w-fit p-2 rounded-lg">Outdoor seating</p>
            <p className="border border-gray-500 w-fit p-2 rounded-lg">Serves Alcohol</p>
            <p className="border border-gray-500 w-fit p-2 rounded-lg">Open Now</p>
        </div>
        <div><img src={discount} alt=" discount" /></div>
    </div>
  )
}

export default Banner