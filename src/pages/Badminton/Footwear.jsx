import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const badmintonFootwear = [
  {
    id: 1,
    name: "Yonex Power Cushion 65Z",
    cost: "₹5,999",
    discount: "10% OFF",
    image: "https://us.yonex.com/cdn/shop/files/SHB65Z4M_WHITE_1.jpg?v=1740704583",
  },
  {
    id: 2,
    name: "Li-Ning Saga Lite",
    cost: "₹4,499",
    discount: "15% OFF",
    image: "https://in.lining.studio/cdn/shop/files/template_04_32_3_6ee007a52e.jpg?v=1749894059&width=1946",
  },
  {
    id: 3,
    name: "Victor A920",
    cost: "₹6,299",
    discount: "12% OFF",
    image: "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-victor-as-3w-am-xanh-trang-1.webp",
  },
  {
    id: 4,
    name: "Adidas Stabil Next Gen",
    cost: "₹7,199",
    discount: "18% OFF",
    image: "https://thumblr.uniid.it/product/325409/05ab03cb5428.jpg?width=3840&format=webp&q=75",
  },
  {
    id: 5,
    name: "Puma Hybrid Court",
    cost: "₹3,999",
    discount: "20% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/i/3/f/-original-imahfhjsg7eybgnq.jpeg?q=90&crop=false",
  },
  {
    id: 6,
    name: "Yonex Eclipsion X",
    cost: "₹8,199",
    discount: "14% OFF",
    image: "https://m.media-amazon.com/images/I/71VJApdDcsL._UY900_.jpg",
  },
  {
    id: 7,
    name: "Li-Ning Ultra Fly",
    cost: "₹5,499",
    discount: "17% OFF",
    image: "https://images-static.nykaa.com/media/catalog/product/c/6/c63f3e0AYTR060-4_4.jpg?tr=w-500",
  },
  {
    id: 8,
    name: "Victor SH-A920",
    cost: "₹6,799",
    discount: "11% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/j2ur3ww0-2/shoe/t/r/q/sh-a920-f-11-5-victor-blue-original-imaeuft442nfa5tj.jpeg?q=90&crop=false",
  },
  {
    id: 9,
    name: "Babolat Shadow Tour",
    cost: "₹4,999",
    discount: "13% OFF",
    image: "https://dms.mydukaan.io/original/jpeg/upload_file_service/a13715fb-e1ba-48f1-a0ae-b412ebf83282/shadow-tour-men-black-blue-5.webp",
  },
  {
    id: 10,
    name: "Puma Rapid Court",
    cost: "₹3,499",
    discount: "16% OFF",
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/19104562/2022/11/6/b1109045-41c4-476a-8761-c71aff4617fc1667717640364PumaUnisexNavyBlueSolidRegularWiredRapidCasualSneakers1.jpg",
  },
  {
    id: 11,
    name: "Yonex Power Cushion Infinity",
    cost: "₹9,499",
    discount: "19% OFF",
    image: "https://m.media-amazon.com/images/I/91C96kA01BL._UY1000_.jpg",
  },
  {
    id: 12,
    name: "Li-Ning Blaze 300",
    cost: "₹3,299",
    discount: "22% OFF",
    image: "https://m.media-amazon.com/images/I/81egpeifT-L._UY1000_.jpg",
  },
  {
    id: 13,
    name: "Victor A830",
    cost: "₹7,499",
    discount: "15% OFF",
    image: "https://m.media-amazon.com/images/I/61r057u5E-L._UY1000_.jpg",
  },
  {
    id: 14,
    name: "Babolat Movea",
    cost: "₹5,899",
    discount: "10% OFF",
    image: "https://www.zonadepadel.com/16002-large_default/babolat-movea-men-french-blue-vibrant-yellow-2023-padel-shoes.jpg",
  },
  {
    id: 15,
    name: "Puma Flex Lite",
    cost: "₹2,799",
    discount: "25% OFF",
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/30034469/2024/9/10/d28451fc-afc2-426f-bff6-1fef47970d241725966303975-FlexFocus-Lite-Unisex-Running-Shoes-641725966303712-1.jpg",
  },
];

const BadmintonFootwear = () => {
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
        Badminton Footwear Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {badmintonFootwear.map((item, idx) => (
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

export default BadmintonFootwear;
