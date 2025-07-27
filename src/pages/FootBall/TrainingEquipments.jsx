import React from "react";
import ShopCard from "../../components/card/ShopCard";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const trainingEquipments = [
  {
    id: 1,
    name: "Agility Ladder Pro",
    cost: "Rs 599",
    discount: "10% OFF",
    image: "https://m.media-amazon.com/images/I/71JLisXpmkL.jpg",
  },
  {
    id: 2,
    name: "Resistance Band Set",
    cost: "Rs 349",
    discount: "15% OFF",
    image: "https://m.media-amazon.com/images/I/81CgJrVHnGL.jpg",
  },
  {
    id: 3,
    name: "Speed Training Parachute",
    cost: "Rs 799",
    discount: "20% OFF",
    image: "https://i5.walmartimages.com/asr/9fc7bf8c-0bc1-4d54-895e-5d00ce4103be.abf9dacd6d0de34cab71e0d914011681.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
  {
    id: 4,
    name: "Cone Marker Set (Pack of 10)",
    cost: "Rs 299",
    discount: "5% OFF",
    image: "https://www.jiomart.com/images/product/original/rvmpjurr13/msi-marker-cones-set-space-marker-agility-soccer-cones-saucer-cone-for-training-football-kids-sports-field-cone-markers-9-inch-space-marker-cones-multi-color-pack-of-10-product-images-orvmpjurr13-p609974576-0-202409161809.jpg?im=Resize=(420,420)",
  },
  {
    id: 5,
    name: "Training Bibs (Set of 6)",
    cost: "Rs 499",
    discount: "12% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOsXqfPgVJ8u62NCLsx1n3aqgODEBEtNMbA&s",
  },
  {
    id: 6,
    name: "Adjustable Hurdle Set",
    cost: "Rs 899",
    discount: "18% OFF",
    image: "https://m.media-amazon.com/images/I/61Dp9VjxfwL.jpg",
  },
  {
    id: 7,
    name: "Reaction Ball",
    cost: "Rs 149",
    discount: "8% OFF",
    image: "https://m.media-amazon.com/images/I/71Wk6JfU99S._UF894,1000_QL80_.jpg",
  },
  {
    id: 8,
    name: "Skipping Rope (Speed Pro)",
    cost: "Rs 199",
    discount: "15% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcml9MG9ut-CK6kRmLBtUboxs3dSDJ_Nr3Q&s",
  },
  {
    id: 9,
    name: "Training Cone (Single)",
    cost: "Rs 49",
    discount: "5% OFF",
    image: "https://image.made-in-china.com/365f3j00SostaRcFhKgr/12-Red-and-White-Football-Training-Marker-Cone.webp",
  },
  {
    id: 10,
    name: "Agility Rings (Set of 6)",
    cost: "Rs 549",
    discount: "22% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsV0UFjSK5urXFd2yfef1Z7htA1xVnXJLBA&s",
  },
  {
    id: 11,
    name: "Resistance Tube with Handles",
    cost: "Rs 399",
    discount: "10% OFF",
    image: "https://contents.mediadecathlon.com/p701819/91ec5bde3127b1dbcd725c97ef05d3eb/p701819.jpg?format=auto&quality=70&f=2520x0",
  },
  {
    id: 12,
    name: "Balance Trainer Ball",
    cost: "Rs 1499",
    discount: "30% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yLDMJsepHy5l-rScXQ9MvP0VDLD_x8Ekwg&s",
  },
  {
    id: 13,
    name: "Mini Resistance Bands (Set of 5)",
    cost: "Rs 249",
    discount: "15% OFF",
    image: "https://cdn.webshopapp.com/shops/281654/files/288908043/500x500x2/mini-resistance-band-set-5pcs.jpg",
  },
  {
    id: 14,
    name: "Foam Roller",
    cost: "Rs 799",
    discount: "20% OFF",
    image: "https://m.media-amazon.com/images/I/61YFRtG4xtL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 15,
    name: "Weighted Medicine Ball (3kg)",
    cost: "Rs 1299",
    discount: "25% OFF",
    image: "https://cdn02.plentymarkets.com/zkz64ybyye6y/item/images/1142/full/Medizinball-3kg-1142_2.jpg",
  },
];

const TrainingEquipments = () => {
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
        
        Football Training Equipments
      </h1>

      {/* Shop Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trainingEquipments.map((item) => (
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

export default TrainingEquipments;
