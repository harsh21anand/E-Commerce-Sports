import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const bags = [
  {
    id: 1,
    name: "Nike Academy Team Backpack",
    cost: "₹2,999",
    discount: "15% OFF",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b2ea46fb-ec8b-43fb-88f1-d861b06a395d/Y+NK+ACDMY+TEAM+BKPK.png",
  },
  {
    id: 2,
    name: "Adidas Tiro League Bag",
    cost: "₹3,499",
    discount: "10% OFF",
    image: "https://cdn.sportshop.com/catalog/product/1118/1118/1/6/160598_11.jpg",
  },
  {
    id: 3,
    name: "Puma Phase Backpack",
    cost: "₹1,899",
    discount: "12% OFF",
    image: "https://images.puma.net/images/075487/49/fnd/IND/w/800/h/800/",
  },
  {
    id: 4,
    name: "Under Armour Hustle 5.0",
    cost: "₹4,299",
    discount: "20% OFF",
    image: "https://img.tatacliq.com/images/i11/658Wx734H/MP000000017993939_658Wx734H_202306171408561.jpeg",
  },
  {
    id: 5,
    name: "Reebok Active Core Backpack",
    cost: "₹2,499",
    discount: "18% OFF",
    image: "https://assets.ajio.com/medias/sys_master/root/20231124/X8I9/6560bf28ddf779151999abe7/-473Wx593H-469286483-green-MODEL.jpg",
  },
  {
    id: 6,
    name: "Wildcraft HypaShield Pro",
    cost: "₹3,199",
    discount: "17% OFF",
    image: "https://wildcraft.com/media/catalog/product/1/_/1_3236_33.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=375&width=370&auto=webp&format=pjpg",
  },
  {
    id: 7,
    name: "Decathlon Quechua Backpack",
    cost: "₹1,599",
    discount: "22% OFF",
    image: "https://contents.mediadecathlon.com/p1640053/bf0f4b662807ff368bb96dc72026f72f/p1640053.jpg?format=auto&quality=70&f=1024x0",
  },
  {
    id: 8,
    name: "Skybags Campus Pro",
    cost: "₹2,899",
    discount: "14% OFF",
    image: "https://skybags.co.in/cdn/shop/files/BPSQPR04SBL_1800x1800.png?v=1698144146",
  },
  {
    id: 9,
    name: "F Gear Burner Laptop Bag",
    cost: "₹3,499",
    discount: "11% OFF",
    image: "https://m.media-amazon.com/images/I/81TL416ND9L._SX679_.jpg",
  },
  {
    id: 10,
    name: "Tommy Hilfiger Urban Pack",
    cost: "₹5,299",
    discount: "19% OFF",
    image: "https://cdn01.nnnow.com/web-images/preview/styles/OM6TQNF4XGR/1707475209124/1.jpg",
  },
  {
    id: 11,
    name: "American Tourister ZigZag",
    cost: "₹2,199",
    discount: "16% OFF",
    image: "https://5.imimg.com/data5/PL/OQ/MY-14107827/american-tourister-z-lite-dlx-20-inch-spinner-luggage-bag-28graphite-29-1000x1000.jpg",
  },
  {
    id: 12,
    name: "Lavie Luxe Leather Bag",
    cost: "₹4,999",
    discount: "21% OFF",
    image: "https://www.lavieworld.com/cdn/shop/files/HPGH1465106M4_1.jpg?v=1753037130",
  },
  {
    id: 13,
    name: "Nivia Sports Kit Bag",
    cost: "₹1,399",
    discount: "25% OFF",
    image: "https://m.media-amazon.com/images/I/51gPFBvdvtL._SL1100_.jpg",
  },
  {
    id: 14,
    name: "HRX by Hrithik Gym Bag",
    cost: "₹1,799",
    discount: "23% OFF",
    image: "https://assets.myntassets.com/assets/images/22878868/2023/4/24/1e116d79-5e98-4846-9e69-8373e3fcf5bf1682336947999HRXbyHrithikRoshanUnisexBlackOrangeBrandLogoPrintTrainingDuf1.jpg",
  },
  {
    id: 15,
    name: "Puma Prime Time Duffle",
    cost: "₹3,199",
    discount: "13% OFF",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/078344/01/fnd/IND/fmt/png/Prime-Time--Barrel-Bag",
  },
];

const Bags = () => {
  const navigate = useNavigate();

  const handleAddToCart = (bag) => {
    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if item already exists in cart
    const existingItemIndex = existingCart.findIndex(cartItem => cartItem.id === bag.id);
    
    if (existingItemIndex >= 0) {
      // Item exists, increase quantity
      existingCart[existingItemIndex].qty = (existingCart[existingItemIndex].qty || 1) + 1;
    } else {
      // Add new item with quantity 1
      existingCart.push({ ...bag, qty: 1 });
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
      
      <h1 className="text-3xl font-bold mb-8 text-center"><br />FootBall Bags Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bags.map((item, idx) => (
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

export default Bags;
