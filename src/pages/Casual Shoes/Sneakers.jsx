import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const sneakers = [
  {
    id: 1,
    name: "Nike Air Force 1",
    cost: "₹7,999",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Nike+Air+Force+1",
  },
  {
    id: 2,
    name: "Adidas Stan Smith",
    cost: "₹6,499",
    discount: "12% OFF",
    image: "https://via.placeholder.com/400x400?text=Adidas+Stan+Smith",
  },
  {
    id: 3,
    name: "Puma RS-X",
    cost: "₹5,299",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+RS-X",
  },
  {
    id: 4,
    name: "Converse Chuck Taylor",
    cost: "₹3,999",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Converse+Chuck+Taylor",
  },
  {
    id: 5,
    name: "Vans Old Skool",
    cost: "₹4,499",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Vans+Old+Skool",
  },
  {
    id: 6,
    name: "New Balance 574",
    cost: "₹5,799",
    discount: "17% OFF",
    image: "https://via.placeholder.com/400x400?text=NB+574",
  },
  {
    id: 7,
    name: "Fila Disruptor II",
    cost: "₹3,699",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=Fila+Disruptor+II",
  },
  {
    id: 8,
    name: "Reebok Classic Leather",
    cost: "₹4,199",
    discount: "16% OFF",
    image: "https://via.placeholder.com/400x400?text=Reebok+Classic+Leather",
  },
  {
    id: 9,
    name: "Under Armour HOVR Phantom",
    cost: "₹6,899",
    discount: "22% OFF",
    image: "https://via.placeholder.com/400x400?text=UA+HOVR+Phantom",
  },
  {
    id: 10,
    name: "ASICS Gel-Lyte III",
    cost: "₹7,299",
    discount: "13% OFF",
    image: "https://via.placeholder.com/400x400?text=ASICS+Gel-Lyte+III",
  },
  {
    id: 11,
    name: "Skechers D'Lites",
    cost: "₹5,099",
    discount: "21% OFF",
    image: "https://via.placeholder.com/400x400?text=Skechers+D'Lites",
  },
  {
    id: 12,
    name: "Hummel Slimmer Stadil",
    cost: "₹3,799",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=Hummel+Slimmer+Stadil",
  },
  {
    id: 13,
    name: "K-Swiss Classic VN",
    cost: "₹4,599",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=K-Swiss+Classic+VN",
  },
  {
    id: 14,
    name: "Le Coq Sportif Courtset",
    cost: "₹3,299",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=Le+Coq+Sportif+Courtset",
  },
  {
    id: 15,
    name: "Diadora Game L",
    cost: "₹4,899",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Diadora+Game+L",
  },
];

const Sneakers = () => {
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
        Sneakers Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sneakers.map((item, idx) => (
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

export default Sneakers;
