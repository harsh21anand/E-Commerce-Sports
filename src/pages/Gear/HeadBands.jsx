import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const headbands = [
  {
    id: 1,
    name: "Nike Swoosh Headband",
    cost: "₹299",
    discount: "10% OFF",
    image: "https://via.placeholder.com/400x400?text=Nike+Swoosh+Headband",
  },
  {
    id: 2,
    name: "Adidas Performance Headband",
    cost: "₹349",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Adidas+Performance+Headband",
  },
  {
    id: 3,
    name: "Puma Sports Headband",
    cost: "₹279",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Sports+Headband",
  },
  {
    id: 4,
    name: "Under Armour HeatGear Headband",
    cost: "₹399",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=UA+HeatGear+Headband",
  },
  {
    id: 5,
    name: "Reebok Training Headband",
    cost: "₹329",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Reebok+Training+Headband",
  },
  {
    id: 6,
    name: "HRX Flex Fit Headband",
    cost: "₹249",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=HRX+Flex+Fit+Headband",
  },
  {
    id: 7,
    name: "Wildcraft Pro Active Headband",
    cost: "₹199",
    discount: "13% OFF",
    image: "https://via.placeholder.com/400x400?text=Wildcraft+Pro+Active+Headband",
  },
  {
    id: 8,
    name: "Decathlon Dry Fit Headband",
    cost: "₹179",
    discount: "16% OFF",
    image: "https://via.placeholder.com/400x400?text=Decathlon+Dry+Fit+Headband",
  },
  {
    id: 9,
    name: "Nivia Stretch Fit Headband",
    cost: "₹269",
    discount: "11% OFF",
    image: "https://via.placeholder.com/400x400?text=Nivia+Stretch+Fit+Headband",
  },
  {
    id: 10,
    name: "F Gear Sports Band",
    cost: "₹319",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=F+Gear+Sports+Band",
  },
  {
    id: 11,
    name: "Tommy Hilfiger Logo Headband",
    cost: "₹549",
    discount: "17% OFF",
    image: "https://via.placeholder.com/400x400?text=Tommy+Logo+Headband",
  },
  {
    id: 12,
    name: "American Tourister Classic Headband",
    cost: "₹249",
    discount: "21% OFF",
    image: "https://via.placeholder.com/400x400?text=AT+Classic+Headband",
  },
  {
    id: 13,
    name: "Asics Pro Stretch Headband",
    cost: "₹369",
    discount: "22% OFF",
    image: "https://via.placeholder.com/400x400?text=Asics+Pro+Stretch+Headband",
  },
  {
    id: 14,
    name: "Sparx Quick Dry Headband",
    cost: "₹229",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=Sparx+Quick+Dry+Headband",
  },
  {
    id: 15,
    name: "Decathlon Elastic Fit Band",
    cost: "₹199",
    discount: "9% OFF",
    image: "https://via.placeholder.com/400x400?text=Decathlon+Elastic+Fit+Band",
  },
];

const HeadBands = () => {
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
      <h1 className="text-3xl font-bold mb-8 text-center">Gear - Headbands Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {headbands.map((item, idx) => (
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

export default HeadBands;
