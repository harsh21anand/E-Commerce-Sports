import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";


const badmintonRackets = [
  {
    id: 1,
    name: "Wilson Pro Staff 97",
    cost: "₹21,999",
    discount: "15% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeslIDku1WtNwySNV2-1xq8rgMOUBeiHpkxw&s",
  },
  {
    id: 2,
    name: "Babolat Pure Drive",
    cost: "₹17,999",
    discount: "18% OFF",
    image: "https://static.wixstatic.com/media/22ea0d_6998b54c35ab4b80af2d789a06b5b229~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/22ea0d_6998b54c35ab4b80af2d789a06b5b229~mv2.png",
  },
  {
    id: 3,
    name: "Head Graphene 360+ Speed Pro",
    cost: "₹19,499",
    discount: "20% OFF",
    image: "https://d2nh8svgavbdh6.cloudfront.net/media/catalog/product/cache/6f249b74859a7be1d7805922ae461e88/r/h/rh3053_1.jpg",
  },
  {
    id: 4,
    name: "Yonex VCore Pro 97",
    cost: "₹22,999",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/5160eoS6EDL._UF894,1000_QL80_.jpg",
  },
  {
    id: 5,
    name: "Tecnifibre T-Fight ISO 300",
    cost: "₹14,999",
    discount: "10% OFF",
    image: "https://d2nh8svgavbdh6.cloudfront.net/media/catalog/product/cache/6f249b74859a7be1d7805922ae461e88/1/4/14fi300i31_01.jpg",
  },
  {
    id: 6,
    name: "Prince Phantom 100X",
    cost: "₹15,499",
    discount: "17% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJJUakesgAARDhKU1M2rNrRbElY6bKErBjQ&s",
  },
  {
    id: 7,
    name: "Head Radical MP",
    cost: "₹16,799",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgwJ6rs6dwkAwdeaJUeXWouf09FKku_ZQww&s",
  },
  {
    id: 8,
    name: "Wilson Blade 98 v8",
    cost: "₹18,499",
    discount: "16% OFF",
    image: "https://images-na.ssl-images-amazon.com/images/I/51lsIdmJ5BL._AC_UL210_SR210,210_.jpg",
  },

];

const BadmintonRackets = () => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex >= 0) {
      existingCart[existingItemIndex].qty =
        (existingCart[existingItemIndex].qty || 1) + 1;
    } else {
      existingCart.push({ ...item, qty: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    navigate("/cart");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Navbar />

      <h1 className="text-3xl font-bold mt-3 mb-8 text-center"><br /> <br />
       Badminton Rackets Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {badmintonRackets.map((item, idx) => (
          <ShopCard
            key={idx}
            image={item.image}
            name={item.name}
            cost={item.cost}
            discount={item.discount}
            onAddToCart={() => handleAddToCart(item)}
          />
        ))}
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default BadmintonRackets;
