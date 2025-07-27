import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const flipflops = [
  {
    id: 1,
    name: "Nike Solarsoft Flip-Flop",
    cost: "₹999",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Nike+Solarsoft",
  },
  {
    id: 2,
    name: "Adidas Eezay Flip-Flop",
    cost: "₹799",
    discount: "10% OFF",
    image: "https://via.placeholder.com/400x400?text=Adidas+Eezay",
  },
  {
    id: 3,
    name: "Puma Epic Flip v2",
    cost: "₹699",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Epic+Flip",
  },
  {
    id: 4,
    name: "Crocs Crocband Flip",
    cost: "₹1,499",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=Crocs+Crocband+Flip",
  },
  {
    id: 5,
    name: "Reebok Active Flip-Flop",
    cost: "₹849",
    discount: "11% OFF",
    image: "https://via.placeholder.com/400x400?text=Reebok+Active+Flip",
  },
  {
    id: 6,
    name: "Skechers Go Walk Flip",
    cost: "₹1,299",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Skechers+Go+Walk+Flip",
  },
  {
    id: 7,
    name: "Bata Hawaii Flip-Flop",
    cost: "₹399",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Bata+Hawaii",
  },
  {
    id: 8,
    name: "Sparx Rubber Flip-Flop",
    cost: "₹499",
    discount: "13% OFF",
    image: "https://via.placeholder.com/400x400?text=Sparx+Rubber+Flip",
  },
  {
    id: 9,
    name: "HRX by Hrithik Flip-Flop",
    cost: "₹599",
    discount: "9% OFF",
    image: "https://via.placeholder.com/400x400?text=HRX+Flip+Flop",
  },
  {
    id: 10,
    name: "Red Tape Comfort Flip",
    cost: "₹699",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Red+Tape+Flip",
  },
  {
    id: 11,
    name: "Wildcraft Beach Flip",
    cost: "₹749",
    discount: "10% OFF",
    image: "https://via.placeholder.com/400x400?text=Wildcraft+Beach+Flip",
  },
  {
    id: 12,
    name: "Campus Chill Flip-Flop",
    cost: "₹549",
    discount: "17% OFF",
    image: "https://via.placeholder.com/400x400?text=Campus+Chill+Flip",
  },
  {
    id: 13,
    name: "Fila Classic Flip-Flop",
    cost: "₹799",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Fila+Classic+Flip",
  },
  {
    id: 14,
    name: "Tommy Hilfiger Flip-Flop",
    cost: "₹1,199",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Tommy+Flip",
  },
  {
    id: 15,
    name: "Decathlon Nabaiji Flip",
    cost: "₹499",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=Nabaiji+Flip",
  },
];

const FlipFlops = () => {
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
        Flip-Flop Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flipflops.map((item, idx) => (
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

export default FlipFlops;
