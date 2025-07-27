import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const basketballSocks = [
  {
    id: 1,
    name: "Nike Elite Crew Socks",
    cost: "₹699",
    discount: "10% OFF",
    image: "https://static.nbastore.in/resized/500X500/321/nike-elite-crew-basketball-socks-white-white-65cc672358e24.jpg?format=webp",
  },
  {
    id: 2,
    name: "Adidas Performance Ankle Socks",
    cost: "₹599",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/71A2XGdfZ6L.jpg",
  },
  {
    id: 3,
    name: "Puma Low Cut Sports Socks",
    cost: "₹499",
    discount: "15% OFF",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/929666/02/fnd/IND/fmt/png/Logo-Cushioned-Quarter-Socks-Pack-of-2.webp",
  },
  {
    id: 4,
    name: "Under Armour HeatGear Socks",
    cost: "₹799",
    discount: "8% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMu11Ed6mKOqPapdaz0MGnPIY46s6WVnHzg&s",
  },
  {
    id: 5,
    name: "Reebok Athletic Crew Socks",
    cost: "₹649",
    discount: "11% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqoLQcip5QHBOmHz3Ssqt6b9-3m4-lMmEtg&s",
  },
  {
    id: 6,
    name: "Wilson Basketball Socks",
    cost: "₹729",
    discount: "14% OFF",
    image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/81/3095992/1.jpg?2036",
  },
  {
    id: 7,
    name: "Spalding Pro Ankle Socks",
    cost: "₹559",
    discount: "9% OFF",
    image: "https://cdn.mybrand.shoes/593636-home_default/skechers-2ppk-basic-cushioned-sneaker-socks-sk43024-9999.jpg",
  },
  {
    id: 8,
    name: "Nike Dri-FIT Basketball Socks",
    cost: "₹899",
    discount: "7% OFF",
    image: "https://thumblr.uniid.it/product/130413/6f501e0629da.jpg?width=3840&format=webp&q=75",
  },
  {
    id: 9,
    name: "Adidas Compression Crew Socks",
    cost: "₹849",
    discount: "13% OFF",
    image: "https://resources.mandmdirect.com/Images/_default/a/d/3/ad32168_1_cloudzoom.jpg",
  },
  {
    id: 10,
    name: "Puma Training Socks 3-Pack",
    cost: "₹1,099",
    discount: "16% OFF",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/685304/02/fnd/IND/fmt/png/Crew-Socks-Pack-of-3.webp",
  },
  {
    id: 11,
    name: "Under Armour Mid-Cut Socks",
    cost: "₹759",
    discount: "10% OFF",
    image: "https://en-qa.sssports.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw3fafae18/sss/SSS2/U/A/1/3/7/SSS2_UA1379519_011_196883995325_1.jpg?sw=400&sh=400&sm=fit",
  },
  {
    id: 12,
    name: "Reebok Cushioned Sports Socks",
    cost: "₹679",
    discount: "12% OFF",
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/26978024/2024/5/3/e74883c9-3548-4fbb-9e84-ed8e0351eae91714720579336-Reebok-Unisex-Socks-9191714720578997-1.jpg",
  },
  {
    id: 13,
    name: "Wilson Quick-Dry Ankle Socks",
    cost: "₹589",
    discount: "14% OFF",
    image: "https://contents.mediadecathlon.com/p2147660/5fd158d2ff16dd32de5acee9dbcd7028/p2147660.jpg?format=auto&quality=70&f=2520x0",
  },
  {
    id: 14,
    name: "Spalding Elite Basketball Socks",
    cost: "₹949",
    discount: "9% OFF",
    image: "https://www.basketballjerseyworld.com/cdn/shop/files/e1b37053d78a89d891004ee9778c5a3c.jpg?v=1743985111",
  },
  {
    id: 15,
    name: "Nike Everyday Max Training Socks",
    cost: "₹1,199",
    discount: "15% OFF",
    image: "https://i.ebayimg.com/images/g/L28AAOSw5x1mRQCC/s-l1200.jpg",
  },
];

const BasketBallSocks = () => {
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
        Basketball Socks Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {basketballSocks.map((item, idx) => (
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

export default BasketBallSocks;
