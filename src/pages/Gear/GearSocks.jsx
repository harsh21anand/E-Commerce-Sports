import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const gearSocks = [
  {
    id: 1,
    name: "Nike Performance Socks",
    cost: "₹499",
    discount: "10% OFF",
    image: "https://via.placeholder.com/400x400?text=Nike+Socks",
  },
  {
    id: 2,
    name: "Adidas Crew Socks Pack",
    cost: "₹599",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Adidas+Crew+Socks",
  },
  {
    id: 3,
    name: "Puma Ankle Socks",
    cost: "₹399",
    discount: "8% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Ankle+Socks",
  },
  {
    id: 4,
    name: "HRX Training Socks",
    cost: "₹449",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=HRX+Training+Socks",
  },
  {
    id: 5,
    name: "Under Armour Sport Socks",
    cost: "₹599",
    discount: "11% OFF",
    image: "https://via.placeholder.com/400x400?text=UA+Sport+Socks",
  },
  {
    id: 6,
    name: "Reebok Active Socks",
    cost: "₹549",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Reebok+Active+Socks",
  },
  {
    id: 7,
    name: "Wildcraft Quick-Dry Socks",
    cost: "₹349",
    discount: "9% OFF",
    image: "https://via.placeholder.com/400x400?text=Wildcraft+Socks",
  },
  {
    id: 8,
    name: "Decathlon Stretch Socks",
    cost: "₹299",
    discount: "13% OFF",
    image: "https://via.placeholder.com/400x400?text=Decathlon+Stretch+Socks",
  },
  {
    id: 9,
    name: "Nivia Comfort Socks",
    cost: "₹399",
    discount: "16% OFF",
    image: "https://via.placeholder.com/400x400?text=Nivia+Comfort+Socks",
  },
  {
    id: 10,
    name: "HRX Essentials Socks",
    cost: "₹479",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=HRX+Essentials+Socks",
  },
  {
    id: 11,
    name: "Puma Sports Crew Socks",
    cost: "₹549",
    discount: "7% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Sports+Crew+Socks",
  },
  {
    id: 12,
    name: "Sparx Cushioned Socks",
    cost: "₹379",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Sparx+Cushioned+Socks",
  },
  {
    id: 13,
    name: "Fila Classic Sports Socks",
    cost: "₹429",
    discount: "17% OFF",
    image: "https://via.placeholder.com/400x400?text=Fila+Classic+Socks",
  },
  {
    id: 14,
    name: "Decathlon Hiking Socks",
    cost: "₹299",
    discount: "22% OFF",
    image: "https://via.placeholder.com/400x400?text=Decathlon+Hiking+Socks",
  },
  {
    id: 15,
    name: "Asics Gel-Cushion Socks",
    cost: "₹499",
    discount: "9% OFF",
    image: "https://via.placeholder.com/400x400?text=Asics+Gel+Socks",
  },
];

const GearSocks = () => {
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
    <div className="container mx-auto px-4 py-10">
      <button
        onClick={() => navigate("/")}
        className="flex items-center mb-6 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-lg font-semibold shadow"
        style={{ maxWidth: 200 }}
      >
        <span className="mr-2 text-xl">&larr;</span> Back
      </button>
      <h1 className="text-3xl font-bold mb-8 text-center">Gear - Socks Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gearSocks.map((item, idx) => (
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
      <Footer />
    </div>
  );
};

export default GearSocks;
