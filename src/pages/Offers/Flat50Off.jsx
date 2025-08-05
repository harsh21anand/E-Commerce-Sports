import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const flat50Items = [
  {
    id: 1,
    name: "Training Shoes ",
    price: "₹2,499",
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d162b9cdb224c19b1e9435eeea2e608_9366/amalgo-ws.jpg",
  },
  {
    id: 2,
    name: "Sports Hoodie ",
    price: "₹1,299",
    image: "https://m.media-amazon.com/images/I/515nCHwxVuL._UY1100_.jpg",
  },
  {
    id: 3,
    name: "Compression Leggings ",
    price: "₹799",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDa96DKerrkl1RS_mLjC3zYjKKh9Q_NkyrQ&s",
  },
  {
    id: 4,
    name: "Gym Bag ",
    price: "₹999",
    image: "https://m.media-amazon.com/images/I/81CpBvdt0uL.jpg",
  },
  {
    id: 5,
    name: "Wrist Watch ",
    price: "₹1,499",
    image: "https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw33aaf340/images/Sonata/Catalog/77134PM05W_1.jpg?sw=360&sh=360",
  },
  {
    id: 6,
    name: "Wireless Earbuds ",
    price: "₹1,999",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiMtUYKaiR_5i7MEYwKSifSa_jO2hDGwv-Q&s",
  },
  {
    id: 7,
    name: "Sports Cap",
    price: "₹349",
    image: "https://m.media-amazon.com/images/I/31RcnphEPRL._SR290,290_.jpg",
  },
  {
    id: 8,
    name: "Yoga Pants ",
    price: "₹649",
    image: "https://emperorsyathra.com/cdn/shop/files/4M6A3308.jpg?v=1744093906&width=533",
  },
  {
    id: 9,
    name: "Running T-Shirt ",
    price: "₹499",
    image: "https://m.media-amazon.com/images/I/61gwV+f0XbL._UY350_.jpg",
  },
  {
    id: 10,
    name: "Fitness Tracker ",
    price: "₹2,499",
    image: "https://m.media-amazon.com/images/I/41Ql3sGmGrL._SR290,290_.jpg",
  },
  {
    id: 11,
    name: "Ankle Socks Pack ",
    price: "₹299",
    image: "https://m.media-amazon.com/images/I/51IJ0yzJjpL._SR290,290_.jpg",
  },
  {
    id: 12,
    name: "Resistance Band Set ",
    price: "₹599",
    image: "https://m.media-amazon.com/images/I/511Qvnov2XL._AC_.jpg",
  },
  {
    id: 13,
    name: "Dumbbell Set ",
    price: "₹2,199",
    image: "https://m.media-amazon.com/images/I/611A37H1D2L._UF894,1000_QL80_.jpg",
  },
  {
    id: 14,
    name: "Gym Towel Pack ",
    price: "₹249",
    image: "https://m.media-amazon.com/images/I/61CGvPEdCgL._UF894,1000_QL80_.jpg",
  },
  {
    id: 15,
    name: "Sweatband Set ",
    price: "₹199",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbHL8cJxBDM3nVtz85qPdgAnjQJnGz4lWcqs63MwOlvNIDv9IpKusauH47zyJJ9pfJfU&usqp=CAU",
  },
];

const Flat50Off = () => {
  const navigate = useNavigate();
  
  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = existingCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex >= 0) {
      existingCart[existingItemIndex].qty = (existingCart[existingItemIndex].qty || 1) + 1;
    } else {
      existingCart.push({ ...item, qty: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    navigate("/cart");
  };

  return (
    <div className="pt-18 bg-gray-100 min-h-screen">
     <Header />
     <Navbar />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center text-orange-500">
        Flat 50% OFF Deals
      </h1>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flat50Items.map((item) => (
          <div key={item.id} className="relative bg-white rounded-lg shadow-lg p-4 text-center">
            {/* Sale Badge */}
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              50% OFF
            </div>

             {/* Product Card */}
             <ShopCard
              name={item.name}
              price={item.cost}
              image={item.image}
              // discount={item.discount}
              onAddToCart={() => handleAddToCart(item)}
            />

            
          </div>
        ))}
      </div>
      <br /><br />
      <Footer />
    </div>
  );
};

export default Flat50Off;
