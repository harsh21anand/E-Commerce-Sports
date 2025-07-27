import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const balls = [
  {
    id: 1,
    name: "Spalding NBA Official",
    cost: "₹4,299",
    discount: "10% OFF",
    image: "https://m.media-amazon.com/images/I/612RadXcDnL._UF894,1000_QL80_.jpg",
  },
  {
    id: 2,
    name: "Nike Dominate 8P",
    cost: "₹3,199",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/81xYByZZimL.jpg",
  },
  {
    id: 3,
    name: "Adidas All Court 3.0",
    cost: "₹2,999",
    discount: "15% OFF",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/9a44621a281149709ca4ae420163c466_9366/All_Court_3.0_Ball_Orange_HM4975_01_standard.jpg",
  },
  {
    id: 4,
    name: "Molten BGGX Series",
    cost: "₹3,599",
    discount: "20% OFF",
    image: "https://m.media-amazon.com/images/I/71ItBvDv8VL._UF894,1000_QL80_.jpg",
  },
  {
    id: 5,
    name: "Nivia Pro Touch",
    cost: "₹1,299",
    discount: "18% OFF",
    image: "https://www.niviasports.com/cdn/shop/files/2B0A1026.jpg?v=1714133613",
  },
  {
    id: 6,
    name: "Cosco Hurricane",
    cost: "₹999",
    discount: "10% OFF",
    image: "https://m.media-amazon.com/images/I/718KlVXGfYL.jpg",
  },
  {
    id: 7,
    name: "Wilson Evolution",
    cost: "₹5,199",
    discount: "25% OFF",
    image: "https://imfitindia.com/cdn/shop/products/51TlsmuXkfL_1024x1024.jpg?v=1640063696",
  },
  {
    id: 8,
    name: "Spalding Street Phantom",
    cost: "₹2,199",
    discount: "14% OFF",
    image: "https://scssports.in/cdn/shop/files/51Lbl4OaVZL._SX300_SY300_QL70_FMwebp.webp?v=1711974331",
  },
  {
    id: 9,
    name: "Nike Elite Championship",
    cost: "₹4,999",
    discount: "10% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKI7ll3fSVnswYpOU7ktkd-1vtzya2LXm6A&s",
  },
  {
    id: 10,
    name: "Cosco Hi-Grip",
    cost: "₹899",
    discount: "18% OFF",
    image: "https://store.cosco.in/cdn/shop/files/DSC0434_1200x.jpg?v=1731583246",
  },
  {
    id: 11,
    name: "Molten GR7",
    cost: "₹1,599",
    discount: "15% OFF",
    image: "https://images-cdn.ubuy.co.in/65de6d6c45988f6aa66812ce-molten-gr7-rubber-basketball.jpg",
  },
  {
    id: 12,
    name: "Decathlon Kipsta BT500",
    cost: "₹1,299",
    discount: "12% OFF",
    image: "https://contents.mediadecathlon.com/p2795512/k$36ac5016c231b07ea566c8e29b7f90b1/size-7-basketball-bt500-grip-black-gold.jpg?format=auto&quality=40&f=520x520",
  },
  {
    id: 13,
    name: "Puma Urban Ball",
    cost: "₹1,699",
    discount: "20% OFF",
    image: "https://m.media-amazon.com/images/I/61U+RworcoL._UY1100_.jpg",
  },
  {
    id: 14,
    name: "Adidas Training Ball",
    cost: "₹1,299",
    discount: "14% OFF",
    image: "https://i.ebayimg.com/images/g/k~UAAOSw-f1mjq1L/s-l400.jpg",
  },
  {
    id: 15,
    name: "Wilson Reaction Pro",
    cost: "₹3,999",
    discount: "16% OFF",
    image: "https://m.media-amazon.com/images/I/81pClX8uSLL._UF894,1000_QL80_.jpg",
  },
];

const BasketBalls = () => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingIndex = existingCart.findIndex((i) => i.id === item.id);
    if (existingIndex !== -1) {
      existingCart[existingIndex].qty = (existingCart[existingIndex].qty || 1) + 1;
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
      
      <h1 className="text-3xl font-bold mb-8 text-center"><br />Basketballs Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {balls.map((item) => (
          <ShopCard
            key={item.id}
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

export default BasketBalls;
