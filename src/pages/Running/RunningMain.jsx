import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Subcategories
const subcategories = [
  { name: "Footwear", path: "/running/footwear", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW52qmrF-twzhdHc9IvQONrc2Mbz2y1QG7EA&s" },
  { name: "Apparels", path: "/running/apparels", image: "https://m.media-amazon.com/images/I/61O+n3hHTSL._AC_UY1000_.jpg" },
  { name: "Accessories", path: "/running/accessories", image: "https://www.insidehook.com/wp-content/uploads/2020/10/hero-35.jpg?fit=1200%2C800" },
  { name: "Socks", path: "/running/socks", image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1725894143-feetures-elite-light-cushion-no-show-running-socks-66df0de3723a2.jpg?crop=1xw:1xh;center,top&resize=980:*" },
  { name:"Bottles ", path: "/running/bottles", image: "https://5.imimg.com/data5/SELLER/Default/2023/6/314208695/AR/FE/HO/10773921/angel-water-bottle-500x500.webp" },
  { name: "Trackers", path: "/running/trackers", image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1685983818-61gFrSlmofL.jpg?crop=0.726xw:0.726xh;0.146xw,0.128xh&resize=980:*" },
];

// New Launches
const newLaunches = [
  { name: "SpeedX Running Shoes", price: "₹2,799", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVcK3PJHGz2RqvTd8m5AlvLd4lDA5G6SgXQ&s" },
  { name: "BreathFit T-Shirt", price: "₹799", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6E4Ia6k54VWO8JGHlyaMtCBOdxUTe4P7MuA&s" },
  { name: "Hydro Flask Bottle", price: "₹599", image: "https://m.media-amazon.com/images/I/51oyJYT1WIL.jpg" },
  { name: "Anti-Slip Socks", price: "₹299", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0R_B1Bfpao8nJSkd_Ke-Wetmt4gxkIkVy7Q&s" },
];

// Shop by Level
const shopByLevel = [
  { title: "Beginner", image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1341854189-6540f8266a2ef.jpg?crop=0.668xw:1.00xh;0.231xw,0&resize=1200:*" },
  { title: "Intermediate", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-RtDiFVPSh3iRyI0yFy3j2Jtan1RGuUQyg&s" },
  { title: "Advanced", image: "https://hips.hearstapps.com/hmg-prod/images/city-running-royalty-free-image-1752085463.pjpeg?crop=0.670xw:1.00xh;0.330xw,0&resize=640:*" },
];



const RunningMain = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Navbar />

      {/* Subcategories */}
      <section className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Explore Running Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {subcategories.map((cat, index) => (
            <div
              key={index}
              className="cursor-pointer text-center hover:scale-105 transition-all duration-300"
              onClick={() => navigate(cat.path)}
            >
              <img src={cat.image} alt={cat.name} className="w-full h-28 object-cover rounded-md" />
             <div className="p-4 bg-gray-100">
                <h3 className="text-lg font-semibold text-center">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Level */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop by Level</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shopByLevel.map((level, index) => (
            <div key={index} className="rounded overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img src={level.image} alt={level.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{level.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Launches */}
      <div className="mt-16 px-6">
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
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md" />
                <div className="mt-3">
                  <h3 className="text-md font-semibold">{item.name}</h3>
                  <p className="text-red-600 font-bold">{item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

                                {/* BLOG SECTION */}
<div className="px-4 md:px-8 mt-20">
  <h2 className="text-3xl font-bold mb-8 text-center">BLOGS</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Blog 1 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src="https://sportsedtv.com/img/blog/rules-of-pickleball-101_162cdbfe92b188.png"
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
        src="https://www.niviasports.com/cdn/shop/articles/How_to_Choose_the_Perfect_Yoga_Mat_for_Your_Body_Practice_Progress_600X406_89dbd000-fc5e-47c6-ad95-5f057742cc01_1024x1024.jpg?v=1748523608"
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
        src="https://www.niviasports.com/cdn/shop/articles/How_to_Maintain_Your_Football_Shoes_Cleaning_Storage_Tips_for_Long_Life_600X406_614f8e4f-b950-4797-bda6-41917f63d6b8.jpg?v=1748521299"
        alt="Football Shoes Maintenance"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">
          🧼 How to Maintain volleyball Shoes: Cleaning & Storage Tips for Long Life 🥇
        </h3>
        <p className="text-sm text-gray-500 mb-2">May 29, 2025</p>
        <p className="text-gray-700 text-sm mb-3">
          Your volleyball shoes are more than gear—they're your game-day allies. They grip, pivot, and blast with you...
        </p>
        <p className="text-blue-600 font-semibold cursor-pointer">Continue Reading →</p>
      </div>
    </div>
  </div>
</div>
<br /><br />

      <Footer />
    </div>
  );
};

export default RunningMain;
