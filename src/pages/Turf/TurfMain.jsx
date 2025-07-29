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
  { name: "Footwear", path: "/turf/footwear", image: "https://m.media-amazon.com/images/I/71Q1pThH3VL._UY1000_.jpg" },
  { name: "Apparel", path: "/turf/apparel", image: "https://images.squarespace-cdn.com/content/v1/5d27f662dd7b3c000158a331/67836224-0e7e-488f-8e2e-b764085866ae/ThreeSixtySix_SalmonRedRECLargeB_00.png?format=2500w" },
  { name: "Accessories", path: "/turf/accessories", image: "https://m.media-amazon.com/images/I/81cZU8RKF+L.jpg" },
  { name: "Bags", path: "/turf/bags", image: "https://m.media-amazon.com/images/I/910+ONZhcwL._UF894,1000_QL80_.jpg" },
  { name: "Balls", path: "/turf/balls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO48qswjDbEzCU0hT_XElPIn0d4rWWvxSWOA&s" },
  { name: "Socks", path: "/turf/socks", image: "https://socks.liquifire.com/URI?set=key%5Bresolve.pixelRatio%5D,value%5B1.25%5D&set=key%5Bresolve.width%5D,value%5B700%5D&set=key%5Bresolve.height%5D,value%5B700%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainer%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bjpg%5D&source=url%5Bhttps%3A%2F%2Fwww.socksrock.com%2Fcdn%2Fshop%2Fproducts%2FRazur_b_1024x1024.jpg%3Fv%3D1527611332%5D&scale=options%5Blimit%5D,size%5B700x700%5D&sink=format%5Bjpg%5D" },
  { name: "Shin Guards", path: "/turf/shinguards", image: "https://media.foot-store.com/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/g/-/g-form_vs4802193_2.jpg" },
];

const newLaunches = [
  {
    name: "Dominion Turf Shoes",
    price: "₹1,999",
    image: "https://unozero.com/cdn/shop/products/Erika_Rojas_Product_Photography_Miami_UnoZero_Handmade_Football_Soccer_Shoes-004copy.jpg?v=1726781081",
  },
  {
    name: "Astro Grip Turf Shoes",
    price: "₹2,199",
    image: "https://m.media-amazon.com/images/I/71XyNaP-iGL._UY300_.jpg",
  },
  {
    name: "Rider Pro Ball",
    price: "₹799",
    image: "https://m.media-amazon.com/images/I/61j2tdIRZ0L._UF894,1000_QL80_.jpg",
  },
  {
    name: "Edge Turf Boots",
    price: "₹2,499",
    image: "https://i.ebayimg.com/images/g/ui8AAOSwFDhjvOhc/s-l400.jpg",
  },
];

const shopByLevel = [
  { title: "Beginner", image: "https://www.artificialgrassliquidators.com/wp-content/uploads/2022/07/iStock_000005900624_Medium.jpg" },
  { title: "Intermediate", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxTr8g2tzCK9K0xyDVXHXsSY8iz3L46108w&s" },
  { title: "Advanced", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa01Iasl7h1BzXMVZ6FRozVPXnjxGPp6zk0g&s" },
];



const TurfMain = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Navbar />

      {/* Subcategories */}
      <section className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Explore Turf Categories</h1>
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

      {/* New Launches Carousel */}
      <section className="mt-16 px-6 py-8">
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

export default TurfMain;
