import React from 'react'
import Cards from '../components/Cards'
import BrowseCard from '../components/BrowseCard'
import Bannar from '../components/Bannar'
import Trending from '../components/Trending'
import FlashSale from '../components/FlashSale'
import Popular from '../components/Popular'
import Slider from "../components/Slider"
import Benefit from '../components/Benefit'


function Home() {
  return (
    <>
    
    <Slider/>
    <BrowseCard/>
    <Cards />
    <Bannar/>
    <Trending/>
    <FlashSale/>
    <Popular/>
    <Benefit/>

</>
  )
}

export default Home