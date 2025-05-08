import React from 'react';
import SidebarFilter from '../components/SideBarFilter';
import { explorFoodData } from '../utli/objectData/explorfooddata';

const ExplorFood = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-5">
      {/* Heading */}
      <div className=" flex gap-2 mb-6 ml-6 border-b">
        <h1 className="text-[2rem] font-bold text-gray-900">Explore Food</h1><span className="text-lg text-[2rem] mt-3 font-normal ">({explorFoodData.length} Products Found)</span>
      </div>

      {/* Sidebar + Products Grid */}
      <div className="flex ">
        {/* Sidebar */}
        <div className=" flex-col w-[20%]">
          <SidebarFilter />
        </div>

        {/* Products */}
        <div className="w-[80%] grid grid-cols-5 gap-5 p-3">
          {explorFoodData.map((item) => (
            <div
              key={item.id}
              className="border border-slate-200 bg-white rounded-md p-2 relative shadow-sm"
            >
              {/* Wishlist icon */}
              <i className="fa-regular fa-heart absolute top-2 right-2 bg-white p-2 rounded-full shadow-sm text-slate-700 hover:text-green-500 cursor-pointer"></i>

              {/* Flash Sale Badge */}
              {item.flash && (
                <p className="absolute text-sm bg-black text-white w-[4rem] h-[2rem] rounded-lg ml-2 mt-1 flex items-center justify-center">
                  Flash Sale
                </p>
              )}

              {/* Add to Cart Button */}
              <button className="absolute bg-green-500 text-white rounded-3xl w-20 h-7 bottom-24 right-3 text-sm flex items-center justify-center gap-1">
                <i className="fa-solid fa-bag-shopping"></i> Add
              </button>

              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-3 transition-transform ease-linear duration-300 hover:scale-110"
              />

              {/* Product Info */}
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="text-sm text-gray-500">{item.description}</p>

              {/* Price Info */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-md font-bold text-green-600">{item.price}</span>
                <span className="text-sm line-through text-gray-400">{item.oldPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorFood;
