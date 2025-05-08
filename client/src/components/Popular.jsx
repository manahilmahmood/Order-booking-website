import React from 'react'
import {popularBrand,}from '../utli/objectData/populardata'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const Popular = () => {
    return (
      <div className=" h-auto ml-2">
      <h1 className="text-[2rem] text-2xl py-8 font-bold text-gray-900 ">Popular Brand</h1>
      
  
        <div className="flex flex-wrap space-x-5 cursor-pointer p-2 my-2">
        <Swiper 
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={5}
        navigation={true}
        loop={true}
        className="px-5"
        >
        
          {popularBrand.map((item) => (
            <SwiperSlide key={item.id}>
            <div className=" w-[190px] h-[150px] bg-slate-20 rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow pointer cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[70px] h-[60px] object-contain mb-2 transition-transform ease-linear duration-300 hover:scale-110"
              />
              <p className="text-md font-medium">{item.title}</p>
             </div>
          </SwiperSlide>
          ))}
          </Swiper>
        </div>

</div>

    );
  };

export default Popular






