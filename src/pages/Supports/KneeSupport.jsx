import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const kneesupports = [
  {
    id: 1,
    name: "Nike Pro Knee Sleeve",
    cost: "₹1,299",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Nike+Pro+Knee+Sleeve",
  },
  {
    id: 2,
    name: "Adidas Elite Knee Support",
    cost: "₹1,499",
    discount: "10% OFF",
    image: "https://via.placeholder.com/400x400?text=Adidas+Elite+Knee",
  },
  {
    id: 3,
    name: "Puma Flex Knee Brace",
    cost: "₹899",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Flex+Knee",
  },
  {
    id: 4,
    name: "Under Armour Performance Knee",
    cost: "₹1,899",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=UA+Knee+Support",
  },
  {
    id: 5,
    name: "Reebok Active Knee Guard",
    cost: "₹1,199",
    discount: "11% OFF",
    image: "https://via.placeholder.com/400x400?text=Reebok+Knee+Guard",
  },
  {
    id: 6,
    name: "Wildcraft Shield Knee Pad",
    cost: "₹999",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Wildcraft+Knee+Pad",
  },
  {
    id: 7,
    name: "Decathlon Domyos Knee Support",
    cost: "₹649",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Domyos+Knee+Support",
  },
  {
    id: 8,
    name: "Skybags Sport Knee Band",
    cost: "₹799",
    discount: "13% OFF",
    image: "https://via.placeholder.com/400x400?text=Skybags+Knee+Band",
  },
  {
    id: 9,
    name: "F Gear Active Knee Wrap",
    cost: "₹1,099",
    discount: "9% OFF",
    image: "https://via.placeholder.com/400x400?text=F+Gear+Knee+Wrap",
  },
  {
    id: 10,
    name: "Tommy Hilfiger Knee Guard",
    cost: "₹1,799",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Tommy+Knee+Guard",
  },
  {
    id: 11,
    name: "HRX Compression Knee Sleeve",
    cost: "₹1,049",
    discount: "16% OFF",
    image: "https://via.placeholder.com/400x400?text=HRX+Knee+Sleeve",
  },
  {
    id: 12,
    name: "Nivia Neo Knee Support",
    cost: "₹849",
    discount: "21% OFF",
    image: "https://via.placeholder.com/400x400?text=Nivia+Neo+Knee",
  },
  {
    id: 13,
    name: "Puma Shield Knee Pad",
    cost: "₹999",
    discount: "13% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Shield+Knee",
  },
  {
    id: 14,
    name: "Sparx Knee Guard",
    cost: "₹749",
    discount: "17% OFF",
    image: "https://via.placeholder.com/400x400?text=Sparx+Knee+Guard",
  },
  {
    id: 15,
    name: "Lavie Pro Knee Support",
    cost: "₹1,399",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=Lavie+Pro+Knee",
  },
];

const KneeSupport = () => {
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
        Knee Support Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {kneesupports.map((item, idx) => (
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

export default KneeSupport;
