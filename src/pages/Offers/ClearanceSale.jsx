import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const clearanceItems = [
  {
    id: 1,
    name: "Nivia Storm Football",
    cost: "₹499",
    discount: "20% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/FB-278-Football-Image-1_720x.jpg?v=1707298583",
  },
  {
    id: 2,
    name: "Nivia Encounter Shin Guard",
    cost: "₹299",
    discount: "30% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/SG-130_720x.jpg?v=1704358771",
  },
  {
    id: 3,
    name: "Nivia Airstrike Volleyball",
    cost: "₹799",
    discount: "25% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/VB-501_720x.jpg?v=1704358895",
  },
  {
    id: 4,
    name: "Nivia Combat Shoes",
    cost: "₹1,499",
    discount: "35% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/SH-9913_720x.jpg?v=1704359001",
  },
  {
    id: 5,
    name: "Nivia Titan Backpack",
    cost: "₹999",
    discount: "40% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/BG-1453_720x.jpg?v=1704359184",
  },
  {
    id: 6,
    name: "Nivia Blaze Duffle Bag",
    cost: "₹899",
    discount: "28% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/BG-1460_720x.jpg?v=1704359305",
  },
  {
    id: 7,
    name: "Nivia Aero Football Studs",
    cost: "₹1,299",
    discount: "32% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/SH-9921_720x.jpg?v=1704359408",
  },
  {
    id: 8,
    name: "Nivia Super Court Badminton Shoes",
    cost: "₹1,999",
    discount: "37% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/SH-9925_720x.jpg?v=1704359501",
  },
  {
    id: 9,
    name: "Nivia Performance Socks",
    cost: "₹199",
    discount: "15% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/SK-101_720x.jpg?v=1704359607",
  },
  {
    id: 10,
    name: "Nivia Basic Cap",
    cost: "₹249",
    discount: "10% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/CAP-301_720x.jpg?v=1704359715",
  },
  {
    id: 11,
    name: "Nivia Blaster Handball",
    cost: "₹599",
    discount: "22% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/HB-401_720x.jpg?v=1704359823",
  },
  {
    id: 12,
    name: "Nivia Aqua Bottle 750ml",
    cost: "₹349",
    discount: "18% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/BT-751_720x.jpg?v=1704359932",
  },
  {
    id: 13,
    name: "Nivia Trend Gym Bag",
    cost: "₹799",
    discount: "26% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/BG-1467_720x.jpg?v=1704360038",
  },
  {
    id: 14,
    name: "Nivia Speed Skipping Rope",
    cost: "₹199",
    discount: "12% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/SR-101_720x.jpg?v=1704360147",
  },
  {
    id: 15,
    name: "Nivia Grip Pro Wristband",
    cost: "₹149",
    discount: "8% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/WB-601_720x.jpg?v=1704360258",
  },
];

const ClearanceSale = () => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

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

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8 text-center">Clearance Sale</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clearanceItems.map((item) => (
          <div key={item.id} className="relative border rounded-lg shadow-md">
            {/* SALE Badge */}
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </div>

            {/* Product Card */}
            <ShopCard
              name={item.name}
              price={item.cost}
              image={item.image}
              discount={item.discount}
              onAddToCart={() => handleAddToCart(item)}
            />

           
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ClearanceSale;
