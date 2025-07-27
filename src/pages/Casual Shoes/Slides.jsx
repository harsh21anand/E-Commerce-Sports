import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const slides = [
  {
    id: 1,
    name: "Nike Benassi JDI",
    cost: "₹1,799",
    discount: "10% OFF",
    image: "https://via.placeholder.com/400x400?text=Nike+Benassi+JDI",
  },
  {
    id: 2,
    name: "Adidas Adilette Comfort",
    cost: "₹2,199",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Adidas+Adilette+Comfort",
  },
  {
    id: 3,
    name: "Puma Leadcat Slide",
    cost: "₹1,599",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Leadcat+Slide",
  },
  {
    id: 4,
    name: "Under Armour Locker III",
    cost: "₹1,299",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=UA+Locker+III",
  },
  {
    id: 5,
    name: "Reebok Energylux Slide",
    cost: "₹1,499",
    discount: "11% OFF",
    image: "https://via.placeholder.com/400x400?text=Reebok+Energylux+Slide",
  },
  {
    id: 6,
    name: "Fila Drifter Slide",
    cost: "₹1,199",
    discount: "13% OFF",
    image: "https://via.placeholder.com/400x400?text=Fila+Drifter+Slide",
  },
  {
    id: 7,
    name: "Skechers Go Walk Slide",
    cost: "₹2,399",
    discount: "16% OFF",
    image: "https://via.placeholder.com/400x400?text=Skechers+Go+Walk+Slide",
  },
  {
    id: 8,
    name: "Decathlon Nabaiji Slide",
    cost: "₹799",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=Nabaiji+Slide",
  },
  {
    id: 9,
    name: "Wildcraft Flip Slide",
    cost: "₹999",
    discount: "9% OFF",
    image: "https://via.placeholder.com/400x400?text=Wildcraft+Flip+Slide",
  },
  {
    id: 10,
    name: "Crocs Classic Slide",
    cost: "₹2,699",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Crocs+Classic+Slide",
  },
  {
    id: 11,
    name: "HRX Pool Slide",
    cost: "₹899",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=HRX+Pool+Slide",
  },
  {
    id: 12,
    name: "Campus Poolside Slides",
    cost: "₹699",
    discount: "11% OFF",
    image: "https://via.placeholder.com/400x400?text=Campus+Poolside+Slides",
  },
  {
    id: 13,
    name: "Red Tape Casual Slide",
    cost: "₹1,399",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Red+Tape+Casual+Slide",
  },
  {
    id: 14,
    name: "Sparx Comfort Slide",
    cost: "₹849",
    discount: "10% OFF",
    image: "https://via.placeholder.com/400x400?text=Sparx+Comfort+Slide",
  },
  {
    id: 15,
    name: "Bata Power Slide",
    cost: "₹999",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Bata+Power+Slide",
  },
];

const Slides = () => {
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
        Slides Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {slides.map((item, idx) => (
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

export default Slides;
