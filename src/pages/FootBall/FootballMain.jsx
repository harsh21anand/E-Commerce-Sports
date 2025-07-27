import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const footballSubcategories = [
  { name: "Balls", image: "/images/football/balls.jpg", path: "/football/balls" },
  { name: "Accessories", image: "/images/football/accessories.jpg", path: "/football/accessories" },
  { name: "GoalKeeper", image: "/images/football/goalkeeper.jpg", path: "/football/goalkeeper" },
  { name: "ShinGuards", image: "/images/football/shinguards.jpg", path: "/football/shinguards" },
  { name: "Stocking", image: "/images/football/stocking.jpg", path: "/football/stocking" },
  { name: "TrainingEquipments", image: "/images/football/trainingequipments.jpg", path: "/football/trainingequipments" },
  { name: "Teamwear", image: "/images/football/teamwear.jpg", path: "/football/teamwear" },
  { name: "Bags", image: "/images/football/bags.jpg", path: "/football/bags" },
  { name: "Footwear", image: "/images/football/footwear.jpg", path: "/football/footwear" },
];

const newLaunches = [
  {
    name: "React Football Shoe",
    price: "₹ 1,499",
    image: "/images/football/newlaunch1.jpg",
  },
  {
    name: "Pro Carbonite 7.0 Football Stud",
    price: "₹ 1,099",
    image: "/images/football/newlaunch2.jpg",
  },
  {
    name: "Nitro FIFA Certified Match Football",
    price: "₹ 2,199",
    image: "/images/football/newlaunch3.jpg",
  },
  {
    name: "Carbonite 7.0 Football Turf Shoe",
    price: "₹ 1,099",
    image: "/images/football/newlaunch4.jpg",
  },
  {
    name: "Carbonite 7.0 Kids Football Stud",
    price: "₹ 870",
    image: "/images/football/newlaunch5.jpg",
  },
];

const FootballMain = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Navbar />

      <div className="px-6 py-10">
        <h1 className="text-3xl font-bold text-center my-8">Football Categories</h1>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {footballSubcategories.map((sub, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              onClick={() => navigate(sub.path)}
            >
              <img
                src={sub.image}
                alt={sub.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 bg-gray-100">
                <h3 className="text-lg font-semibold text-center">{sub.name}</h3>
              </div>
            </div>
          ))}
        </div>
      

        {/* New Launches Carousel */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">NEW LAUNCHES</h2>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {newLaunches.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="mt-3">
                    <h3 className="text-md font-semibold">{item.name}</h3>
                    <p className="text-red-600 font-bold">{item.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Shop by Level */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">SHOP BY LEVEL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                label: "Professional",
                path: "/football/professional",
                img: "https://nivia.blob.core.windows.net/live/img/shastra_football.jpg",
              },
              {
                label: "Intermediate",
                path: "/football/intermediate",
                img: "https://nivia.blob.core.windows.net/live/img/latino_football.jpg",
              },
              {
                label: "Beginners",
                path: "/football/beginners",
                img: "https://nivia.blob.core.windows.net/live/img/airstrike_football.jpg",
              },
            ].map((level, index) => (
              <div
                key={index}
                className="text-center cursor-pointer hover:scale-105 transition"
                onClick={() => navigate(level.path)}
              >
                <img
                  src={level.img}
                  alt={level.label}
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
                <p className="mt-2 font-semibold">{level.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BLOG SECTION */}
<div className="px-4 md:px-8 mt-20">
  <h2 className="text-3xl font-bold mb-8 text-center">BLOGS</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Blog 1 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src="https://nivia.blob.core.windows.net/live/img/news_pkl_rules.jpg"
        alt="Pickleball Rules"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">Pickleball Rules That Slap (So You Don’t)</h3>
        <p className="text-sm text-gray-500 mb-2">July 9, 2025</p>
        <p className="text-gray-700 text-sm mb-3">
          First time on the court? Cool. Let’s get you up to speed. Pickleball’s not just a fad — it’s blowing up. It's fast...
        </p>
        <p className="text-blue-600 font-semibold cursor-pointer">Continue Reading →</p>
      </div>
    </div>

    {/* Blog 2 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src="https://nivia.blob.core.windows.net/live/img/news_yoga_mat.jpg"
        alt="Yoga Mat"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">
          Grounded in Grace: How to Choose the Perfect Yoga Mat
        </h3>
        <p className="text-sm text-gray-500 mb-2">May 29, 2025</p>
        <p className="text-gray-700 text-sm mb-3">
          Because the right mat isn’t just support — it’s your foundation. Whether you're flowing through sun salutations...
        </p>
        <p className="text-blue-600 font-semibold cursor-pointer">Continue Reading →</p>
      </div>
    </div>

    {/* Blog 3 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src="https://nivia.blob.core.windows.net/live/img/news_shoes_care.jpg"
        alt="Football Shoes Maintenance"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">
          🧼 How to Maintain Your Football Shoes: Cleaning & Storage Tips for Long Life 🥇
        </h3>
        <p className="text-sm text-gray-500 mb-2">May 29, 2025</p>
        <p className="text-gray-700 text-sm mb-3">
          Your football shoes are more than gear—they're your game-day allies. They grip, pivot, and blast with you...
        </p>
        <p className="text-blue-600 font-semibold cursor-pointer">Continue Reading →</p>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
};

export default FootballMain;
