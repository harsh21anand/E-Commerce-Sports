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
  { name: "Accessories", path: "/cricket/accessories", image: "https://i.pinimg.com/736x/e5/1d/3c/e51d3c494a616f03cb100fca3c0ba00c.jpg" },
  { name: "Bats", path: "/cricket/bats", image: "https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/5b0ea239e50527b43e3253a7f103e237/d/s/dsc-cricket-blu--english-willow-player-edition-bat-bat-2.webp" },
  { name: "Balls", path: "/cricket/balls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSK22lkmLNlDP0T7DrYsNAE--rqWy6uSHJA&s" },
  { name: "Footwear", path: "/cricket/footwear", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RQjzUZK01z5MR6i0XY4wY4JpcVbhPTc6HA&s" },
  { name: "Bags", path: "/cricket/bags", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVPTR2_pJC7ZNSDdq8_bAgnX8AdYivgQO4A&s" },
  { name: "Apparels", path: "/cricket/apparels", image: "https://5.imimg.com/data5/SELLER/Default/2023/12/370702495/HN/NW/BZ/3917006/cricket-set-apparels-250x250.jpg" },
  { name: "Gloves", path: "/cricket/gloves", image: "https://shop.teamsg.in/cdn/shop/files/2_5f3c2213-1401-4d7e-b569-ccb4ae1f5df5.png?v=1742628027&width=1946" },
];

// New Launches
const newLaunches = [
  { name: "Power Drive Bat", price: "₹3,299", image: "https://romjee.com/cdn/shop/files/510-RUijYlL._SL1279.jpg?v=1735814106" },
  { name: "Turf Grip Shoes", price: "₹2,499", image: "https://m.media-amazon.com/images/I/81lRq3r28AL._UY1000_.jpg" },
  { name: "All-Rounder Kit Bag", price: "₹1,699", image: "https://dpazadsports.com/wp-content/uploads/2023/07/Premium-Kit-Bag-a.jpg" },
  { name: "Training Apparel Set", price: "₹1,099", image: "https://bonsaicricket.nl/dosti/wp-content/uploads/2022/02/TRAINING-SET-TRAINING-SHIRT.jpg" },
];

// Shop by Level
const shopByLevel = [
  { title: "Beginner", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbtoYUuSko1pLz3ysTAbjJkFVSRegrzWud8A&s" },
  { title: "Intermediate", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbtoYUuSko1pLz3ysTAbjJkFVSRegrzWud8A&s" },
  { title: "Advanced", image: "https://shop.teamsg.in/cdn/shop/files/2_1c95c06a-e663-490d-8752-ec96ce811f5e.png?v=1720092464&width=1946" },
];

// Blogs
const blogs = [
  {
    title: "Top 5 Cricket Bats in 2025",
    date: "July 5, 2025",
    description: "Explore the best-performing bats trusted by professionals and beginners alike.",
    image: "https://sportsedtv.com/img/blog/rules-of-pickleball-101_162cdbfe92b188.png",
    link: "#",
  },
  {
    title: "Choosing the Right Footwear",
    date: "June 15, 2025",
    description: "Understand how spikes and rubber soles affect performance and grip.",
    image: "https://www.niviasports.com/cdn/shop/articles/How_to_Choose_the_Perfect_Yoga_Mat_for_Your_Body_Practice_Progress_600X406_89dbd000-fc5e-47c6-ad95-5f057742cc01_1024x1024.jpg?v=1748523608",
    link: "#",
  },
  {
    title: "Cricket Training at Home",
    date: "May 25, 2025",
    description: "Top drills and equipment to train for cricket effectively at home.",
    image: "https://www.niviasports.com/cdn/shop/articles/How_to_Maintain_Your_Football_Shoes_Cleaning_Storage_Tips_for_Long_Life_600X406_614f8e4f-b950-4797-bda6-41917f63d6b8.jpg?v=1748521299",
    link: "#",
  },
];

const CricketMain = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Navbar />

      {/* Subcategories */}
      <section className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Explore Cricket Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {subcategories.map((cat, index) => (
            <div
              key={index}
              className="cursor-pointer text-center hover:scale-105 transition-all duration-300"
              onClick={() => navigate(cat.path)}
            >
              <img src={cat.image} alt={cat.name} className="w-full h-35 center  object-cover rounded-md" />
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

      {/* Blog Section */}
      <section className="px-6 py-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <p className="text-gray-700 text-sm mb-3">{blog.description}</p>
                <a href={blog.link} className="text-blue-600 hover:underline text-sm">Continue Reading →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CricketMain;
