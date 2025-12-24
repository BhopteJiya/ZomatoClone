import coll2 from "../../assets/Collection-diningout/coll2.avif";
import Collection1 from "../DiningOut/Collection1";
import Banner from "../DiningOut/Banner";
import Restaurants from "../DiningOut/Restaurants";
import Explore from "../Delivery/Explore";

const NightLife = () => {
  return (
    <>
    <div  >

   <Collection1></Collection1>
   <Banner></Banner>
   < p className="text-4xl font-semibold mt-10 mb-10" >Nightlife: Night clubs, pubs and bar in Indore</p>
   <Restaurants></Restaurants>
   <Explore></Explore>
    </div>
  </>
  )
}

export default NightLife