import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const anklesupports = [
  {
    id: 1,
    name: "Nike Pro Ankle Sleeve",
    cost: "₹899",
    discount: "10% OFF",
    image: "https://via.placeholder.com/400x400?text=Nike+Pro+Ankle+Sleeve",
  },
  {
    id: 2,
    name: "Adidas Elite Ankle Support",
    cost: "₹1,099",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Adidas+Elite+Ankle",
  },
  {
    id: 3,
    name: "Puma Flex Ankle Brace",
    cost: "₹699",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Flex+Ankle",
  },
  {
    id: 4,
    name: "Under Armour Performance Ankle",
    cost: "₹1,299",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=UA+Ankle+Support",
  },
  {
    id: 5,
    name: "Reebok Active Ankle Guard",
    cost: "₹799",
    discount: "11% OFF",
    image: "https://via.placeholder.com/400x400?text=Reebok+Ankle+Guard",
  },
  {
    id: 6,
    name: "Wildcraft Shield Ankle Pad",
    cost: "₹649",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Wildcraft+Ankle+Pad",
  },
  {
    id: 7,
    name: "Decathlon Domyos Ankle Support",
    cost: "₹549",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Domyos+Ankle+Support",
  },
  {
    id: 8,
    name: "Skybags Sport Ankle Band",
    cost: "₹599",
    discount: "13% OFF",
    image: "https://via.placeholder.com/400x400?text=Skybags+Ankle+Band",
  },
  {
    id: 9,
    name: "F Gear Active Ankle Wrap",
    cost: "₹949",
    discount: "9% OFF",
    image: "https://via.placeholder.com/400x400?text=F+Gear+Ankle+Wrap",
  },
  {
    id: 10,
    name: "Tommy Hilfiger Ankle Guard",
    cost: "₹1,199",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Tommy+Ankle+Guard",
  },
  {
    id: 11,
    name: "HRX Compression Ankle Sleeve",
    cost: "₹749",
    discount: "16% OFF",
    image: "https://via.placeholder.com/400x400?text=HRX+Ankle+Sleeve",
  },
  {
    id: 12,
    name: "Nivia Neo Ankle Support",
    cost: "₹549",
    discount: "21% OFF",
    image: "https://via.placeholder.com/400x400?text=Nivia+Neo+Ankle",
  },
  {
    id: 13,
    name: "Puma Shield Ankle Pad",
    cost: "₹799",
    discount: "13% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Shield+Ankle",
  },
  {
    id: 14,
    name: "Sparx Ankle Guard",
    cost: "₹699",
    discount: "17% OFF",
    image: "https://via.placeholder.com/400x400?text=Sparx+Ankle+Guard",
  },
  {
    id: 15,
    name: "Lavie Pro Ankle Support",
    cost: "₹999",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=Lavie+Pro+Ankle",
  },
];

const AnkleSupport = () => {
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
        Ankle Support Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {anklesupports.map((item, idx) => (
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

export default AnkleSupport;
