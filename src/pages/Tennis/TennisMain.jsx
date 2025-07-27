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
  { name: "Accessories", path: "/tennis/accessories", image: "/images/tennis/accessories.jpg" },
  { name: "Rackets", path: "/tennis/rackets", image: "/images/tennis/rackets.jpg" },
  { name: "Bags", path: "/tennis/bags", image: "/images/tennis/bags.jpg" },
  { name: "Footwear", path: "/tennis/footwear", image: "/images/tennis/footwear.jpg" },
  { name: "Balls", path: "/tennis/balls", image: "/images/tennis/balls.jpg" },
  { name: "Socks", path: "/tennis/socks", image: "/images/tennis/socks.jpg" },
  { name: "Apparels", path: "/tennis/apparels", image: "/images/tennis/apparels.jpg" },
];



// Shop by Level
const shopByLevel = [
  { title: "Beginner", image: "/images/tennis/level1.jpg" },
  { title: "Intermediate", image: "/images/tennis/level2.jpg" },
  { title: "Advanced", image: "/images/tennis/level3.jpg" },
];

// New Launches
const newLaunches = [
  { name: "Pro Spin Racket", price: "₹2,899", image: "/images/tennis/new1.jpg" },
  { name: "Control Tennis Ball", price: "₹499", image: "/images/tennis/new2.jpg" },
  { name: "Performance Footwear", price: "₹2,199", image: "/images/tennis/new3.jpg" },
  { name: "Durable Kit Bag", price: "₹1,199", image: "/images/tennis/new4.jpg" },
];

// Blog Section
const blogs = [
  {
    title: "Tennis Racket Buying Guide",
    date: "June 20, 2025",
    description: "Learn how to choose the perfect racket for your level and style.",
    image: "/images/tennis/blog1.jpg",
    link: "#",
  },
  {
    title: "Improve Your Serve",
    date: "May 30, 2025",
    description: "Master powerful and accurate serves with these key techniques.",
    image: "/images/tennis/blog2.jpg",
    link: "#",
  },
  {
    title: "Clay vs Grass Courts",
    date: "April 15, 2025",
    description: "Understand how court surfaces impact your game and gear choice.",
    image: "/images/tennis/blog3.jpg",
    link: "#",
  },
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
              className="cursor-pointer text-center hover:scale-105 transition-all duration-300"
              onClick={() => navigate(cat.path)}
            >
              <img src={cat.image} alt={cat.name} className="w-full h-28 object-cover rounded-md" />
              <p className="mt-2 font-semibold">{cat.name}</p>
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

      {/* Blogs */}
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

export default TennisMain;
