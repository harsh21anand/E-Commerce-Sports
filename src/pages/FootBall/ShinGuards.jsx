import React from "react";
import ShopCard from "../../components/card/ShopCard";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const shinGuardsItems = [
  {
    id: 1,
    name: "Pro Shield Shin Guards",
    cost: "Rs 499",
    discount: "10% OFF", 
    
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuav9T4I8_gEHME-DA-oga4IXoTLrRUVJSA&s",
  },
  {
    id: 2,
    name: "Ultra Lite Shin Guards",
    cost: "Rs 599",
    discount: "10% OFF", 
    image:
      "https://m.media-amazon.com/images/I/51rVRHIYmoL._UF894,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Impact Protection Shin Guards",
    cost: "Rs 699",
    discount: "10% OFF", 
    image:
      "https://m.media-amazon.com/images/I/61bSfa0OrwL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Defender Shin Guards",
    cost: "Rs 449",
    discount: "10% OFF", 
    image:
      "https://m.media-amazon.com/images/I/51gmJsUymCL._UF894,1000_QL80_.jpg",
  },
  {
    id: 5,
    name: "Classic Shin Guards",
    cost: "Rs 399",
    discount: "10% OFF", 
    image:
      "https://jalandharstyle.com/cdn/shop/products/Nivia_10_03.png?v=1628772349&width=1445",
  },
  {
    id: 6,
    name: "Flexi Shield Shin Guards",
    cost: "Rs 499",
    discount: "10% OFF", 
    image:
      "https://m.media-amazon.com/images/I/71kEdpirg8L._UF894,1000_QL80_.jpg",
  },
  {
    id: 7,
    name: "Elite Shin Guards",
    cost: "Rs 799",
    discount: "10% OFF", 
    image:
      "https://ik.imagekit.io/vyka3olhl/uk/2a7b8167-5319-480e-aff3-af45226b9176/black/SHREY_META_SHIN_GUARDS_3105_BLACK_1_HD_uOnjVMi_m.webp?tr=w-700,h-933?tr=w-700,h-933",
  },
  {
    id: 8,
    name: "Shock Absorb Shin Guards",
    cost: "Rs 649",
    discount: "10% OFF", 
    image:
      "https://xtremexmartialarts.com/wp-content/uploads/2022/12/SHIN-INSTEP-15-jpg-webp.webp",
  },
  {
    id: 9,
    name: "Victory Shin Guards",
    cost: "Rs 749",
    discount: "10% OFF", 
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZJU10bNTJy9OZMJKJTYQ-t29imPQKDvqVA&s",
  },
  {
    id: 10,
    name: "Lightweight Shin Guards",
    cost: "Rs 549",
    discount: "10% OFF", 
    image:
      "https://images-cdn.ubuy.co.in/633cac65e6ba2b159f0ee6a7-shinestone-shin-guards-soccer-shin.jpg",
  },
];

const ShinGuards = () => {
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
      
      <h1 className="text-3xl font-bold mb-8 text-center"> <br />Football Shin Guards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shinGuardsItems.map((item, idx) => (
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

export default ShinGuards;