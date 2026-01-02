import React from 'react'
import DiningOffer from './DiningOffer'
import Menu from './Menu'
import ExploreOtherRes from './ExploreOtherRes'
import { restaurants } from '../../../../assets/assets'
import BottomContent from './BottomContent'
import HomeFooter from '../../../Footer/HomeFooter'
import Table from './Table'
import Direction from './Direction'


const Overview = ({setActiveTab} ) => {
  return (
   <section id="overview" className="py-10">
<div   className="flex gap-6">
    <div  className="">

      <DiningOffer></DiningOffer>
      <Menu></Menu>
      <ExploreOtherRes
      title="Explore Other Restaurants"
      ></ExploreOtherRes>
      <BottomContent></BottomContent>
      <HomeFooter></HomeFooter>
      </div>
     
      <div className="flex-1">
      <div className="sticky top-24 space-y-6">
        <Table  setActiveTab={setActiveTab} ></Table>
        <Direction></Direction>
      </div>
    </div>
     </div>
    </section>
  )
}

export default Overview