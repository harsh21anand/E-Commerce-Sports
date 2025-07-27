import React from "react";
import ShopCard from "../../components/card/ShopCard";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const stockingItems = [
    {
      id: 1,
      name: "Performance Football Stockings",
      cost: "Rs 199",
      discount: "15% OFF",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywSSLA_JQ_EgYKuQvX9NIoY9AjvZe0DH-vg&s",
    },
    {
      id: 2,
      name: "Classic Sports Stockings",
      cost: "Rs 149",
      discount: "10% OFF",
      image: "https://m.media-amazon.com/images/I/71EluTwV6kL._UY1100_.jpg",
    },
    {
      id: 3,
      name: "Breathable Training Stockings",
      cost: "Rs 179",
      discount: "20% OFF",
      image: "https://image.made-in-china.com/202f0j00pOWbckvELoqn/Children-Adults-Men-and-Women-Knee-Length-Football-Socks-Breathable-Anti-Slip-and-Sweat-Absorbing-Training-Socks.webp",
    },
    {
      id: 4,
      name: "Compression Fit Stockings",
      cost: "Rs 249",
      discount: "25% OFF",
      image: "https://vissconext.com/cdn/shop/files/5702-MedicalCompression-Class2Thigh-01.png?v=1745487734",
    },
    {
      id: 5,
      name: "Lightweight Stockings",
      cost: "Rs 129",
      discount: "5% OFF",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b3a467fb-4c84-44b0-9be9-589391fa2065/U+NK+EVERYDAY+LTWT+CREW+3PR.png",
    },
    {
      id: 6,
      name: "Elite Performance Stockings",
      cost: "Rs 299",
      discount: "30% OFF",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglgpYQZfPCBpbCjb_PuJZALS3OhWdSmcWLw&s",
    },
    {
      id: 7,
      name: "All-Day Comfort Stockings",
      cost: "Rs 159",
      discount: "18% OFF",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg4uHxNY3sEwAbjGrrbLHzxjPMyqfZY-0GA&s",
    },
    {
      id: 8,
      name: "Shock-Absorb Training Stockings",
      cost: "Rs 209",
      discount: "12% OFF",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSayA8lJhnQ-hYAl03mqEiskxg5j2yLwxzswA&s",
    },
    {
      id: 9,
      name: "Victory Sports Stockings",
      cost: "Rs 189",
      discount: "22% OFF",
      image: "https://images-eu.ssl-images-amazon.com/images/I/71FE0Mob7SL._AC_UL600_SR600,600_.jpg",
    },
    {
      id: 10,
      name: "Lightweight Training Stockings",
      cost: "Rs 139",
      discount: "8% OFF",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b3a467fb-4c84-44b0-9be9-589391fa2065/U+NK+EVERYDAY+LTWT+CREW+3PR.png",
    },
    {
      id: 11,
      name: "Dynamic Flex Stockings",
      cost: "Rs 279",
      discount: "28% OFF",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFipEf5AxcPXKztxeRkM0ndE_Oqm4yBqF8fA&s",
    },
    {
      id: 12,
      name: "Ultra Grip Sports Stockings",
      cost:"Rs 199",
      discount: "17% OFF",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtnK4C5Xb11-4ZJIW4NT4xNT3ALe9etOzv0g&s",
    },
    {
      id: 13,
      name: "Pro Athlete Stockings",
      cost:"Rs 229",
      discount: "20% OFF",
      image: "https://ik.imagekit.io/vyka3olhl/uk/product-82/grey-white/Shrey_Pro_Double_Layer_Spocks__1776_Angle_6_cTwDGhYxW.jpg?tr=w-700,h-933",
    },
    {
      id: 14,
      name: "Speed Runner Stockings",
      cost:"Rs 249",
      discount: "23% OFF",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpbatbvnS_ZWyQPUDMe8N1UwCNT7bSxHMiw&s",
    },
    {
      id: 15,
      name: "Champion Series Stockings",
      cost: "Rs 199",
      discount: "15% OFF",
      image: "https://www.triumphantsports.com/cdn/shop/files/Triumphant_Sports_Performance_Cricket_Socks_Crew_Length_Champion_Series_Black_Yellow_Main_Image_copy.jpg?v=1720469615",
    },
  ];
  

const Stocking = () => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if item already exists in cart
    const existingItemIndex = existingCart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex >= 0) {
      // Item exists, increase quantity
      existingCart[existingItemIndex].qty = (existingCart[existingItemIndex].qty || 1) + 1;
    } else {
      // Add new item with quantity 1
      existingCart.push({ ...item, qty: 1 });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCart));
    
    // Navigate to cart page
    navigate('/cart');
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Navbar />
      

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        <br />
        Football Stockings
      </h1>

      {/* Shop Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stockingItems.map((item) => (
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

export default Stocking;
