import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const flat50Items = [
  {
    id: 1,
    name: "Training Shoes (Flat 50% OFF)",
    price: "₹2,499",
    image: "https://via.placeholder.com/400x400?text=Training+Shoes",
  },
  {
    id: 2,
    name: "Sports Hoodie (Flat 50% OFF)",
    price: "₹1,299",
    image: "https://via.placeholder.com/400x400?text=Sports+Hoodie",
  },
  {
    id: 3,
    name: "Compression Leggings (Flat 50% OFF)",
    price: "₹799",
    image: "https://via.placeholder.com/400x400?text=Compression+Leggings",
  },
  {
    id: 4,
    name: "Gym Bag (Flat 50% OFF)",
    price: "₹999",
    image: "https://via.placeholder.com/400x400?text=Gym+Bag",
  },
  {
    id: 5,
    name: "Wrist Watch (Flat 50% OFF)",
    price: "₹1,499",
    image: "https://via.placeholder.com/400x400?text=Wrist+Watch",
  },
  {
    id: 6,
    name: "Wireless Earbuds (Flat 50% OFF)",
    price: "₹1,999",
    image: "https://via.placeholder.com/400x400?text=Wireless+Earbuds",
  },
  {
    id: 7,
    name: "Sports Cap (Flat 50% OFF)",
    price: "₹349",
    image: "https://via.placeholder.com/400x400?text=Sports+Cap",
  },
  {
    id: 8,
    name: "Yoga Pants (Flat 50% OFF)",
    price: "₹649",
    image: "https://via.placeholder.com/400x400?text=Yoga+Pants",
  },
  {
    id: 9,
    name: "Running T-Shirt (Flat 50% OFF)",
    price: "₹499",
    image: "https://via.placeholder.com/400x400?text=Running+T-Shirt",
  },
  {
    id: 10,
    name: "Fitness Tracker (Flat 50% OFF)",
    price: "₹2,499",
    image: "https://via.placeholder.com/400x400?text=Fitness+Tracker",
  },
  {
    id: 11,
    name: "Ankle Socks Pack (Flat 50% OFF)",
    price: "₹299",
    image: "https://via.placeholder.com/400x400?text=Ankle+Socks+Pack",
  },
  {
    id: 12,
    name: "Resistance Band Set (Flat 50% OFF)",
    price: "₹599",
    image: "https://via.placeholder.com/400x400?text=Resistance+Band+Set",
  },
  {
    id: 13,
    name: "Dumbbell Set (Flat 50% OFF)",
    price: "₹2,199",
    image: "https://via.placeholder.com/400x400?text=Dumbbell+Set",
  },
  {
    id: 14,
    name: "Gym Towel Pack (Flat 50% OFF)",
    price: "₹249",
    image: "https://via.placeholder.com/400x400?text=Gym+Towel+Pack",
  },
  {
    id: 15,
    name: "Sweatband Set (Flat 50% OFF)",
    price: "₹199",
    image: "https://via.placeholder.com/400x400?text=Sweatband+Set",
  },
];

const Flat50Off = () => {
  const navigate = useNavigate();
  
  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = existingCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex >= 0) {
      existingCart[existingItemIndex].qty = (existingCart[existingItemIndex].qty || 1) + 1;
    } else {
      existingCart.push({ ...item, qty: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    navigate("/cart");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center mb-6 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-lg font-semibold shadow"
        style={{ maxWidth: 200 }}
      >
        <span className="mr-2 text-xl">&larr;</span> Back
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center text-orange-500">
        Flat 50% OFF Deals
      </h1>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flat50Items.map((item) => (
          <div key={item.id} className="relative bg-white rounded-lg shadow-lg p-4 text-center">
            {/* Sale Badge */}
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              50% OFF
            </div>

             {/* Product Card */}
             <ShopCard
              name={item.name}
              price={item.cost}
              image={item.image}
              // discount={item.discount}
              onAddToCart={() => handleAddToCart(item)}
            />

            
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Flat50Off;
