import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const runningShoes = [
  {
    id: 1,
    name: "Nike Air Zoom Pegasus",
    cost: "₹6,999",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Nike+Air+Zoom",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    cost: "₹11,999",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Adidas+Ultraboost+21",
  },
  {
    id: 3,
    name: "Puma Velocity Nitro",
    cost: "₹7,499",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Velocity+Nitro",
  },
  {
    id: 4,
    name: "Asics Gel Nimbus 23",
    cost: "₹12,499",
    discount: "22% OFF",
    image: "https://via.placeholder.com/400x400?text=Asics+Gel+Nimbus",
  },
  {
    id: 5,
    name: "Reebok Floatride Energy 3",
    cost: "₹8,299",
    discount: "17% OFF",
    image: "https://via.placeholder.com/400x400?text=Reebok+Floatride",
  },
  {
    id: 6,
    name: "Under Armour HOVR Machina",
    cost: "₹9,599",
    discount: "21% OFF",
    image: "https://via.placeholder.com/400x400?text=UA+HOVR+Machina",
  },
  {
    id: 7,
    name: "New Balance Fresh Foam 1080v11",
    cost: "₹10,499",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=NB+Fresh+Foam",
  },
  {
    id: 8,
    name: "Saucony Endorphin Speed 2",
    cost: "₹13,499",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Saucony+Endorphin",
  },
  {
    id: 9,
    name: "Hoka One One Clifton 8",
    cost: "₹11,299",
    discount: "16% OFF",
    image: "https://via.placeholder.com/400x400?text=Hoka+Clifton+8",
  },
  {
    id: 10,
    name: "Mizuno Wave Rider 25",
    cost: "₹9,799",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Mizuno+Wave+Rider",
  },
  {
    id: 11,
    name: "Fila Memory Workshift",
    cost: "₹5,199",
    discount: "23% OFF",
    image: "https://via.placeholder.com/400x400?text=Fila+Memory+Workshift",
  },
  {
    id: 12,
    name: "Li-Ning Arc Ace",
    cost: "₹6,299",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=Li-Ning+Arc+Ace",
  },
  {
    id: 13,
    name: "HRX Lightweight Trainer",
    cost: "₹4,999",
    discount: "25% OFF",
    image: "https://via.placeholder.com/400x400?text=HRX+Lightweight",
  },
  {
    id: 14,
    name: "Decathlon Kalenji Run Support",
    cost: "₹3,499",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=Kalenji+Run+Support",
  },
  {
    id: 15,
    name: "Wildcraft Hypashield Runner",
    cost: "₹5,799",
    discount: "22% OFF",
    image: "https://via.placeholder.com/400x400?text=Wildcraft+Runner",
  },
];

const RunningShoes = () => {
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
        Running Shoes Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {runningShoes.map((item, idx) => (
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

export default RunningShoes;
