import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";



  const badmintonShuttles = [
    {
      id: 1,
      name: "Yonex Aerosensa 20",
      cost: "₹1,999",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR-O-QG3D-4y3tSUaxDpR59jFQnb8Q1O2rA&s",
      discount: "50% OFF"
    },
    {
      id: 2,
      name: "Li-Ning A+60",
      cost: "₹1,799",
      image: "https://in.lining.studio/cdn/shop/files/a_600_590bc6b097.jpg?v=1749895066&width=1946",
    discount: "15% OFF"
    },
    {
      id: 3,
      name: "Victor Gold Champion",
      cost: "₹1,599",
      image: "https://images-na.ssl-images-amazon.com/images/I/31CLB+ryIoL._AC_UL495_SR435,495_.jpg",
      discount:  "20% OFF"
    },
    {
      id: 4,
      name: "Yonex Mavis 350",
      cost: "₹1,299",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPijl_RFtNHNUVZqmXjcV3ZFg-D8VvaRaAA&s",
      discount:  "25% OFF"
    },
    {
      id: 5,
      name: "Cosco Aero 747",
      cost: "₹999",
      image: "https://images-eu.ssl-images-amazon.com/images/I/71DAm-zBI-L._AC_UL495_SR435,495_.jpg",
      discount:  "15% OFF"
    },
    {
      id: 6,
      name: "Apacs S-20",
      cost: "₹1,199",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDChxPc7jeGW5jZ0PAQKjW-RMc2cIIvJLyka0MN7q0RGJqCPU9g4Mwl5AYh1lISwTC4Y&usqp=CAU",
      discount: "16% OFF",
    },

  ];

  const BadmintonShuttles = () => {
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
    <div className="flex flex-col min-h-screen">
      <Header />
      <Nav />
      <h1 className="text-3xl font-bold mt-10 mb-8 text-center">Badminton Shuttles</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {badmintonShuttles.map((item, idx) => (
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

export default BadmintonShuttles;
