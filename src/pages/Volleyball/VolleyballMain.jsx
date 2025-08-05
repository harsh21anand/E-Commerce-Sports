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
    path: "/volleyball/accessories",
    image: "https://images-cdn.ubuy.co.id/661cb8432617db239261181f-volleyball-knee-pads-volleyball-arm.jpg"
  },
  { 
    name: "Balls", 
    path: "/volleyball/balls",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkyRz0pNFjy4bQwD7w2i7G0Vbi5eeU1SLvw&s"
  },
  { 
    name: "Footwear", 
    path: "/volleyball/footwear",
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/25796336/2024/2/16/334b2a62-8c65-454b-ad16-245320aee9d41708082186404-ASICS-Men-Woven-Design-Round-Toe-Gel-Task-3-Volleyball-Shoes-1.jpg"
  },
  { 
    name: "Socks", 
    path: "/volleyball/socks",
    image: "https://m.media-amazon.com/images/I/612dRJwrcfL._UY1100_.jpg"
  },
  { 
    name: "Knee Pads", 
    path: "/volleyball/kneepads",
    image: "https://m.media-amazon.com/images/I/81Os0w1GzpL.jpg"
  },
  { 
    name: "Teamwear", 
    path: "/volleyball/teamwear",
    image: "https://image.made-in-china.com/365f3j00PGckRMNyLzbd/Custom-Sublimation-Polyester-Quick-Dry-Sports-Sportswear-Wholesale-Sleeveless-Volleyball-Jersey-Badminton-T-Shirt-Volleyball-Uniform-Teamwear.webp"
  },
];

const newLaunches = [
  {
    name: "Pro Volleyball Shoes",
    price: "₹3,499",
    image: "https://m.media-amazon.com/images/I/81Vm0NpOPUL._UY1000_.jpg"
  },  
  {
    name: "Elite Volleyball Shoes",
    price: "₹2,199",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/30166470/2024/7/10/42329144-3df9-425a-9ac2-8547b8b5a3711720593421438ASICSSKYELITEFFMT3PARISMenVolleyballSportsShoes1.jpg"
  },
  {
    name: "Premium Knee Pads",
    price: "₹1,299",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/support/f/k/v/na-premium-knee-cap-knee-brace-for-knee-pain-relief-knee-pad-leg-original-imah9m9f9tgzbzcy.jpeg?q=90&crop=false"
  },
  {
    name: "Team Jersey Set",
    price: "₹2,999",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOnwAp0-rf2Cc_pai3QmLcJrCI7JZT1_JlQ&s"
  }
];

const shopByLevel = [
  {
    title: "Beginner",
    image: "https://m.media-amazon.com/images/I/51kjKu6AVDL._UF894,1000_QL80_.jpg"
  },
  {
    title: "Intermediate",
    image: "https://sportraffic.com/wp-content/uploads/2019/05/Mikasa-V200W-Indoor-Ball.jpg"
  },
  {
    title: "Professional",
    image: "https://m.media-amazon.com/images/I/61hPSHy1VVL.jpg"
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
      <div className="grid ml-10 grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
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

export default VolleyballMain;
