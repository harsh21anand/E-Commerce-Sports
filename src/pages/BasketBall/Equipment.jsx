import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const basketballEquipments = [
  {
    id: 1,
    name: "Spalding NBA Basketball Hoop",
    cost: "₹15,999",
    discount: "10% OFF",
    image: "https://i.ebayimg.com/images/g/GmQAAOSwToJgEfLl/s-l640.jpg",
  },
  {
    id: 2,
    name: "Wilson Evolution Basketball",
    cost: "₹4,299",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/818bVxYc15L.jpg",
  },
  {
    id: 3,
    name: "Adidas Training Cone Set",
    cost: "₹1,299",
    discount: "8% OFF",
    image: "https://m.media-amazon.com/images/I/41aTg0KRZ8L._UF350,350_QL80_.jpg",
  },
  {
    id: 4,
    name: "Nike Agility Ladder",
    cost: "₹1,799",
    discount: "15% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYwj5cxCrCBciwDUzsg3EFfjiHn2FYRYFjw&s",
  },
  {
    id: 5,
    name: "Molten GR7 Basketball",
    cost: "₹2,499",
    discount: "11% OFF",
    image: "https://images-cdn.ubuy.co.in/65de6d6c45988f6aa66812ce-molten-gr7-rubber-basketball.jpg",
  },
  {
    id: 6,
    name: "Puma Resistance Band Set",
    cost: "₹899",
    discount: "14% OFF",
    image: "https://m.media-amazon.com/images/I/61G9Za31hoL.jpg",
  },
  {
    id: 7,
    name: "Spalding NBA Backboard Set",
    cost: "₹7,999",
    discount: "13% OFF",
    image: "https://images-cdn.ubuy.co.in/636228712ad10d4e1a7405d5-spalding-slam-jam-basketball-accessories.jpg",
  },
  {
    id: 8,
    name: "Wilson Ball Pump",
    cost: "₹499",
    discount: "20% OFF",
    image: "https://m.media-amazon.com/images/I/61NWnhToy6L._UF894,1000_QL80_.jpg",
  },
  {
    id: 9,
    name: "Under Armour Water Bottle",
    cost: "₹1,199",
    discount: "9% OFF",
    image: "https://m.media-amazon.com/images/I/61PQRMZMhWL.jpg",
  },
  {
    id: 10,
    name: "Adidas Skipping Rope",
    cost: "₹599",
    discount: "18% OFF",
    image: "https://m.media-amazon.com/images/I/51xOrTyc1kL.jpg",
  },
  {
    id: 11,
    name: "Molten Official Size Basketball",
    cost: "₹3,299",
    discount: "10% OFF",
    image: "https://images-cdn.ubuy.co.in/64af67e0efdd3c3618502364-molten-basketball-xj1000-size-5-6-7.jpg",
  },
  {
    id: 12,
    name: "Puma Sports Duffel Bag",
    cost: "₹2,299",
    discount: "15% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/duffel-bag/b/r/j/-original-imah9afhheucs4sq.jpeg?q=20&crop=false",
  },
  {
    id: 13,
    name: "Reebok Foam Roller",
    cost: "₹1,499",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/61KEnTuONaL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 14,
    name: "Nike Court Markers Set",
    cost: "₹1,099",
    discount: "17% OFF",
    image: "https://i0.wp.com/skillupsportinggoods.com/wp-content/uploads/2023/05/35.jpg?fit=795%2C530&ssl=1",
  },
  {
    id: 15,
    name: "Wilson Mini Basketball Set",
    cost: "₹1,699",
    discount: "16% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65WJNOeoQuJ5dHmZ0Lkw1-hW5huvXk2G-tQ&s",
  },
];

const BasketBallEquipments = () => {
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
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Navbar />
      <h1 className="text-3xl font-bold mb-8 text-center"><br />
        BasketBall Equipments Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {basketballEquipments.map((item, idx) => (
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
      <br /><br />
      <Footer />
    </div>
  );
};

export default BasketBallEquipments;
