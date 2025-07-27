import React from "react";
import { useNavigate, Link } from "react-router-dom";

import Navbar from "../components/nav/Nav";
import Header from "../components/header/Header";
import CategoryCard from "../components/card/CategoryCard";
import ProductCard from "../components/card/ProductCard";
import StorytellingSlider from "../components/card/StoryTellingSliderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Footer from "../components/footer/Footer";
import "swiper/css";
import "swiper/css/navigation";




const categories = [
  {
    image: "https://forstarsports.com/wp-content/uploads/2023/08/soccer-equipment-List.jpg",
    title: "FOOTBALL",
  },
  {
    image: "https://penaltyfile.com/wp-content/uploads/2020/08/options-of-basketball-shoes-Aug102020-1-min.jpg",
    title: "BASKETBALL",
  },
  {
    image: "https://media.istockphoto.com/id/172727827/photo/sport-shoes-and-ball.jpg?s=2048x2048&w=is&k=20&c=D2o99IOiWZ7kYrpX1KyyefkSD7dJIuDbZNF0bLRvOdM=",
    title: "VOLLEYBALL",
  },
  {
    image: "https://media.istockphoto.com/id/805109238/photo/top-view-of-soccer-ball-with-pair-of-sports-shoes-on-grass.jpg?s=2048x2048&w=is&k=20&c=RY87Hyatc4FHEUAbMUJoXAIiOplq-w_qsENiwGkdKQc=",
    title: "TURF",
  },
  {
    image: "https://media.istockphoto.com/id/970367234/photo/badminton-red-shoes-with-blurred-shuttlecock-and-racket-on-court.jpg?s=2048x2048&w=is&k=20&c=ykVb8SM_OnhqMp_CmNSlz4XE4dGbpIy_eELhBsx6zvk=",
    title: "BADMINTON",
  },
  {
    image: "https://media.istockphoto.com/id/187405856/photo/tennis-sports-concept.jpg?s=2048x2048&w=is&k=20&c=8xEPKAzYoNrNnR3WOWy36jUPYCufdEU_HdzoQpV_Hqg=",
    title: "TENNIS",
  },
  {
    image:"https://media.istockphoto.com/id/519191424/photo/cricket-equipment.jpg?s=2048x2048&w=is&k=20&c=HhLf-FbkHLUlKP_Jweg08TYwUtFXCsBjzoaUiRsz1uY=",
    title: "CRICKET",
  },
  {image:"https://media.istockphoto.com/id/1326440113/photo/top-view-of-sports-equipment-set.jpg?s=2048x2048&w=is&k=20&c=SsEvuMWYW4tSJOEUYug0eUkf7s6yweQeEFNhw4QI4Jk=",
    title: "RUNNING",
  },

];

