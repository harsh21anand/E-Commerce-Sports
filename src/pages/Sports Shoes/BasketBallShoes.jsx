import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Footer from "../../components/footer/Footer";

const basketballShoes = [
  {
    id: 1,
    name: "Nike Air Zoom G.T. Cut",
    cost: "₹11,499",
    discount: "15% OFF",
    image: "https://via.placeholder.com/400x400?text=Nike+Air+Zoom+GT+Cut",
  },
  {
    id: 2,
    name: "Adidas Harden Vol. 5",
    cost: "₹10,199",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=Adidas+Harden+Vol+5",
  },
  {
    id: 3,
    name: "Puma Clyde All-Pro",
    cost: "₹8,999",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Puma+Clyde+All+Pro",
  },
  {
    id: 4,
    name: "Under Armour Curry Flow 8",
    cost: "₹12,299",
    discount: "22% OFF",
    image: "https://via.placeholder.com/400x400?text=UA+Curry+Flow+8",
  },
  {
    id: 5,
    name: "New Balance OMN1S",
    cost: "₹9,899",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=NB+OMN1S",
  },
  {
    id: 6,
    name: "Anta KT6",
    cost: "₹7,499",
    discount: "25% OFF",
    image: "https://via.placeholder.com/400x400?text=Anta+KT6",
  },
  {
    id: 7,
    name: "Li-Ning Way of Wade 9",
    cost: "₹13,599",
    discount: "16% OFF",
    image: "https://via.placeholder.com/400x400?text=Li-Ning+Way+of+Wade+9",
  },
  {
    id: 8,
    name: "Peak TP9-IV",
    cost: "₹6,799",
    discount: "21% OFF",
    image: "https://via.placeholder.com/400x400?text=Peak+TP9-IV",
  },
  {
    id: 9,
    name: "Reebok Shaq Attaq",
    cost: "₹8,499",
    discount: "17% OFF",
    image: "https://via.placeholder.com/400x400?text=Reebok+Shaq+Attaq",
  },
  {
    id: 10,
    name: "Fila Grant Hill 2",
    cost: "₹5,999",
    discount: "20% OFF",
    image: "https://via.placeholder.com/400x400?text=Fila+Grant+Hill+2",
  },
  {
    id: 11,
    name: "Converse All Star BB Evo",
    cost: "₹6,499",
    discount: "14% OFF",
    image: "https://via.placeholder.com/400x400?text=Converse+All+Star+BB+Evo",
  },
  {
    id: 12,
    name: "AND1 Attack 2.0",
    cost: "₹4,799",
    discount: "23% OFF",
    image: "https://via.placeholder.com/400x400?text=AND1+Attack+2.0",
  },
  {
    id: 13,
    name: "Spalding Highlight",
    cost: "₹3,999",
    discount: "19% OFF",
    image: "https://via.placeholder.com/400x400?text=Spalding+Highlight",
  },
  {
    id: 14,
    name: "Peak Monster",
    cost: "₹5,899",
    discount: "18% OFF",
    image: "https://via.placeholder.com/400x400?text=Peak+Monster",
  },
  {
    id: 15,
    name: "361° Big3 Future",
    cost: "₹7,299",
    discount: "24% OFF",
    image: "https://via.placeholder.com/400x400?text=361+Big3+Future",
  },
];

const BasketballShoes = () => {
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
        Basketball Shoes Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {basketballShoes.map((item, idx) => (
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

export default BasketballShoes;
