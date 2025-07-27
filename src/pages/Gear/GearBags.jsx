import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const gearBags = [
  {
    id: 1,
    name: "Nike Gear Backpack",
    cost: "₹1,299",
    discount: "10% OFF",
    image: "https://via.placeholder.com/400x400?text=Nike+Gear+Backpack",
  },
  {
    id: 2,
    name: "Adidas Sport Gear Bag",
    cost: "₹1,499",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Adidas+Sport+Bag",
  },
  {
    id: 3,
    name: "Puma Gym Sack",
    cost: "₹899",
    discount: "8% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Gym+Sack",
  },
  {
    id: 4,
    name: "Under Armour Duffel",
    cost: "₹1,799",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=UA+Duffel+Bag",
  },
  {
    id: 5,
    name: "Reebok Active Bag",
    cost: "₹999",
    discount: "11% OFF",
    image: "https://via.placeholder.com/400x400?text=Reebok+Active+Bag",
  },
  {
    id: 6,
    name: "Wildcraft Gear Pack",
    cost: "₹1,199",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Wildcraft+Gear+Pack",
  },
  {
    id: 7,
    name: "Decathlon Compact Bag",
    cost: "₹699",
    discount: "9% OFF",
    image: "https://via.placeholder.com/400x400?text=Decathlon+Compact+Bag",
  },
  {
    id: 8,
    name: "Skybags Quick Gear",
    cost: "₹1,399",
    discount: "13% OFF",
    image: "https://via.placeholder.com/400x400?text=Skybags+Quick+Gear",
  },
  {
    id: 9,
    name: "F Gear Utility Bag",
    cost: "₹1,499",
    discount: "16% OFF",
    image: "https://via.placeholder.com/400x400?text=F+Gear+Utility+Bag",
  },
  {
    id: 10,
    name: "Tommy Hilfiger Sport Duffel",
    cost: "₹1,999",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=Tommy+Sport+Duffel",
  },
  {
    id: 11,
    name: "HRX Gym Gear Bag",
    cost: "₹849",
    discount: "7% OFF",
    image: "https://via.placeholder.com/400x400?text=HRX+Gym+Gear+Bag",
  },
  {
    id: 12,
    name: "Nivia Training Backpack",
    cost: "₹899",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Nivia+Training+Backpack",
  },
  {
    id: 13,
    name: "Puma Prime Gear Bag",
    cost: "₹1,099",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Prime+Gear",
  },
  {
    id: 14,
    name: "Sparx Multi Utility Bag",
    cost: "₹1,299",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Sparx+Utility+Bag",
  },
  {
    id: 15,
    name: "Lavie Luxe Sport Bag",
    cost: "₹1,799",
    discount: "17% OFF",
    image: "https://via.placeholder.com/400x400?text=Lavie+Sport+Bag",
  },
];

const GearBags = () => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex >= 0) {
      existingCart[existingItemIndex].qty =
        (existingCart[existingItemIndex].qty || 1) + 1;
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
      <h1 className="text-3xl font-bold mb-8 text-center">Gear Bags Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gearBags.map((item, idx) => (
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

export default GearBags;
