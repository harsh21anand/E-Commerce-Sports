import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const subcategories = [
  { name: "Accessories", path: "/basketball/accessories", image: "https://allsport-group.com/storage/brands/slides/FXHAKzd4.jpg" },
  { name: "Bags", path: "/basketball/bags", image: "https://m.media-amazon.com/images/I/81VwT-4xfpL._UF894,1000_QL80_.jpg" },
  { name: "Balls", path: "/basketball/balls", image: "https://www.goalrilla.com/cdn/shop/products/B9009W_GoalrillaHypeMen_sIndoorBasketball_Front_800x.png?v=1737132615" },
  { name: "Equipment", path: "/basketball/equipment", image: "https://static.vecteezy.com/system/resources/previews/055/184/255/non_2x/basketball-set-sport-equipment-and-accessories-ball-basket-clothing-and-court-for-playing-basketball-vector.jpg" },
  { name: "Footwear", path: "/basketball/footwear", image: "https://image.made-in-china.com/365f3j00osjLrvpqhVRu/Fashion-Sports-Footwear-Men-prime-S-Basketball-Shoes-Sneaker-James-Basket-Ball-Shoes-450-.webp" },
  { name: "Socks", path: "/basketball/socks", image: "https://weartesters.com/uploads/2015/04/Nike-Basketball-Elite-Socks-on-Nike-iD.jpg" },
  { name: "Teamwears", path: "/basketball/teamwears", image: "https://sportsqvest.com/cdn/shop/products/BAS.SUB.1590_-_Back_1200x.jpg?v=1611215652" },
];

const newLaunches = [
  {
    name: "Combat Basketball Shoe",
    price: "₹1,799",
    image: "https://under2ksport.com/wp-content/uploads/2023/09/312037_0.jpg"
  },
  {
    name: "Meteor Basketball",
    price: "₹1,049",
    image: "https://data1.ororama.online/assets/uploads/-7f5f7f5e70a1fbbd043ca417cd2557bf.jpg"
  },
  {
    name: "Blaze Basketball Shoe",
    price: "₹1,499",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/377396/01/sv01/fnd/IND/fmt/png/TRC-Blaze-Court-Lava-Basketball-Shoes"
  },
  {
    name: "Tornado Basketball Shoe",
    price: "₹1,999",
    image: "https://m.media-amazon.com/images/I/71r9gZ-SN-L._UY1000_.jpg"
  },
];

const shopByLevel = [
  { title: "Beginner", image: "https://www.goalrilla.com/cdn/shop/products/B9009W_GoalrillaHypeMen_sIndoorBasketball_Front_800x.png?v=1737132615" },
  { title: "Intermediate", image: "https://5.imimg.com/data5/UB/OL/BJ/SELLER-6708054/nivia-basketball-500x500.jpg" },
  { title: "Advanced", image: "https://www.niviasports.com/cdn/shop/files/077A1833-1_a79257a1-6e0f-4e0d-a3e3-a851accccef1.jpg?v=1726257684" },
];



const BasketBallMain = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Navbar />

      <section className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Explore Basketball Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {subcategories.map((cat, index) => (
            <div
              key={index}
              className="cursor-pointer text-center hover:scale-105 transition-all duration-300"
              onClick={() => navigate(cat.path)}
            >
              <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover rounded-t-lg" />
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


      {/* New Launches Carousel */}
      <section className="px-6 py-10">
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
      </section>

     
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
          🧼 How to Maintain Your Basketball Shoes: Cleaning & Storage Tips for Long Life 🥇
        </h3>
        <p className="text-sm text-gray-500 mb-2">May 29, 2025</p>
        <p className="text-gray-700 text-sm mb-3">
          Your Basketball shoes are more than gear—they're your game-day allies. They grip, pivot, and blast with you...
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

export default BasketBallMain;
