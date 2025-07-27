import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StorytellingSlider = () => {
  const slides = [
    {
      bg: "https://sdg-action.org/wp-content/uploads/2023/07/Seppo_main-2048x1038.jpg",
      title: "MAKE AN IMPACT",
      subtitle:
        "Every purchase empowers 2000+ women and supports over 5,000 workers, who bring our products to life with passion and precision.",
      button: "LEARN MORE",
    },
    {
      bg: "https://scontent.fbbi3-1.fna.fbcdn.net/v/t39.30808-6/474146615_912081147575899_4572400778151139892_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8uK_CQyMVLkQ7kNvwFh69Rz&_nc_oc=AdkurSBWzMtKfakKPemnZUcaFm3Noa9lhk0lB3WGlhSnH8bPM5srzC_SAL3NMr5dH0J5uyGVLsoPlNNJvTCwoDoL&_nc_zt=23&_nc_ht=scontent.fbbi3-1.fna&_nc_gid=l0MrYI5gQtBaDHyesfbK3g&oh=00_AfQnrADQvDnRfmliSPEG9kQHN0XDyG7PHoBOkrnWkrPzDA&oe=6888F972",
      title: "CRAFTED WITH PASSION",
      subtitle: "From design to delivery, we ensure excellence at every step.",
      button: "EXPLORE PRODUCTS",
    },
    {
      bg: "https://www.technogym.com/wpress/wp-content/uploads/2018/11/artificial-intelligence-img1.jpg",
      title: "THE FUTURE OF SPORTS",
      subtitle:
        "Innovative designs and sustainable practices for tomorrow’s athletes.",
      button: "DISCOVER MORE",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="absolute inset-0  bg-opacity-40"></div>
              <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>
                <button className="mt-4 px-8 py-3 bg-red-600 text-white font-bold text-lg rounded shadow hover:bg-red-700 transition">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StorytellingSlider;
