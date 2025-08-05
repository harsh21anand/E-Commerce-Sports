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
  { name: "Accessories", path: "/badminton/accessories", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvv5ULgMjMh30yTjss5qFNgfcv_bBblKuxsQ&s" },
  { name: "Apparels", path: "/badminton/apparels", image: "https://scssports.in/cdn/shop/files/ynts2462dp_1.jpg?v=1718968420" },
  { name: "Bags", path: "/badminton/bags", image: "https://m.media-amazon.com/images/I/41UQeMhOGPL._SR290,290_.jpg" },
  { name: "Footwear", path: "/badminton/footwear", image: "https://www.kdclick.com/s/637763a5ea78e200824eb640/6582ebb8a40f70b19f173da7/131-640x640.jpg" },
  { name: "Socks", path: "/badminton/socks", image: "https://images-cdn.ubuy.co.in/66a04a0b8581cc51951624d0-4-pairs-yonex-jp-3d-ergo-quarter-socks.jpg" },
  { name: "Rackets", path: "/badminton/rackets", image: "https://m.media-amazon.com/images/I/719j2lzLn2L.jpg" },
  { name: "Shuttles", path: "/badminton/shuttles", image: "https://images-cdn.ubuy.co.in/635ea0ab8291e45c563e6cd6-12pcs-nylon-feather-badminton-ball.jpg" },
];

const newLaunches = [
  {
    name: "Graphite Series Racket",
    price: "₹2,499",
    image: "https://m.media-amazon.com/images/I/511sWySYxfL._UF894,1000_QL80_.jpg",
  },
  {
    name: "Power Feather Shuttle",
    price: "₹799",
    image: "https://m.media-amazon.com/images/I/516ydCuDiSL._UF894,1000_QL80_.jpg",
  },
  {
    name: "Ace Pro Badminton Shoes",
    price: "₹1,999",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/s/o/i/12-hbfs-3m001-12-hundred-black-red-original-imagsrk2qmsgrvuj.jpeg?q=90&crop=false",
  },
  {
    name: "Classic Pro Bag",
    price: "₹899",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLChJVGH1IzPktqZgV_1I3ZvOJoowuz2paQg&s",
  },
];

const shopByLevel = [
  { title: "Beginner", image: "https://m.media-amazon.com/images/I/61pCwWPFYdL._UF894,1000_QL80_.jpg" },
  { title: "Intermediate", image: "https://5.imimg.com/data5/SELLER/Default/2023/6/313833033/VB/ES/JL/67146031/61qkijyqt5l-sx466--500x500.jpg" },
  { title: "Advanced", image: "https://eveen.pk/cdn/shop/products/image_9282225c-ecf6-435a-b9c1-3c1e33af1ac3.jpg?v=1714156150" },
];

const blogs = [
  {
    title: "Choosing the Right Racket",
    date: "July 1, 2025",
    description: "Find the perfect racket based on your playing style and level.",
    image: "https://sportsedtv.com/img/blog/rules-of-pickleball-101_162cdbfe92b188.png",
    link: "#",
  },
  {
    title: "Improve Footwork in Badminton",
    date: "June 15, 2025",
    description: "Master movement drills for greater court coverage.",
    image: "https://www.niviasports.com/cdn/shop/articles/How_to_Choose_the_Perfect_Yoga_Mat_for_Your_Body_Practice_Progress_600X406_89dbd000-fc5e-47c6-ad95-5f057742cc01_1024x1024.jpg?v=1748523608",
    link: "#",
  },
  {
    title: "Shuttle Types Explained",
    date: "May 25, 2025",
    description: "Know when to use feathered vs synthetic shuttles.",
    image: "https://www.niviasports.com/cdn/shop/articles/How_to_Maintain_Your_Football_Shoes_Cleaning_Storage_Tips_for_Long_Life_600X406_614f8e4f-b950-4797-bda6-41917f63d6b8.jpg?v=1748521299",
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
        <h1 className="text-3xl font-bold mb-6 text-center"><br />Explore Badminton Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
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
