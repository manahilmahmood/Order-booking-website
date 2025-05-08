import React from 'react'
import Cards from '../components/Cards'
import BrowseCard from '../components/BrowseCard'
import Bannar from '../components/Bannar'
import Trending from '../components/Trending'
import FlashSale from '../components/FlashSale'
import Popular from '../components/Popular'
import Slider from "../components/Slider"
import Benefit from '../components/Benefit'


function Admin() {
  return (
    <div className= ' w-full bg-slate-50'>
    <Slider/>
    <BrowseCard/>
    <Cards />
    <Bannar/>
    <Trending/>
    <FlashSale/>
    <Popular/>
    <Benefit/>
    </div>

  )
}


export default Admin