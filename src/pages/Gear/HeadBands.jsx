import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const headbands = [
  {
    id: 1,
    name: "Nike Swoosh Headband",
    cost: "₹299",
    discount: "10% OFF",
    image: "https://sportsstation.in/cdn/shop/files/121889627-1.jpg?v=1751543771",
  },
  {
    id: 2,
    name: "Adidas Performance Headband",
    cost: "₹349",
    discount: "15% OFF",
    image: "https://m.media-amazon.com/images/I/A1vohU-cEqL.jpg",
  },
  {
    id: 3,
    name: "Puma Sports Headband",
    cost: "₹279",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/41KEoujYOEL._UF894,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Under Armour HeatGear Headband",
    cost: "₹399",
    discount: "18% OFF",
    image: "https://www.underarmour.in/media/catalog/product/cache/fe00ef9a43201311b84f219ced64b808/1/3/1389937-001-OSFM-120250430044120471.jpg",
  },
  {
    id: 5,
    name: "Reebok Training Headband",
    cost: "₹329",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUdcNYJ3-vIrv6536z5wN251Ftjgdyzbgjg&s",
  },
  {
    id: 6,
    name: "HRX Flex Fit Headband",
    cost: "₹249",
    discount: "20% OFF",
    image: "https://m.media-amazon.com/images/I/41NRAr3x8eL._AC_.jpg",
  },
  {
    id: 7,
    name: "Wildcraft Pro Active Headband",
    cost: "₹199",
    discount: "13% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/kmmcrrk0/bandana/x/d/i/216-free-size-42046-wc-camo-wildcraft-720-original-imagfhdutvzsmfvz.jpeg?q=90&crop=false",
  },
  {
    id: 8,
    name: "Decathlon Dry Fit Headband",
    cost: "₹179",
    discount: "16% OFF",
    image: "https://contents.mediadecathlon.com/p1974102/eb14f02d8e5805b7e95ed7ef88fde732/p1974102.jpg?format=auto&quality=70&f=2520x0",
  },
  {
    id: 9,
    name: "Nivia Stretch Fit Headband",
    cost: "₹269",
    discount: "11% OFF",
    image: "https://m.media-amazon.com/images/I/31yhmH-TqFL._QL92_SH45_SS200_.jpg",
  },
  {
    id: 10,
    name: "F Gear Sports Band",
    cost: "₹319",
    discount: "19% OFF",
    image: "https://i.pinimg.com/736x/87/18/d7/8718d78aa1de242a47bfc7704eb73da9.jpg",
  },
  {
    id: 11,
    name: "Tommy Hilfiger Logo Headband",
    cost: "₹549",
    discount: "17% OFF",
    image: "https://pvh-brands.imgix.net/catalog/product/media/AW0AW084830GY-FL-AS-B1.jpg?w=713&h=950&crop=edges&fit=crop&auto=compress&auto=format",
  },
  {
    id: 12,
    name: "American Tourister Classic Headband",
    cost: "₹249",
    discount: "21% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHd03HUiLeb1vAEV4UE_7XmKi7G6HeQC5fIg&s",
  },
  {
    id: 13,
    name: "Asics Pro Stretch Headband",
    cost: "₹369",
    discount: "22% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPmNmWS3W-nu1MnmAix5k2LT920PKh_s38LOzDygBBK23uq_8BzFQgVb1JDoAky61qsw&usqp=CAU",
  },
  {
    id: 14,
    name: "Sparx Quick Dry Headband",
    cost: "₹229",
    discount: "18% OFF",
    image: "https://m.media-amazon.com/images/I/61rnW+NQpiL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 15,
    name: "Decathlon Elastic Fit Band",
    cost: "₹199",
    discount: "9% OFF",
    image: "https://contents.mediadecathlon.com/p1974108/ddd211f7ef597b0df7f4f467d859d27a/p1974108.jpg?format=auto&quality=70&f=2520x0",
  },
];

const HeadBands = () => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex = existingCart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex >= 0) {
      existingCart[itemIndex].qty += 1;
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
     
      <h1 className="text-3xl font-bold mb-8 text-center"><br />Gear - Headbands Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {headbands.map((item, idx) => (
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

export default HeadBands;
