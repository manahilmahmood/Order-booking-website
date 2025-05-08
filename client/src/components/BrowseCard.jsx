import React from "react";
import { browseProduct } from "../utli/objectData/browsedata";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const BrowseCard = () => {
  return (
    <div className="ml-4 bg-slate-50">
      <h1 className="text-[2rem] text-2xl py-8 font-bold text-gray-900">
        <span className="text-slate-900">Browse by Categories</span>
      </h1> 

      <div className="relative">

        <Swiper
          modules={[Navigation]}
          navigation={{clickable:true }}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          className="px-5"
        >
          {browseProduct.map((item) => (
            <SwiperSlide key={item.id}>
            <Link to={item.to || "#"}>
              <div className="w-[200px] h-[190px] bg-slate-100 rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[70px] h-[60px] object-contain mb-2 transition-transform ease-linear duration-300 hover:scale-110"
                />
                <p className="text-md font-medium">{item.title}</p>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Image Banner */}
      <div className="flex space-x-4 items-center w-full h-full mt-24 cursor-pointer px-8">
        <img
          src="https://d91ztyz4qy326.cloudfront.net/storeking/1430/conversions/collected_from_garden-cover.jpg"
          className="w-[25rem] rounded-2xl"
        />
        <img
          src="https://d91ztyz4qy326.cloudfront.net/storeking/1431/conversions/seasonal_fruits-cover.jpg"
          className="w-[25rem] rounded-2xl"
        />
        <img
          src="https://d91ztyz4qy326.cloudfront.net/storeking/1432/conversions/special_offer_on_seafood-cover.jpg"
          className="w-[25rem] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default BrowseCard;
