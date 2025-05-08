import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./CSS/Slider.css";

const Slider = () => {
  return (
    <div className="w-full px-2 py-2">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2700, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{clickable:true}}
        loop={true}
      >
      
        <SwiperSlide>
          <img
            src="https://d91ztyz4qy326.cloudfront.net/storeking/27/conversions/slider_three-cover.png"
            alt="slider"
            className="w-full h-auto p-1 rounded-[2rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d91ztyz4qy326.cloudfront.net/storeking/26/conversions/slider_two-cover.png"
            alt="slider"
            className="w-full h-auto p-1 rounded-[2rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d91ztyz4qy326.cloudfront.net/storeking/25/conversions/slider_one-cover.png"
            alt="slider"
            className="w-full h-auto p-1 rounded-[2rem]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
