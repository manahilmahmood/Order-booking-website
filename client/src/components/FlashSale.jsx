import React from 'react'
import {flashSale,} from '../utli/objectData/flashsaledata'
import { Link } from 'react-router-dom'

function FlashSale() {
  return (
    <div>
    <div className='flex justify-between my-9 mx-7 '>
    <h1 className="text-[2rem] text-2xl font-bold text-gray-900 ">Flash Sale   </h1> 
    <Link to = "/FlatSale">
      <button className="bg-green-100 hover:bg-green-500 text-green-700 hover:text-white font-semibold text-center w-[6rem] h-[3rem] rounded-full"> View All</button>
    </Link>
    </div>
    <div className='flex justify-between flex-wrap m-5'>
      {flashSale.map((item) => (
        <div key={item.id} className='w-[19%] border border-slate-200 bg-white rounded-md p-2 my-2 relative'>

        <i className="fa-regular fa-heart absolute top-2 right-2 bg-white p-2 rounded-full shadow-sm text-slate-700 hover:text-green-500 cursor-pointer"></i>

        {item.flash &&(
       <p className="absolute item-center text-sm bg-black text-white w-[4rem] h-[2rem] rounded-lg ml-2">Flash Sale</p>
      )}

      <button className=" absolute bg-green-500 text-white rounded-3xl w-20 h-7 mt-48 ml-32"><i className="fa-solid fa-bag-shopping pr-2"></i>Add</button>
          <img
            src={item.image}
            alt={item.title}
            className='w-full h-auto object-cover rounded-md mb-3 transition-transform ease-linear duration-300 hover:scale-110'
          />

          <p className='text-sm font-semibold text-slate-900'>{item.title}</p>
          <p className='text-sm text-gray-500'>{item.description}</p>
          <div className='flex justify-between items-center mt-2'>
            <span className='text-md font-bold text-green-600'>{item.price}</span>
            <span className='text-sm mr-[6rem] line-through text-gray-400'>{item.oldPrice}</span>
          </div>
        </div>
        
      ))}
    </div>
    </div>
  );
}

export default FlashSale;