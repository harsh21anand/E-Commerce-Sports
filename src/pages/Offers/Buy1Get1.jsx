import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const bogoItems = [
    {
      id: 1,
      name: "Sports T-Shirt (Buy 1 Get 1)",
      price: "₹999",
      image: "https://via.placeholder.com/400x400?text=Sports+T-Shirt",
    },
    {
      id: 2,
      name: "Running Shorts (Buy 1 Get 1)",
      price: "₹799",
      image: "https://via.placeholder.com/400x400?text=Running+Shorts",
    },
    {
      id: 3,
      name: "Gym Gloves (Buy 1 Get 1)",
      price: "₹499",
      image: "https://via.placeholder.com/400x400?text=Gym+Gloves",
    },
    {
      id: 4,
      name: "Yoga Mat (Buy 1 Get 1)",
      price: "₹1,299",
      image: "https://via.placeholder.com/400x400?text=Yoga+Mat",
    },
    {
      id: 5,
      name: "Sports Cap (Buy 1 Get 1)",
      price: "₹399",
      image: "https://via.placeholder.com/400x400?text=Sports+Cap",
    },
    {
      id: 6,
      name: "Water Bottle (Buy 1 Get 1)",
      price: "₹299",
      image: "https://via.placeholder.com/400x400?text=Water+Bottle",
    },
    {
      id: 7,
      name: "Sweatband Set (Buy 1 Get 1)",
      price: "₹199",
      image: "https://via.placeholder.com/400x400?text=Sweatband+Set",
    },
    {
      id: 8,
      name: "Compression Socks (Buy 1 Get 1)",
      price: "₹599",
      image: "https://via.placeholder.com/400x400?text=Compression+Socks",
    },
    {
      id: 9,
      name: "Sports Duffel Bag (Buy 1 Get 1)",
      price: "₹1,499",
      image: "https://via.placeholder.com/400x400?text=Duffel+Bag",
    },
    {
      id: 10,
      name: "Athletic Sunglasses (Buy 1 Get 1)",
      price: "₹899",
      image: "https://via.placeholder.com/400x400?text=Athletic+Sunglasses",
    },
    {
      id: 11,
      name: "Resistance Band (Buy 1 Get 1)",
      price: "₹349",
      image: "https://via.placeholder.com/400x400?text=Resistance+Band",
    },
    {
      id: 12,
      name: "Ankle Support (Buy 1 Get 1)",
      price: "₹449",
      image: "https://via.placeholder.com/400x400?text=Ankle+Support",
    },
    {
      id: 13,
      name: "Fitness Tracker Strap (Buy 1 Get 1)",
      price: "₹549",
      image: "https://via.placeholder.com/400x400?text=Tracker+Strap",
    },
    {
      id: 14,
      name: "Gym Towel (Buy 1 Get 1)",
      price: "₹249",
      image: "https://via.placeholder.com/400x400?text=Gym+Towel",
    },
    {
      id: 15,
      name: "Wrist Wraps (Buy 1 Get 1)",
      price: "₹299",
      image: "https://via.placeholder.com/400x400?text=Wrist+Wraps",
    },
  ];
  

const Buy1Get1 = () => {
  const navigate = useNavigate();
  
  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex = existingCart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex >= 0) {
      existingCart[itemIndex].qty += 1;
    } else {
      existingCart.push({ ...item, qty: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    navigate("/cart");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/offers")}
        className="flex items-center mb-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-lg font-semibold"
      >
        <span className="mr-2">&larr;</span> Back
      </button>

      <h1 className="text-3xl font-bold mb-6 text-center">🎁 Buy 1 Get 1</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bogoItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow hover:shadow-md transition relative"
          >
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              BOGO
            </span>
            <div key={item.id} className="relative">
              <ShopCard
                name={item.name}
                price={item.price}
                image={item.image}
                discount={item.discount}
                onAddToCart={() => handleAddToCart(item)}
              />
             
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Buy1Get1;
