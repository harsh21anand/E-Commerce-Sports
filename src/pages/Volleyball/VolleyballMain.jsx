import React from "react";
import { useNavigate } from "react-router-dom";
import Header    from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const volleyballCategories = [
  { 
    name: "Accessories", 
    path: "/Volleyball/accessories",
    image: "/images/volleyball/accessories.jpg"
  },
  { 
    name: "Balls", 
    path: "/Volleyball/balls",
    image: "/images/volleyball/balls.jpg"
  },
  { 
    name: "Footwear", 
    path: "/Volleyball/footwear",
    image: "/images/volleyball/footwear.jpg"
  },
  { 
    name: "Socks", 
    path: "/Volleyball/socks",
    image: "/images/volleyball/socks.jpg"
  },
  { 
    name: "Knee Pads", 
    path: "/Volleyball/kneepads",
    image: "/images/volleyball/kneepads.jpg"
  },
  { 
    name: "Teamwear", 
    path: "/Volleyball/teamwear",
    image: "/images/volleyball/teamwear.jpg"
  },
  { 
    name: "Nets & Posts", 
    path: "/Volleyball/nets-posts",
    image: "/images/volleyball/nets.jpg"
  },
];

const newLaunches = [
  {
    name: "Pro Volleyball Shoe",
    price: "₹3,499",
    image: "/images/volleyball/new1.jpg"
  },
  {
    name: "Elite Volleyball",
    price: "₹2,199",
    image: "/images/volleyball/new2.jpg"
  },
  {
    name: "Premium Knee Pads",
    price: "₹1,299",
    image: "/images/volleyball/new3.jpg"
  },
  {
    name: "Team Jersey Set",
    price: "₹2,999",
    image: "/images/volleyball/new4.jpg"
  }
];

const shopByLevel = [
  {
    title: "Beginner",
    image: "/images/volleyball/beginner.jpg"
  },
  {
    title: "Intermediate",
    image: "/images/volleyball/intermediate.jpg"
  },
  {
    title: "Professional",
    image: "/images/volleyball/professional.jpg"
  }
];

const VolleyballMain = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col min-h-screen overflow-x-hidden">
      <Header/>
      <Nav />

      {/* Categories Section */}
      {/* Subcategories Grid */}
      <section>
      <h1 className="text-3xl font-bold text-center my-8">Volleyball Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {volleyballCategories.map((sub, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
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

      {/* Blog Section */}
      <section className="py-6 px-4">
        <h2 className="text-2xl font-bold mb-4">Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Volleyball Training Tips for Power and Agility",
              date: "July 15, 2025",
              image: "blog1.png",
              desc: "Boost your jumping power and reaction time with these training hacks.",
            },
            {
              title: "Choosing the Right Volleyball Gear",
              date: "June 29, 2025",
              image: "blog2.png",
              desc: "From knee pads to pro-level shoes, know what works best for you.",
            },
            {
              title: "How to Maintain Your Volleyball Shoes",
              date: "May 22, 2025",
              image: "blog3.png",
              desc: "Simple cleaning and care techniques for long-lasting grip.",
            },
          ].map((blog, i) => (
            <div key={i} className="bg-white rounded-lg shadow">
              <img src={`/assets/volleyball/${blog.image}`} alt={blog.title} className="rounded-t-lg" />
              <div className="p-4">
                <h3 className="font-semibold text-md">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.date}</p>
                <p className="mt-2 text-sm">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VolleyballMain;
