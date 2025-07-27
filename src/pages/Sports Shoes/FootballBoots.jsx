import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const footballBoots = [
  {
    id: 1,
    name: "Nike Mercurial Superfly",
    cost: "₹12,999",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=Nike+Mercurial+Superfly",
  },
  {
    id: 2,
    name: "Adidas Predator Freak",
    cost: "₹10,499",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Adidas+Predator+Freak",
  },
  {
    id: 3,
    name: "Puma Future Z 1.1",
    cost: "₹8,299",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Future+Z+1.1",
  },
  {
    id: 4,
    name: "New Balance Furon V6+",
    cost: "₹9,999",
    discount: "17% OFF",
    image: "https://via.placeholder.com/400x400?text=NB+Furon+V6+Plus",
  },
  {
    id: 5,
    name: "Under Armour Clone Magnetico",
    cost: "₹7,599",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=UA+Clone+Magnetico",
  },
  {
    id: 6,
    name: "Mizuno Morelia Neo III",
    cost: "₹11,299",
    discount: "22% OFF",
    image: "https://via.placeholder.com/400x400?text=Mizuno+Morelia+Neo+III",
  },
  {
    id: 7,
    name: "Asics DS Light X-Fly 4",
    cost: "₹9,899",
    discount: "16% OFF",
    image: "https://via.placeholder.com/400x400?text=Asics+DS+Light+X-Fly",
  },
  {
    id: 8,
    name: "Diadora Brasil Italy OG",
    cost: "₹13,999",
    discount: "25% OFF",
    image: "https://via.placeholder.com/400x400?text=Diadora+Brasil+Italy+OG",
  },
  {
    id: 9,
    name: "Kipsta Agility 900",
    cost: "₹5,499",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Kipsta+Agility+900",
  },
  {
    id: 10,
    name: "Umbro Velocita Alchemist",
    cost: "₹8,799",
    discount: "21% OFF",
    image: "https://via.placeholder.com/400x400?text=Umbro+Velocita+Alchemist",
  },
  {
    id: 11,
    name: "Joma Propulsion Lite",
    cost: "₹6,399",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=Joma+Propulsion+Lite",
  },
  {
    id: 12,
    name: "Pantofola d’Oro Lazzarini",
    cost: "₹14,999",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Pantofola+Lazzarini",
  },
  {
    id: 13,
    name: "Kelme Precision",
    cost: "₹4,899",
    discount: "17% OFF",
    image: "https://via.placeholder.com/400x400?text=Kelme+Precision",
  },
  {
    id: 14,
    name: "Sondico Flair FG",
    cost: "₹3,499",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Sondico+Flair+FG",
  },
  {
    id: 15,
    name: "Decathlon Viralto III",
    cost: "₹5,299",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Decathlon+Viralto+III",
  },
];

const FootballBoots = () => {
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
        Football Boots Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {footballBoots.map((item, idx) => (
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

export default FootballBoots;
