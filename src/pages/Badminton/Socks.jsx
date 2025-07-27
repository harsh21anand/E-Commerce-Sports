import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const badmintonSocks = [
  {
    id: 1,
    name: "Yonex Comfort Fit Socks",
    cost: "₹499",
    discount: "10% OFF",
    image: "https://m.media-amazon.com/images/I/71MD5tXY45L.jpg",
  },
  {
    id: 2,
    name: "Li-Ning Ankle Socks",
    cost: "₹399",
    discount: "12% OFF",
    image: "https://in.lining.studio/cdn/shop/files/1_New_869236e0ab.jpg?v=1749897539&width=1946",
  },
  {
    id: 3,
    name: "Victor Performance Socks",
    cost: "₹599",
    discount: "15% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHG_WJVWt25KdeTxO3aHLR1yXfWeSYDkmTaw&s",
  },
  {
    id: 4,
    name: "Adidas Badminton Socks",
    cost: "₹549",
    discount: "8% OFF",
    image: "https://m.media-amazon.com/images/I/71U+Lmy7+LL._UY1100_.jpg",
  },
  {
    id: 5,
    name: "Puma Sports Socks",
    cost: "₹449",
    discount: "18% OFF",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/685301/01/fnd/IND/fmt/png/Cushion-Sport-Quarter-Socks-Pack-of-3",
  },
  {
    id: 6,
    name: "Yonex Elite Crew Socks",
    cost: "₹699",
    discount: "14% OFF",
    image: "https://static.wixstatic.com/media/1443d0_cf02b51d2f8f4d5eb711b67383fa4fd6~mv2.png/v1/fill/w_519,h_518,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1443d0_cf02b51d2f8f4d5eb711b67383fa4fd6~mv2.png",
  },
  {
    id: 7,
    name: "Li-Ning Cushioned Socks",
    cost: "₹399",
    discount: "20% OFF",
    image: "https://m.media-amazon.com/images/I/31s22WRnW8L._UY1100_.jpg",
  },
  {
    id: 8,
    name: "Victor Low Cut Socks",
    cost: "₹499",
    discount: "17% OFF",
    image: "https://shopepicsports.com/cdn/shop/files/VictorSK410CSME.png?v=1724950097",
  },
  {
    id: 9,
    name: "Adidas Cushioned Ankle Socks",
    cost: "₹599",
    discount: "16% OFF",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/a1a88de2da7a47d097e7aefc01192481_faec/Linear_Ankle_Cushioned_Socks_3_Pairs_Black_IC1303_db03_standard.jpg",
  },
  {
    id: 10,
    name: "Puma Active Sports Socks",
    cost: "₹399",
    discount: "19% OFF",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/685301/01/fnd/IND/fmt/png/Cushion-Sport-Quarter-Socks-Pack-of-3",
  },
  {
    id: 11,
    name: "Yonex Training Socks",
    cost: "₹499",
    discount: "11% OFF",
    image: "https://m.media-amazon.com/images/I/91z2Ps2z6GL._UF894,1000_QL80_.jpg",
  },
  {
    id: 12,
    name: "Li-Ning Breathable Socks",
    cost: "₹449",
    discount: "13% OFF",
    image: "https://in.lining.studio/cdn/shop/files/1_New_869236e0ab.jpg?v=1749897539&width=1946",
  },
  {
    id: 13,
    name: "Victor Tournament Socks",
    cost: "₹549",
    discount: "15% OFF",
    image: "https://badmintonhq.co.uk/cdn/shop/files/Yon_19120-WHITE_1024x_aa6aea0e-d4bd-44b1-a6bf-adc3c1992bd6.jpg?v=1738755267&width=533",
  },
  {
    id: 14,
    name: "Adidas Court Socks",
    cost: "₹499",
    discount: "12% OFF",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/58ffc67d2267491e8184aefc00f83579_9366/Thin_and_Light_Ankle_Socks_3_Pairs_Grey_IC1283.jpg",
  },
  {
    id: 15,
    name: "Puma Pro Grip Socks",
    cost: "₹599",
    discount: "14% OFF",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/685301/01/fnd/IND/fmt/png/Cushion-Sport-Quarter-Socks-Pack-of-3",
  },
];

const BadmintonSocks = () => {
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
        Badminton Socks Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {badmintonSocks.map((item, idx) => (
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
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default BadmintonSocks;
