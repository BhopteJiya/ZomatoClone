import React from 'react'
import Collection1 from './Collection1'
import Banner from './Banner'
import Restaurants from './Restaurants'

const DiningOut = ( {city} ) => {
  return (
    <>
    <Collection1  city={city}  ></Collection1>
    <Banner></Banner>
    <Restaurants></Restaurants>
    </>
  )
}

export default DiningOut