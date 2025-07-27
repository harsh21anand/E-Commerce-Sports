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
  { name: "Accessories", path: "/badminton/accessories", image: "/images/badminton/accessories.jpg" },
  { name: "Apparels", path: "/badminton/apparels", image: "/images/badminton/apparels.jpg" },
  { name: "Bags", path: "/badminton/bags", image: "/images/badminton/bags.jpg" },
  { name: "Footwears", path: "/badminton/footwears", image: "/images/badminton/footwears.jpg" },
  { name: "Socks", path: "/badminton/socks", image: "/images/badminton/socks.jpg" },
  { name: "Rackets", path: "/badminton/rackets", image: "/images/badminton/rackets.jpg" },
  { name: "Shuttles", path: "/badminton/shuttles", image: "/images/badminton/shuttles.jpg" },
];

const newLaunches = [
  {
    name: "Graphite Series Racket",
    price: "₹2,499",
    image: "/images/badminton/new1.jpg",
  },
  {
    name: "Power Feather Shuttle",
    price: "₹799",
    image: "/images/badminton/new2.jpg",
  },
  {
    name: "Ace Pro Badminton Shoes",
    price: "₹1,999",
    image: "/images/badminton/new3.jpg",
  },
  {
    name: "Classic Pro Bag",
    price: "₹899",
    image: "/images/badminton/new4.jpg",
  },
];

const shopByLevel = [
  { title: "Beginner", image: "/images/badminton/level1.jpg" },
  { title: "Intermediate", image: "/images/badminton/level2.jpg" },
  { title: "Advanced", image: "/images/badminton/level3.jpg" },
];

const blogs = [
  {
    title: "Choosing the Right Racket",
    date: "July 1, 2025",
    description: "Find the perfect racket based on your playing style and level.",
    image: "/images/badminton/blog1.jpg",
    link: "#",
  },
  {
    title: "Improve Footwork in Badminton",
    date: "June 15, 2025",
    description: "Master movement drills for greater court coverage.",
    image: "/images/badminton/blog2.jpg",
    link: "#",
  },
  {
    title: "Shuttle Types Explained",
    date: "May 25, 2025",
    description: "Know when to use feathered vs synthetic shuttles.",
    image: "/images/badminton/blog3.jpg",
    link: "#",
  },
];

const BadmintonMain = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Navbar />

      {/* Subcategories */}
      <section className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Explore Badminton Categories</h1>
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

export default BadmintonMain;
