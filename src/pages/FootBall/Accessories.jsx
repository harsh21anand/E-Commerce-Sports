import React from "react";
import ShopCard from "../../components/card/ShopCard";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const accessoriesItems = [
  {
    id: 1,
    name: "Sports Water Bottle",
    cost: "Rs 299",
    discount: "10% OFF",
    image: "https://www.penhouse.in/media/catalog/product/9/6/96584_1c.jpg?width=265&height=265&store=default&image-type=image",
  },
  {
    id: 2,
    name: "Wrist Sweatbands (Pair)",
    cost: "Rs 149",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/716vAQBrg+L._UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Headband Pro",
    cost: "Rs 199",
    discount: "15% OFF",
    image: "https://cdn.shopify.com/s/files/1/0564/9521/0704/files/Ronhill-Reflect-Headband-007614-R954_400x400.jpg?v=1722260598",
  },
  {
    id: 4,
    name: "Sports Cap (Adjustable)",
    cost: "Rs 399",
    discount: "8% OFF",
    image: "https://m.media-amazon.com/images/I/410PFyWS44L.jpg",
  },
  {
    id: 5,
    name: "Drawstring Gym Bag",
    cost: "Rs 249",
    discount: "18% OFF",
    image: "https://m.media-amazon.com/images/I/71btdCrrafS._UY1100_.jpg",
  },
  {
    id: 6,
    name: "Towel (Microfiber)",
    cost: "Rs 349",
    discount: "20% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BEO_URMk6HgzCXtfw_0X0hKg4qSBmqOsJA&s",
  },
  {
    id: 7,
    name: "Yoga Mat Strap Carrier",
    cost: "Rs 129",
    discount: "5% OFF",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/4/414519902/FI/KL/RR/118197183/yoga-mat-strap-500x500.png",
  },
  {
    id: 8,
    name: "Shoe Bag (Breathable)",
    cost: "Rs 199",
    discount: "15% OFF",
    image: "https://nestasia.in/cdn/shop/products/IMG_73861.jpg?v=1680582327",
  },
  {
    id: 9,
    name: "Sports Keychain",
    cost: "Rs 59",
    discount: "10% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkykirjNuA-nANq76aOtk3FFq0PK23kTmQ6A&s",
  },
  {
    id: 10,
    name: "Anti-Slip Socks",
    cost: "Rs 299",
    discount: "25% OFF",
    image: "https://images-cdn.ubuy.co.in/66f63984ccbb32130f78396e-dwg-anti-slip-non-skid-slipper-yoga.jpg",
  },
  {
    id: 11,
    name: "Compression Arm Sleeves",
    cost: "Rs 499",
    discount: "30% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScl_8ff3Bg-92h83Mq3ZGJqgHHMkKH0KVpUg&s",
  },
  {
    id: 12,
    name: "Gym Gloves (Half-Finger)",
    cost: "Rs 399",
    discount: "15% OFF",
    image: "https://m.media-amazon.com/images/I/61rxGXLw2GL._UF894,1000_QL80_.jpg",
  },
  {
    id: 13,
    name: "Portable Shaker Bottle",
    cost: "Rs 349",
    discount: "10% OFF",
    image: "https://image.made-in-china.com/202f0j00epvoqrNyPFbO/Premium-Electric-Protein-Shaker-Bottle-Made-with-Tritan-BPA-Free-24-Oz-Portable-Mixer-Cup.webp",
  },
  {
    id: 14,
    name: "Luggage Tag Set",
    cost: "Rs 199",
    discount: "5% OFF",
    image: "https://travelsleek.in/cdn/shop/files/Set_of_2_Personalised_Luggage_Tag.jpg?v=1735280215",
  },
  {
    id: 15,
    name: "Phone Arm Band (Adjustable)",
    cost: "Rs 299",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/61uG7vk+kJL._AC_UF1000,1000_QL80_.jpg",
  },
];

const Accessories = () => {
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
        Sports Accessories
      </h1>

      {/* Shop Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {accessoriesItems.map((item) => (
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

export default Accessories;
