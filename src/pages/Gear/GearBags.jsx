import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";

import Navbar from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const gearBags = [
  {
    id: 1,
    name: "Nike Gear Backpack",
    cost: "₹1,299",
    discount: "10% OFF",
    image: "https://m.media-amazon.com/images/I/61V2REXIN9L._UY1100_.jpg",
  },
  {
    id: 2,
    name: "Adidas Sport Gear Bag",
    cost: "₹1,499",
    discount: "12% OFF",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/c587eb407e204abdbe958f048281a748_9366/Sport_Bag_Purple_IR9933.jpg",
  },
  {
    id: 3,
    name: "Puma Gym Sack",
    cost: "₹899",
    discount: "8% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/27645216/2024/5/31/d5c37e0d-47b9-4a39-9dde-f41d7aaa42ec1717137933685-Puma-Unisex-Brand-Logo-Printed-Phase-Gym-Sack-86417171379335-12.jpg",
  },
  {
    id: 4,
    name: "Under Armour Duffel",
    cost: "₹1,799",
    discount: "15% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/duffel-bag/r/d/3/13-1300213-401-1300213-gym-duffel-bag-21-under-armour-53-original-imagywn2zvvnpfcj.jpeg?q=90&crop=false",
  },
  {
    id: 5,
    name: "Reebok Active Bag",
    cost: "₹999",
    discount: "11% OFF",
    image: "https://imagescdn.reebok.in/img/app/product/7/781619-9057946.jpg",
  },
  {
    id: 6,
    name: "Wildcraft Gear Pack",
    cost: "₹1,199",
    discount: "14% OFF",
    image: "https://m.media-amazon.com/images/I/71Ik-AaRU6L._SY350_QL15_.jpg",
  },
  {
    id: 7,
    name: "Decathlon Compact Bag",
    cost: "₹699",
    discount: "9% OFF",
    image: "https://tapwell.in/wp-content/uploads/2024/05/DEC-007.jpg",
  },
  {
    id: 8,
    name: "Skybags Quick Gear",
    cost: "₹1,399",
    discount: "13% OFF",
    image: "https://skybags.co.in/cdn/shop/files/3_d4cea973-d9d3-4507-9b2e-01960a9908a9_1800x1800.jpg?v=1705651384",
  },
  {
    id: 9,
    name: "F Gear Utility Bag",
    cost: "₹1,499",
    discount: "16% OFF",
    image: "https://assets.ajio.com/medias/sys_master/root/20230526/yiJF/6470d9f642f9e729d7ed930d/-473Wx593H-469513520-aqua-MODEL.jpg",
  },
  {
    id: 10,
    name: "Tommy Hilfiger Sport Duffel",
    cost: "₹1,999",
    discount: "18% OFF",
    image: "https://m.media-amazon.com/images/I/51RZCyZ3I3L._UY1100_.jpg",
  },
  {
    id: 11,
    name: "HRX Gym Gear Bag",
    cost: "₹849",
    discount: "7% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/duffel-bag/m/c/4/gym-travel-duffle-bag-for-men-women-hrx-03-gym-duffel-bag-hrx-by-original-imagxrjumngygunb.jpeg?q=90&crop=false",
  },
  {
    id: 12,
    name: "Nivia Training Backpack",
    cost: "₹899",
    discount: "20% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4MHLFXEmd66E1DnuxBTa7HT6h2KQxAdm2A&s",
  },
  {
    id: 13,
    name: "Puma Prime Gear Bag",
    cost: "₹1,099",
    discount: "12% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9U-JrjDAg-GvbmQZQ0ry0WJoNZGhN5maFLg&s",
  },
  {
    id: 14,
    name: "Sparx Multi Utility Bag",
    cost: "₹1,299",
    discount: "14% OFF",
    image: "https://images-eu.ssl-images-amazon.com/images/I/51Vs6PR3eKL._AC_UL600_SR600,600_.jpg",
  },
  {
    id: 15,
    name: "Lavie Luxe Sport Bag",
    cost: "₹1,799",
    discount: "17% OFF",
    image: "https://m.media-amazon.com/images/I/61TAA3jhI-L._UY1000_.jpg",
  },
];

const GearBags = () => {
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
      
      <h1 className="text-3xl font-bold mb-8 text-center"><br />Gear Bags Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gearBags.map((item, idx) => (
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
      <br /><br />
      <Footer />
    </div>
  );
};

export default GearBags;
