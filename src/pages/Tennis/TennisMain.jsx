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
  { name: "Accessories", path: "/tennis/accessories", image: "https://cdn.shopify.com/s/files/1/2275/8439/files/You_Can_Fit_In_Everything.webp?v=1729320653" },
  { name: "Rackets", path: "/tennis/rackets", image: "https://nwscdn.com/media/catalog/product/cache/h900xw900/v/e/vermont-colt-is-a-tennis-racket-for-all-ages-to-enjoy_1.jpg" },
  { name: "Bags", path: "/tennis/bags", image: "https://static.wixstatic.com/media/9c6689_d1afde81f3ce4bb8aacdd9543855def4~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9c6689_d1afde81f3ce4bb8aacdd9543855def4~mv2.jpg" },
  { name: "Footwear", path: "/tennis/footwear", image: "https://tenniscompanion.org/wp-content/uploads/2023/09/8-best-tennis-shoes-for-kids-a-buyers-guide-for-parents.png" },
  { name: "Balls", path: "/tennis/balls", image: "https://nwscdn.com/media/wysiwyg/3kf/tennis/Image3.jpg" },
  { name: "Socks", path: "/tennis/socks", image: "https://i.etsystatic.com/13238741/r/il/3addb2/5068179888/il_570xN.5068179888_ti6e.jpg" },
  { name: "Apparels", path: "/tennis/apparels", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2brz8t-Bfyfw9d4JBHHMZyOiWkBcvVOtnAA&s" },
];



// Shop by Level
const shopByLevel = [
  { title: "Beginner", image: "https://pyxis.nymag.com/v1/imgs/a38/209/42e80edca10bf8cca5d37bc23c816010e4.rdeep-vertical.w245.jpg" },
  { title: "Intermediate", image: "https://static.standard.co.uk/2023/01/16/11/newFile-5.jpg" },
  { title: "Advanced", image: "https://hips.hearstapps.com/hmg-prod/images/tennis-rackets-for-men-67bf5f9c350c8.jpg?crop=0.502xw:1.00xh;0.498xw,0&resize=1200:*" },
];

// New Launches
const newLaunches = [
  { name: "Pro Spin Racket", price: "₹2,899", image: "https://m.media-amazon.com/images/I/71olffELYCL.jpg" },
  { name: "Control Tennis Ball", price: "₹499", image: "https://m.media-amazon.com/images/I/81Zf3XF9mmL.jpg" },
  { name: "Performance Footwear", price: "₹2,199", image: "https://i.ebayimg.com/images/g/i-MAAOSwC55ljLKh/s-l500.jpg" },
  { name: "Durable Kit Bag", price: "₹1,199", image: "https://m.media-amazon.com/images/I/91marzNd0DL._UF894,1000_QL80_.jpg" },
];




const TennisMain = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Navbar />

      {/* Subcategories */}
      <section className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Explore Tennis Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {subcategories.map((cat, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
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

export default TennisMain;