// for Best selling section
const shoes_categories = [
  {
    image: "https://sportsjam.in/media/catalog/product/cache/f6d88dd4f51ed5a5b4384f0ded062b0d/a/d/adhq4535.jpg",
    title: "Safari men's Football Shoes ",
    cost : "₹ 2,999",
  },
  {
    image: "https://m.media-amazon.com/images/I/71dLfbuBFcL._AC_SY625_.jpg",
    title: "Nike men's Cricket Shoes",
    cost : "₹ 3,499",
  },
  {
    image: "https://m.media-amazon.com/images/I/71XSq3s+oCL._SY695_.jpg",
    title: "Nivia's Tennis Shoes",
    cost : "₹ 4,999",
  },
  {
    image: "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.6435-9/29197296_784067391793672_5539331892744028160_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zNBmK6vdgnQQ7kNvwGa87PI&_nc_oc=AdmvIQdDrsdmUMXHs8gbYogv2bO--8xYCdpEwbz_tUGymj7hHtEpc8zvC875QRul2v0GTDMhtnlqQSZhJHLcHMvr&_nc_zt=23&_nc_ht=scontent.fbbi1-2.fna&_nc_gid=4c-0GDmSF9F7_iEdBtLOXg&oh=00_AfSYJeDm4aNvDYfOMXEXXICzeHPCnrJYx2BAwJes9XAuMg&oe=68A9BBCF",
    title: "Adidas 2.0  Badminton Shoes ",
    cost : "₹ 3,999",
  },
  {
    image: "https://cdn.mrcrickethockey.com/wp-content/uploads/2024/12/02184241/Adidas-22-Yard-Spike-Red-Main-768x768.jpg",
    title: "Adidas 2.0  Cricket Shoes ",
    cost : "₹ 6,999",

  },
  {
    image: "https://sppartos.com/cdn/shop/files/81NEA08jvVL._SL1500_720x.jpg?v=1709981893",
    title: "Nivia Daggers men's  Football Shoes ",
    cost : "₹ 6,999",

  },

  ];


  // Clearance Items
  const clearanceItems = [
    {
      image: "https://www.khelmart.com/pub/media/catalog/product/cache/712b931dac1b924a11d1b7282ad89910/1/_/1_905.jpg",  
      title: "Crick-1000(Bowling)",
      cost: "₹ 1,999",
     
      
    },
    {
      image: "https://jomla.ae/_next/image/?url=https%3A%2F%2Fwp.jomla.ae%2Fwp-content%2Fuploads%2F2022%2F07%2Fr9xt-nivia-hy-court-badminton-shoes-for-men-500x500-0-500x500-1-2.jpg&w=640&q=75",  
      title: "Super court 2.0 Badminton Shoes",
      cost: "₹ 2,499",
     
      
    },
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2025/1/482002662/DB/AE/QS/45172533/nivia-street-art-basketball-shoes-1000x1000.webp",  
      title: "Nivia Engraver 2.0 BasketBall Shoes",
      cost: "₹ 3,999",
   
     
    },
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2024/12/476747977/QG/FK/ZS/27824579/nivia-hy-court-2-1-badminton-shoes-1000x1000.jpg",  // Replace with your image URL
      title: "Hy- Court 2.1 Badminton Shoes",
      cost: "₹ 4,999",
     
     
    },
    {
      image: "https://sportsgalaxy.in/wp-content/uploads/2021/11/71pxqqrmtll-sl1500-1000x1000-1.webp",  // Replace with your image URL
      title: "Hy- Energy Badminton Shoes",
      cost: "₹ 5,999",
   
     
    },
    {
      image: "https://www.khelmart.com/pub/media/catalog/product/cache/712b931dac1b924a11d1b7282ad89910/n/i/ni_fs_0007_a_large.jpg",  // Replace with your image URL
      title: "Oslar Blade 3.0 Football Shoes ",
      cost: "₹ 6,999",
   
      
    }

  ];
