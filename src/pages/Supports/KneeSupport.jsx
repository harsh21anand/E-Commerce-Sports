import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Navbar from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const kneesupports = [
  {
    id: 1,
    name: "Nike Pro Knee Sleeve",
    cost: "₹1,299",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/71tbq9xD4SL.jpg",
  },
  {
    id: 2,
    name: "Adidas Elite Knee Support",
    cost: "₹1,499",
    discount: "10% OFF",
    image: "https://m.media-amazon.com/images/I/61WhP1UizAL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Puma Flex Knee Brace",
    cost: "₹899",
    discount: "15% OFF",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/030871/08/fnd/IND/fmt/png/ULTRA-Flex-Sleeve-Football-Shin-Guards",
  },
  {
    id: 4,
    name: "Under Armour Performance Knee",
    cost: "₹1,899",
    discount: "18% OFF",
    image: "https://m.media-amazon.com/images/I/71aFpRlOUgL._UF894,1000_QL80_.jpg",
  },
  {
    id: 5,
    name: "Reebok Active Knee Guard",
    cost: "₹1,199",
    discount: "11% OFF",
    image: "https://m.media-amazon.com/images/I/81HPFQ7GcGL.jpg",
  },
  {
    id: 6,
    name: "Wildcraft Shield Knee Pad",
    cost: "₹999",
    discount: "14% OFF",
    image: "https://m.media-amazon.com/images/I/61HrJZySDjL._UF350,350_QL80_.jpg",
  },
  {
    id: 7,
    name: "Decathlon Domyos Knee Support",
    cost: "₹649",
    discount: "20% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB1fb4I9MBjPDe8_dPQlsBw9F7OlCaCfCteJKOjs4UOPr1ouW2EUTWpCp4c7pdeh8u9CA&usqp=CAU",
  },
  {
    id: 8,
    name: "Skybags Sport Knee Band",
    cost: "₹799",
    discount: "13% OFF",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/10/457495477/XK/UQ/QD/99181024/knee-support-for-men-women-gym-knee-cap-for-women-knee-pad-knee-sleeves-knee-band-500x500.jpg",
  },
  {
    id: 9,
    name: "F Gear Active Knee Wrap",
    cost: "₹1,099",
    discount: "9% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjFpsZdb-VIREBK7bsVj6ka0d0BPV2SEpBQ&s",
  },
  {
    id: 10,
    name: "Tommy Hilfiger Knee Guard",
    cost: "₹1,799",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11Wa_P-SyuZTZ0FPO1jR9FZtPXE1c7ZBFYg&s",
  },
  {
    id: 11,
    name: "HRX Compression Knee Sleeve",
    cost: "₹1,049",
    discount: "16% OFF",
    image: "https://images.meesho.com/images/products/133469746/kltbw_512.webp",
  },
  {
    id: 12,
    name: "Nivia Neo Knee Support",
    cost: "₹849",
    discount: "21% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_6udZIBDhECgL5C-y6mjp4gL-9YWf3Tung&s",
  },
  {
    id: 13,
    name: "Puma Shield Knee Pad",
    cost: "₹999",
    discount: "13% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKPEUo8EWq_F2-woch0p_FT9X6_oqNN9bsg&s",
  },
  {
    id: 14,
    name: "Sparx Knee Guard",
    cost: "₹749",
    discount: "17% OFF",
    image: "https://m.media-amazon.com/images/I/61znDsLxe8L.jpg",
  },
  {
    id: 15,
    name: "Lavie Pro Knee Support",
    cost: "₹1,399",
    discount: "19% OFF",
    image: "https://m.media-amazon.com/images/I/81n0ypsTlfL._UF350,350_QL80_.jpg",
  },
];

const KneeSupport = () => {
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
        Knee Support Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {kneesupports.map((item, idx) => (
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

export default KneeSupport;
