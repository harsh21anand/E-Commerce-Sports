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
  { name: "Footwear", path: "/running/footwear", image: "/images/running/footwear.jpg" },
  { name: "Apparels", path: "/running/apparels", image: "/images/running/apparels.jpg" },
  { name: "Accessories", path: "/running/accessories", image: "/images/running/accessories.jpg" },
  { name: "Socks", path: "/running/socks", image: "/images/running/socks.jpg" },
  { name: "Hydration", path: "/running/hydration", image: "/images/running/hydration.jpg" },
  { name: "Trackers", path: "/running/trackers", image: "/images/running/trackers.jpg" },
];

// New Launches
const newLaunches = [
  { name: "SpeedX Running Shoes", price: "₹2,799", image: "/images/running/new1.jpg" },
  { name: "BreathFit T-Shirt", price: "₹799", image: "/images/running/new2.jpg" },
  { name: "Hydro Flask Bottle", price: "₹599", image: "/images/running/new3.jpg" },
  { name: "Anti-Slip Socks", price: "₹299", image: "/images/running/new4.jpg" },
];

// Shop by Level
const shopByLevel = [
  { title: "Beginner", image: "/images/running/level1.jpg" },
  { title: "Intermediate", image: "/images/running/level2.jpg" },
  { title: "Advanced", image: "/images/running/level3.jpg" },
];

// Blog Section
const blogs = [
  {
    title: "Choosing the Right Running Shoes",
    date: "July 10, 2025",
    description: "Everything you need to know about arch support, heel drop, and cushioning.",
    image: "/images/running/blog1.jpg",
    link: "#",
  },
  {
    title: "Best Warm-Up Techniques",
    date: "June 22, 2025",
    description: "Improve your pace and avoid injuries with these quick stretches and drills.",
    image: "/images/running/blog2.jpg",
    link: "#",
  },
  {
    title: "Track Your Progress Better",
    date: "May 30, 2025",
    description: "Top smartwatches and apps that help you hit your running goals.",
    image: "/images/running/blog3.jpg",
    link: "#",
  },
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

export default RunningMain;
