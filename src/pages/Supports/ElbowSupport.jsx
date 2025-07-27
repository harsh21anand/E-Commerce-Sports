import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const elbowsupports = [
  {
    id: 1,
    name: "Nike Pro Elbow Sleeve",
    cost: "₹799",
    discount: "10% OFF",
    image: "https://via.placeholder.com/400x400?text=Nike+Pro+Elbow+Sleeve",
  },
  {
    id: 2,
    name: "Adidas Elite Elbow Support",
    cost: "₹999",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Adidas+Elite+Elbow",
  },
  {
    id: 3,
    name: "Puma Flex Elbow Brace",
    cost: "₹699",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Flex+Elbow",
  },
  {
    id: 4,
    name: "Under Armour Performance Elbow",
    cost: "₹1,099",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=UA+Elbow+Support",
  },
  {
    id: 5,
    name: "Reebok Active Elbow Guard",
    cost: "₹749",
    discount: "11% OFF",
    image: "https://via.placeholder.com/400x400?text=Reebok+Elbow+Guard",
  },
  {
    id: 6,
    name: "Wildcraft Shield Elbow Pad",
    cost: "₹599",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Wildcraft+Elbow+Pad",
  },
  {
    id: 7,
    name: "Decathlon Domyos Elbow Support",
    cost: "₹549",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Domyos+Elbow+Support",
  },
  {
    id: 8,
    name: "Skybags Sport Elbow Band",
    cost: "₹599",
    discount: "13% OFF",
    image: "https://via.placeholder.com/400x400?text=Skybags+Elbow+Band",
  },
  {
    id: 9,
    name: "F Gear Active Elbow Wrap",
    cost: "₹849",
    discount: "9% OFF",
    image: "https://via.placeholder.com/400x400?text=F+Gear+Elbow+Wrap",
  },
  {
    id: 10,
    name: "Tommy Hilfiger Elbow Guard",
    cost: "₹1,199",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Tommy+Elbow+Guard",
  },
  {
    id: 11,
    name: "HRX Compression Elbow Sleeve",
    cost: "₹699",
    discount: "16% OFF",
    image: "https://via.placeholder.com/400x400?text=HRX+Elbow+Sleeve",
  },
  {
    id: 12,
    name: "Nivia Neo Elbow Support",
    cost: "₹549",
    discount: "21% OFF",
    image: "https://via.placeholder.com/400x400?text=Nivia+Neo+Elbow",
  },
  {
    id: 13,
    name: "Puma Shield Elbow Pad",
    cost: "₹749",
    discount: "13% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Shield+Elbow",
  },
  {
    id: 14,
    name: "Sparx Elbow Guard",
    cost: "₹699",
    discount: "17% OFF",
    image: "https://via.placeholder.com/400x400?text=Sparx+Elbow+Guard",
  },
  {
    id: 15,
    name: "Lavie Pro Elbow Support",
    cost: "₹999",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=Lavie+Pro+Elbow",
  },
];

const ElbowSupport = () => {
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
      <h1 className="text-3xl font-bold mb-8 text-center">
        Elbow Support Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {elbowsupports.map((item, idx) => (
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

export default ElbowSupport;
