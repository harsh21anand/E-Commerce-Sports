import React from "react";
import ShopCard from "../../components/card/ShopCard";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const goalkeeperItems = [
  {
    id: 1,
    name: "Pro Grip Goalkeeper Gloves",
    cost: "Rs 1299",
    discount: "10% OFF", 
    image: "https://m.media-amazon.com/images/I/71jk4JWFd4L._SX679_.jpg",
  },
  {
    id: 2,
    name: "Ultra Shield Goalkeeper Gloves",
    cost: "Rs 1499",
    discount: "10% OFF", 
    image: "https://lsmedia.linker-cdn.net/62267/2023/8610083.jpeg",
  },
  {
    id: 3,
    name: "Defender Goalkeeper Gloves",
    cost: "Rs 999",
    discount: "10% OFF", 
    image: "https://m.media-amazon.com/images/I/91jZryKXrHL._UF894,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Flex Pro Goalkeeper Gloves",
    cost: "Rs 1399",
    discount: "15% OFF", 
    image: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY29tLnNhLzY3OThhNTI5OTFjOTdhNGJkYzJmZWQ5Ny1zZWxlY3QtOTAtZmxleC1wcm8tZ29hbGtlZXBlci1nbG92ZXMuanBn.jpg",
  },
  {
    id: 5,
    name: "Impact Goalkeeper Gloves",
    cost: "Rs 899",
    discount: "20% OFF", 
    image: "https://m.media-amazon.com/images/I/81-iX94aZ0L.jpg",
  },
  {
    id: 6,
    name: "Elite Goalkeeper Gloves",
    cost: "Rs 1599", 
    discount: "30% OFF", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjSEET2N8FKifzUXlL1eK2GD9cC7JA4ZlTg&s",
  },
  {
    id: 7,
    name: "Pro Padded Goalkeeper Gloves",
    cost: "Rs 1499",
    discount: "20% OFF", 
    image: "https://m.media-amazon.com/images/I/61rq18h15sL._UF894,1000_QL80_.jpg",
  },
  {
    id: 8,
    name: "Goalkeeper Arm Pads",
    cost: " Rs 799",
    discount: "10% OFF", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkahl4v3uNp17sCiaBpMQsQ2W7Q-VPMcFvLA&s",
  },
  {
    id: 9,
    name: "Classic Keeper Gloves",
    cost: "Rs 1299",
    discount: "12% OFF", 
    image: "https://setsons.in/cdn/shop/files/IMG-20250114_223000_600x600.jpg?v=1736874084",
  },
  {
    id: 10,
    name: "Grip Control Gloves",
    cost: "Rs 1199",
    discount: "26% OFF", 
    image: "https://images-eu.ssl-images-amazon.com/images/I/61NF57CO2ZL._AC_UL600_SR600,600_.jpg",
  },
  {
    id: 11,
    name: "Pro Goalkeeper Elbow Pads",
    cost: "Rs 699",
    discount: "10% OFF", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqvk402jnt8lUn-8TaD0wZbmyHCMQSZICvg&s",
  },
  {
    id: 12,
    name: "Victory Keeper Gloves",
    cost: "Rs 1399",
    discount: "25% OFF", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCt_nViqNkuGJQs9lOJp4Zdy3fTxOF9KgtA&s",
  },
  {
    id: 13,
    name: "Lightweight Keeper Gloves",
    cost: "Rs 999",
    discount: "20% OFF", 
    image: "https://prokicksports.com/cdn/shop/files/TRENDY_1_1.jpg?v=1748248721",
  },
  {
    id: 14,
    name: "Shock Shield Shin Pads",
    cost: "Rs 499",
    discount: "10% OFF", 
    image: "https://m.media-amazon.com/images/I/818CSa0htfL.jpg",
  },
  {
    id: 15,
    name: "Padded Goalkeeper Shorts",
    cost:  "Rs 899",
    discount: "20% OFF", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJUpWcjptaDG12e4hAOzbLy7Wl3D7H0nabQ&s",
  },
];

const GoalKeeper = () => {
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
     
      <h1 className="text-3xl font-bold mb-8 text-center"> <br />Football Goalkeeper Gloves</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {goalkeeperItems.map((item, idx) => (
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
  
  export default GoalKeeper;
