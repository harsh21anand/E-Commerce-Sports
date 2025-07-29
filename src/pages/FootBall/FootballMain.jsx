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
  { name: "Balls", image: "https://cdn.prod.website-files.com/5ca5fe687e34be0992df1fbe/61b5911c9d37d0449acee390_soccer-ball-on-grass-in-corner-kick-position-on-so-2021-08-29-10-46-54-utc-min.jpg", path: "/football/balls" },
  { name: "Accessories", image: "https://img.freepik.com/premium-vector/football-equipment-illustration-collection-set_207579-3564.jpg", path: "/football/accessories" },
  { name: "GoalKeeper", image: "https://images-eu.ssl-images-amazon.com/images/I/71XQ3zlSa4L._AC_UL375_SR375,375_.jpg", path: "/football/goalkeeper" },
  { name: "ShinGuards", image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw02bb1cc7/images/42122901/Rebel_42122901_black_hi-res.jpg?sw=750&sh=750&sm=fit&q=60", path: "/football/shinguards" },
  { name: "Stocking", image: "https://5.imimg.com/data5/ECOM/Default/2023/6/320149150/RQ/FG/BS/40788096/54004254-10-image-500x500.jpg", path: "/football/stocking" },
  { name: "TrainingEquipments", image: "https://m.media-amazon.com/images/I/71ImyIPCbLL.jpg", path: "/football/trainingequipments" },
  { name: "Teamwear", image: "https://content.api.news/v3/images/bin/bbea2aeb18ad4ea633987891807eacd3", path: "/football/teamwear" },
  { name: "Bags", image: "https://solepremise.com/cdn/shop/files/1000x1500_Equipment_Carrier.jpg?v=1688068214&width=1000", path: "/football/bags" },
  { name: "Footwear", image: "https://image.made-in-china.com/2f0j00TtAkQlMdASzs/Luxury-Football-Shoes-Men-AG-Spike-Children-Broken-Nails-Sports-Football-Training-Shoes.webp", path: "/football/footwear" },
];

const newLaunches = [
  {
    name: "React Football Shoe",
    price: "₹ 1,499",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/7/323926765/PG/IG/RB/192587570/men-football-shoes-500x500.jpg",
  },
  {
    name: "Pro Carbonite 7.0 Football Stud",
    price: "₹ 1,099",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPKbqsqbyrnBkbHw4VIRgX-F6aVowLEk9rg&s",
  },
  {
    name: "Nitro FIFA Certified Match Football",
    price: "₹ 2,199",
    image: "https://nwscdn.com/media/catalog/product/cache/h900xw900/f/o/forza_touchfootball-main.jpg",
  },
  {
    name: "Carbonite 7.0 Football Turf Shoe",
    price: "₹ 1,099",
    image: "https://scssports.in/cdn/shop/files/Arabian_Green_Comfort_Grey_Pastel_Grey_Double_Cream_-_2025-07-08T120302.949_535x.png?v=1751956500",
  },
  {
    name: "Carbonite 7.0 Kids Football Stud",
    price: "₹ 870",
    image: "https://sppartos.com/cdn/shop/files/815BfIT9hkL._SY675_grande.jpg?v=1740486987",
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
              className="cursor-pointer text-center hover:scale-105 transition-all duration-300"
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

      {/* Shop by Level */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">SHOP BY LEVEL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                label: "Professional",
                path: "/football/professional",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpP_SahtB0e0_ksHbkrtkLzqYeGbwFBY_9Ug&s",
              },
              {
                label: "Intermediate",
                path: "/football/intermediate",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaqjdSetoavHNymueLB0_hxlHCZ_pXdfvXGIFpyinyrEcOqAA",
              },
              {
                label: "Beginners",
                path: "/football/beginners",
                img: "https://instasport.club/cdn/shop/files/6.webp?v=1711363597",
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

<br /> <br />
      <Footer />
    </div>
  );
};

export default FootballMain;
