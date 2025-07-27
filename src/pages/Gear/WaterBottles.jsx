import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const waterBottles = [
  {
    id: 1,
    name: "Nike Squeeze Water Bottle",
    cost: "₹499",
    discount: "10% OFF",
    image: "https://via.placeholder.com/400x400?text=Nike+Water+Bottle",
  },
  {
    id: 2,
    name: "Adidas Steel Sports Bottle",
    cost: "₹799",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Adidas+Steel+Bottle",
  },
  {
    id: 3,
    name: "Puma Hydro Flow Bottle",
    cost: "₹649",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Hydro+Flow",
  },
  {
    id: 4,
    name: "Decathlon Quick Sip Bottle",
    cost: "₹349",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=Decathlon+Quick+Sip",
  },
  {
    id: 5,
    name: "Reebok Active Hydrate Bottle",
    cost: "₹559",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Reebok+Active+Hydrate",
  },
  {
    id: 6,
    name: "Under Armour Thermos Bottle",
    cost: "₹899",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=UA+Thermos+Bottle",
  },
  {
    id: 7,
    name: "Wildcraft Travel Bottle",
    cost: "₹429",
    discount: "13% OFF",
    image: "https://via.placeholder.com/400x400?text=Wildcraft+Travel+Bottle",
  },
  {
    id: 8,
    name: "HRX Eco-Friendly Bottle",
    cost: "₹379",
    discount: "16% OFF",
    image: "https://via.placeholder.com/400x400?text=HRX+Eco+Bottle",
  },
  {
    id: 9,
    name: "F Gear Hydro Steel Bottle",
    cost: "₹699",
    discount: "11% OFF",
    image: "https://via.placeholder.com/400x400?text=F+Gear+Hydro+Steel",
  },
  {
    id: 10,
    name: "Tommy Sport Classic Bottle",
    cost: "₹1,099",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=Tommy+Sport+Classic",
  },
  {
    id: 11,
    name: "American Tourister Flask Bottle",
    cost: "₹649",
    discount: "17% OFF",
    image: "https://via.placeholder.com/400x400?text=AT+Flask+Bottle",
  },
  {
    id: 12,
    name: "Sparx Quick Fill Bottle",
    cost: "₹299",
    discount: "21% OFF",
    image: "https://via.placeholder.com/400x400?text=Sparx+Quick+Fill",
  },
  {
    id: 13,
    name: "Decathlon Insulated Bottle",
    cost: "₹499",
    discount: "22% OFF",
    image: "https://via.placeholder.com/400x400?text=Decathlon+Insulated+Bottle",
  },
  {
    id: 14,
    name: "Nivia Pro Sports Bottle",
    cost: "₹459",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=Nivia+Pro+Sports",
  },
  {
    id: 15,
    name: "Asics Gym Bottle",
    cost: "₹549",
    discount: "9% OFF",
    image: "https://via.placeholder.com/400x400?text=Asics+Gym+Bottle",
  },
];

const WaterBottles = () => {
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
      <h1 className="text-3xl font-bold mb-8 text-center">Gear - Water Bottles Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {waterBottles.map((item, idx) => (
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

export default WaterBottles;
