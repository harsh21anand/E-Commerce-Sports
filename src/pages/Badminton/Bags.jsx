import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const badmintonBags = [
  {
    id: 1,
    name: "Yonex Pro Badminton Bag",
    cost: "₹4,299",
    discount: "12% OFF",
    image: "https://images-cdn.ubuy.co.in/63600331431004686974b7b6-yonex-92231w-navysaxe-pro-tournament.jpg",
  },
  {
    id: 2,
    name: "Li-Ning Elite Kit Bag",
    cost: "₹3,899",
    discount: "15% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfGTL_G8uk7ad-8fX_nA_n0HRnRt7Kv0-orQ&s",
  },
  {
    id: 3,
    name: "Victor Supreme Racket Bag",
    cost: "₹5,499",
    discount: "10% OFF",
    image: "https://erp-image.sgliteasset.com/_next/image?url=https%3A%2F%2Fcdn1.sgliteasset.com%2Fvictorma%2Fimages%2Fproduct%2Fproduct-4593129%2FUcjULByF67289143ba163_1730711875.jpg&w=3840&q=100",
  },
  {
    id: 4,
    name: "Yonex Tournament Series",
    cost: "₹6,199",
    discount: "18% OFF",
    image: "https://cdn-sunriseclick.s3.amazonaws.com/images/gallery/original/202401/12408_GO_1704777191360.jpg",
  },
  {
    id: 5,
    name: "Li-Ning Aeronaut Bag",
    cost: "₹4,799",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGZqWMyIAylK7yBLX3uYBhbesr2gXQyQ0VA&s",
  },
  {
    id: 6,
    name: "Victor Pro Court Bag",
    cost: "₹3,699",
    discount: "20% OFF",
    image: "https://m.media-amazon.com/images/I/31duSNxphJL._UF894,1000_QL80_.jpg",
  },
  {
    id: 7,
    name: "Adidas Badminton Kit Bag",
    cost: "₹2,999",
    discount: "16% OFF",
    image: "https://img1.wsimg.com/isteam/ip/c3ab9ba2-7ca2-4980-930a-0469b4e6a13a/ols/badminton%20kit%20bag%20adidas.jpg/:/rs=w:1200,h:1200",
  },
  {
    id: 8,
    name: "Puma Shuttle Backpack",
    cost: "₹1,999",
    discount: "25% OFF",
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/25561602/2023/11/3/9cf4fb99-50b7-4030-8d2b-607c032ebeca1699006599080-PUMA-Classic-PU-Backpack-IND-New-Navy-1161699006598678-1.jpg",
  },
  {
    id: 9,
    name: "Yonex Club Racket Bag",
    cost: "₹3,299",
    discount: "13% OFF",
    image: "https://scssports.in/cdn/shop/files/yx23426gyrd_535x.jpg?v=1736330214",
  },
  {
    id: 10,
    name: "Li-Ning Premium Carry Bag",
    cost: "₹4,099",
    discount: "17% OFF",
    image: "https://in.lining.studio/cdn/shop/files/Template_03_9f7ff08dc7.jpg?v=1749900010&width=1445",
  },
  {
    id: 11,
    name: "Victor Tour Bag XL",
    cost: "₹5,899",
    discount: "11% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZZMLOOwj4cGt4h5VVOoqlFTQyRl7eNZTsN9-37np8K5690QfZtfcy-p6al3qv8gKJ4c&usqp=CAU",
  },
  {
    id: 12,
    name: "Yonex Team Backpack",
    cost: "₹2,499",
    discount: "22% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkbY9-iklkQbbZaMG1YWViXACrSu37ZXjm0w&s",
  },
  {
    id: 13,
    name: "Li-Ning Shuttle Bag Pro",
    cost: "₹3,799",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIdEoSTwI0z1f1NniNxh11wQoOdLminVvO9Q&s",
  },
  {
    id: 14,
    name: "Victor Challenger Bag",
    cost: "₹4,499",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-rRkH-MG8Fy3BuGOBRSQf5HfYBL3T-0l3g&s",
  },
  {
    id: 15,
    name: "Adidas Racket Backpack",
    cost: "₹2,299",
    discount: "23% OFF",
    image: "https://m.media-amazon.com/images/I/61oHA6V0++L._UY1100_.jpg",
  },
];

const BadmintonBags = () => {
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
        Badminton Bags Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {badmintonBags.map((item, idx) => (
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

export default BadmintonBags;