const Home = () => {
  const navigate = useNavigate();

  const handleShoesCategoriesClick = (title) => {
    const pathMap = {
      "FOOTBALL": "/footballmain",
      "BASKETBALL": "/basketballmain",
      "CRICKET": "/cricketmain",
      "BADMINTON": "/badmintonmain",
      "TENNIS": "/tennismain",
      "VOLLEYBALL": "/volleyballmain",
      "TURF": "/turfmain",
      "RUNNING": "/runningmain"
    };
    
    const path = pathMap[title];
    if (path) {
      navigate(path);
    } else {
      alert(`No route defined for ${title}`);
    }
  };

  const handleCategoryClick = (title) => {
    if (title === "FOOTBALL") {
      navigate("/Footballmain"); // ✅ Navigate to FootballMain page
    } else if (title === "BASKETBALL") {
      navigate("/BasketBallmain"); // 🏀 Navigate to BasketballMain page
    } else if (title === "CRICKET") {
      navigate("/Cricketmain"); // 🏏 Navigate to CricketMain page
    } else if (title === "BADMINTON") {
      navigate("/Badmintonmain"); // 🏸 Navigate to BadmintonMain page
    } else if (title === "TENNIS") {
      navigate("/Tennismain"); // 🎾 Navigate to TennisMain page
    } else if (title === "VOLLEYBALL") {
      navigate("/Volleyballmain"); // 🏐 Navigate to VolleyballMain page
    } else if (title === "TURF") {
      navigate("/Turfmain"); // 🌱 Navigate to TurfMain page
    } else if (title === "RUNNING") {
      navigate("/Runningmain"); // 🏃 Navigate to RunningMain page
    } else {
      alert(`Clicked on ${title}`);
    }
  };

  const handleBestSellerClick = (title) => {
    navigate(`/product/${title}`);
  };
  
return (
  <div className="flex flex-col min-h-screen overflow-x-hidden">
    <Header />
    <Navbar />

    {/* Hero Section with background image */}
    <section className="relative w-full h-[80vh] flex items-center justify-center">
   {/* Background GIF */}
  <img
    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnlvM3U4ZDVvODBmNDQ2YTI0emx2bjRhbnpqdTlhdm9wNXg4b2luNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/45191hXpXKEiSyiPuq/giphy.gif"
    alt="Sports Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0  bg-opacity-40 z-10"></div>

  {/* Content */}
  <div className="relative z-20 text-center px-4">
    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
      Welcome to Sports Hub
    </h1>
    <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
      Your one-stop destination for all sports equipment and accessories
    </p>
    <Link
      to="/offers"
      className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 transform hover:scale-105"
    >
      Shop Now
    </Link>
  </div>
</section>


 {/* .......................Hero Banner........................... */}

      <main className="flex-grow py-10 bg-white-50 ">
        <section className="py-12 bg-white-50 ">
          <h3 className="text-3xl font-bold text-center mb-8 ">Shop By Category</h3>
          <div className="container mx-auto px-4 ">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={32}
              slidesPerView={4}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {categories.map((cat, idx) => (
                <SwiperSlide key={idx}>
                  <CategoryCard
                    image={cat.image}
                    title={cat.title}
                    onClick={() => handleCategoryClick(cat.title)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* -----------------...Shoes Categories Section...------------------- */}

        <section className="container mx-auto px-4 py-13 flex flex-col lg:flex-row items-start overflow-x-hidden">
          {/* Left: Text */}
          <div className="flex-1 min-w-[320px] max-w-[400px] pl-6">
            <h1 className="text-6xl font-extrabold text-left mb-2 leading-tight">Best Sellers</h1>
            <p className="text-xl text-left mb-2 leading-tight">Sports Gear, Footwear & Accessories</p>
            <p className="text-lg font-extrabold text-left mb-8 tracking-wide">EXPLORE ALL</p>
          </div>
          {/* Right: Swiper */}
          <div className="flex-[2] w-full overflow-x-hidden">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={32}
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
            >
              {shoes_categories
               .filter((prod) => prod.image && prod.title && prod.cost)
                      .map((prod, idx) => (
                   <SwiperSlide key={idx}>
                 <ProductCard
                  image={prod.image}
                   title={prod.title}
                   cost={prod.cost}
                  onClick={() => handleBestSellerClick(prod.title)}
                  />
                </SwiperSlide>
               ))}

            </Swiper>
          </div>
        </section>

        {/*------------ <section> -----------------------------------------*/}

        <section className="container mx-auto px-4 py-13 grid grid-cols-4 md:grid-cols-4 gap-8">
          {/* Card 1: BADMINTON */}
          <div className="relative bg-black rounded-lg flex flex-col items-center justify-between py-10 px-6 min-h-[500px]">
            <div className="text-center">
              <h2 className="text-white text-2xl font-extrabold mb-2">RULE<br />THE COURT</h2>
              <div className="relative">
                {/* Outlined text effect */}
                <span className="block text-[64px] font-extrabold text-transparent stroke-white stroke-2 leading-none tracking-tight select-none" style={{
                  WebkitTextStroke: '2px white',
                  letterSpacing: '-0.05em'
                }}>
                  BAD<br />MIN<br />TON
                </span>
                {/* Silhouette image (replace src with your SVG/PNG) */}
                <img
                  src="/pngtree-badminton-sport- (2).png"
                  alt="Badminton Silhouette"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-60 object-contain pointer-events-none"
                  style={{ zIndex: 1 }}
                />
              </div>
            </div>
            <button className="mt-8 px-8 py-3 bg-red-600 text-white font-bold text-xl rounded shadow hover:bg-red-700 transition">
              SHOP NOW
            </button>
          </div>
          {/* Card 2: Shoe Image */}
          <div className="bg-black rounded-lg flex items-center justify-center min-h-[500px]">
            <img
              src="https://us.123rf.com/450wm/djvstock/djvstock2307/djvstock230701024/209038280-modern-sports-shoe-in-blue-and-black-for-athletic-fashion-generated-by-artificial-intelligence.jpg?ver=6"
              alt="Badminton Shoe"
              className="w-96 h-120 object-contain"
            />
          </div>
          {/* Card 3: CRICKET */}
          <div className="relative bg-black rounded-lg flex flex-col items-center justify-between py-10 px-6 min-h-[500px]">
            <div className="text-center">
              <h2 className="text-white text-2xl font-extrabold mb-2">RULE<br />THE COURT</h2>
              <div className="relative">
                {/* Outlined text effect */}
                <span className="block text-[64px] font-extrabold text-transparent stroke-white stroke-2 leading-none tracking-tight select-none" style={{
                  WebkitTextStroke: '2px white',
                  letterSpacing: '-0.05em'
                }}>
                  CR<br />ICK<br />ET
                </span>
                {/* Silhouette image (replace src with your SVG/PNG) */}
                <img
                  src="/badminton-silhouette.png"
                  alt="Badminton Silhouette"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-60 object-contain pointer-events-none"
                  style={{ zIndex: 1 }}
                />
              </div>
            </div>
            <button className="mt-8 px-8 py-3 bg-red-600 text-white font-bold text-xl rounded shadow hover:bg-red-700 transition">
              SHOP NOW
            </button>
          </div>
          {/* Card 4: Shoe Image */}
          <div className="bg-black rounded-lg flex items-center justify-center min-h-[500px]">
            <img
              src="https://images.prodirectsport.com/ProductImages/Gallery_1/V3_1_Gallery_1_0217671.jpg"
              alt="Badminton Shoe"
              className="w-96 h-80 object-contain"
            />
          </div>
        </section>

        {/*----------------- Clearance Section ---------------------------*/}

          <section className="container mx-auto px-4 py-13 flex flex-col lg:flex-row items-start overflow-x-hidden">
          {/* Left: Text */}
          <div className="flex-1 min-w-[320px] max-w-[400px] pl-6">
            <h1 className="text-6xl font-extrabold text-left mb-2 leading-tight">CLEARANCE</h1>
            
            <p className="text-lg font-bold text-left mb-8 tracking-wide">EXPLORE ALL</p>
          </div>
          {/* Right: Swiper */}
          <div className="flex-[2] w-full overflow-x-hidden">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={32}
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
            >
              {clearanceItems
                .filter((prod) => prod.image && prod.title && prod.cost)
                .map((prod, idx) => (
                <SwiperSlide key={idx}>
                  <ProductCard
                    image={prod.image}
                    title={prod.title}
                    cost={prod.cost}
                   onClick={() => handleShoesCategoriesClick(prod.title)}

                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        
        {/*----------------- New Arrival Section ---------------------------*/}
        
        

<section className="w-full bg-black py-13 mb-0">
  <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
    {/* Left: Heading */}
    <div className="flex-1 mb-10 md:mb-0">
      <div>
        <span className="bg-red-600 text-black font-extrabold text-4xl px-6 py-2 ml-10">NEW</span>
        <div className="h-1 bg-red-600 w-2/3 mt-1 ml-15 mb-4"></div>
      </div>
      <h2 className="text-white text-[6vw] md:text-[5vw] lg:text-[5vw] font-extrabold leading-none mb-4 ml-10">ARRIVALS</h2>
      <button className="bg-white text-black font-bold text-lg px-4 py-2  ml-15 mt-2 shadow hover:bg-gray-200 transition">EXPLORE NOW</button>
    </div>
    {/* Right: Swiper */}
    <div className="flex-1 ml-40 w-1/2">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {/* images */}
        <SwiperSlide>
          <img src="https://images.prodirectsport.com/ProductImages/Main/160969.jpg" alt="New Arrival 1" className="rounded-lg object-cover w-full h-[350px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.khelmart.com/pub/media/catalog/product/cache/712b931dac1b924a11d1b7282ad89910/2/_/2_867_2.jpg" alt="New Arrival 2" className="rounded-lg object-cover w-full h-[350px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://assets.ajio.com/medias/sys_master/root/20220519/7OMO/62866a19f997dd03e2f4bd20/-473Wx593H-410261844-skyrush-MODEL4.jpg" alt="New Arrival 3" className="rounded-lg object-cover w-full h-[350px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.niviasports.com/cdn/shop/files/8_9f11105d-92f6-4bdc-a5fb-68c6df424ceb.jpg?v=1734001515&width=1090" alt="New Arrival 3" className="rounded-lg object-cover w-full h-[350px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.niviasports.com/cdn/shop/files/2B0A6580.jpg?v=1741069623&width=1090" alt="New Arrival 3" className="rounded-lg object-cover w-full h-[350px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/81NDG68e3yL._UY1000_.jpg" alt="New Arrival 3" className="rounded-lg object-cover w-full h-[350px]" />
        </SwiperSlide>
        {/* Add more SwiperSlide as needed */}
      </Swiper>
    </div>
  </div>
</section>

{/* ----------------- story ----------------- */}
<section className="flex-grow py-20  mt-10 mb-0 bg-white-50">
<StorytellingSlider />

</section>


{/* ----------------- OUR ASSOCIATION Section ----------------- */}
<section className="py-10 text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-6">
    OUR ASSOCIATION
  </h2>
  <div className="flex flex-wrap justify-center gap-8">
    <img
      src="/images/chennaiyin.png"
      alt="Chennaiyin FC"
      className="w-24 md:w-28 lg:w-32 shadow-lg rounded"
    />
    <img
      src="/images/bhutan.png"
      alt="Bhutan Football Federation"
      className="w-24 md:w-28 lg:w-32 shadow-lg rounded"
    />
    <img
      src="/images/jamshedpur.png"
      alt="Jamshedpur FC"
      className="w-24 md:w-28 lg:w-32 shadow-lg rounded"
    />
    <img
      src="/images/mohunbagan.png"
      alt="Mohun Bagan Super Giant"
      className="w-24 md:w-28 lg:w-32 shadow-lg rounded"
    />
    <img
      src="/images/sreenidi.png"
      alt="Sreenidi Deccan Football Club"
      className="w-24 md:w-28 lg:w-32 shadow-lg rounded"
    />
    <img
      src="/images/realkashmir.png"
      alt="Real Kashmir FC"
      className="w-24 md:w-28 lg:w-32 shadow-lg rounded"
    />
    <img
      src="/images/churchill.png"
      alt="Churchill Brothers FC"
      className="w-24 md:w-28 lg:w-32 shadow-lg rounded"
    />
  </div>
</section>
</main>
      <Footer />
    </div>
 

 
);
};

export default Home;

{/*

 Put all the logos in your public folder:

public/images/chennaiyin.png
public/images/bhutan.png
public/images/jamshedpur.png
public/images/mohunbagan.png
public/images/sreenidi.png
public/images/realkashmir.png
public/images/churchill.png
  
  
  */}

