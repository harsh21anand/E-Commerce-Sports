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
  { name: "Accessories", path: "/basketball/accessories", image: "/images/basketball/accessories.jpg" },
  { name: "Bags", path: "/basketball/bags", image: "/images/basketball/bags.jpg" },
  { name: "Balls", path: "/basketball/balls", image: "/images/basketball/balls.jpg" },
  { name: "Equipment", path: "/basketball/equipment", image: "/images/basketball/equipment.jpg" },
  { name: "Footwear", path: "/basketball/footwear", image: "/images/basketball/footwear.jpg" },
  { name: "Socks", path: "/basketball/socks", image: "/images/basketball/socks.jpg" },
  { name: "Teamwears", path: "/basketball/teamwears", image: "/images/basketball/teamwears.jpg" },
];

const newLaunches = [
  {
    name: "Combat Basketball Shoe",
    price: "₹1,799",
    image: "/images/basketball/new1.jpg"
  },
  {
    name: "Meteor Basketball",
    price: "₹1,049",
    image: "/images/basketball/new2.jpg"
  },
  {
    name: "Blaze Basketball Shoe",
    price: "₹1,499",
    image: "/images/basketball/new3.jpg"
  },
  {
    name: "Tornado Basketball Shoe",
    price: "₹1,999",
    image: "/images/basketball/new4.jpg"
  },
];

const shopByLevel = [
  { title: "Beginner", image: "/images/basketball/level1.jpg" },
  { title: "Intermediate", image: "/images/basketball/level2.jpg" },
  { title: "Advanced", image: "/images/basketball/level3.jpg" },
];

const blogs = [
  {
    title: "Top Basketball Drills for Beginners",
    date: "May 10, 2025",
    description: "Level up your game with these beginner drills for control and accuracy.",
    image: "/images/basketball/blog1.jpg",
    link: "#"
  },
  {
    title: "How to Choose the Right Basketball Shoe",
    date: "April 25, 2025",
    description: "Fit, grip, and court type matter—find your perfect match.",
    image: "/images/basketball/blog2.jpg",
    link: "#"
  },
  {
    title: "Basketball Gear Maintenance Tips",
    date: "April 10, 2025",
    description: "Maximize your equipment’s life with proper care techniques.",
    image: "/images/basketball/blog3.jpg",
    link: "#"
  },
];

const BasketballMain = () => {
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

export default BasketballMain;
