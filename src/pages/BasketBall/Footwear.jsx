import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const footwear = [
  {
    id: 101,
    name: "Nike Air Zoom BB NXT",
    cost: "₹12,999",
    discount: "10% OFF",
    image: "https://m.media-amazon.com/images/I/61qm7pYOgLL.jpg",
  },
  {
    id: 102,
    name: "Adidas Harden Vol. 5",
    cost: "₹10,499",
    discount: "12% OFF",
    image: "https://www.cleatshead.com/wp-content/uploads/2022/03/2022-adidas-Harden-Vol.5-University-Red-Black-Grey-For-Sale-2-600x400-1.jpeg",
  },
  {
    id: 103,
    name: "Puma Clyde All-Pro",
    cost: "₹8,999",
    discount: "15% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/w/m/n/-original-imahfqz3xd5xq9vv.jpeg?q=90&crop=false",
  },
  {
    id: 104,
    name: "Under Armour Curry Flow 9",
    cost: "₹11,299",
    discount: "8% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-eYW23LO2oa6RkOqE3H7BctBYUMTNfV-ZA&s",
  },
  {
    id: 105,
    name: "Reebok Question Mid",
    cost: "₹9,599",
    discount: "13% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRlBJ_VbvTRBRndFXceOYuTYmnJavUspjrA&s",
  },
  {
    id: 106,
    name: "Converse All Star BB Evo",
    cost: "₹7,499",
    discount: "11% OFF",
    image: "https://i.pinimg.com/736x/49/45/32/4945320b1cc5e4b5442a202985265573.jpg",
  },
  {
    id: 107,///<<<<<----->>>>>>>//
    name: "Li-Ning Wade All City 9",
    cost: "₹8,199",
    discount: "14% OFF",
    image: "https://www.kdclick.com/s/637763a5ea78e200824eb640/6589827c6da2e08a8f0a6ea7/33-640x640.jpg",
  },
  {
    id: 108,
    name: "Peak Streetball Master",
    cost: "₹5,899",
    discount: "20% OFF",
    image: "https://images-na.ssl-images-amazon.com/images/I/81LDde0vfeL._UL500_.jpg",
  },
  {
    id: 109,
    name: "ANTA KT6",
    cost: "₹7,999",
    discount: "9% OFF",
    image: "https://i.ebayimg.com/images/g/2bkAAOSww6FhQ8nz/s-l1600.jpg",
  },
  {
    id: 110,
    name: "New Balance OMN1S",
    cost: "₹10,199",
    discount: "16% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Cvzrl26MZTCnrQfq-IVGgkAfgyOPjp-m1hEn8339HerdkKg2sW_-rt2F6Or1qlDA2zM&usqp=CAU",
  },
  {
    id: 111,
    name: "Jordan Zion 1",
    cost: "₹9,299",
    discount: "12% OFF",
    image: "https://di2ponv0v5otw.cloudfront.net/posts/2023/05/22/646bb4e852eee1e102fcade4/m_646bb4e852eee1e102fcade5.jpg",
  },
  {
    id: 112,
    name: "Nike KD14",
    cost: "₹11,499",
    discount: "7% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Vepm4l6ZQauUVUo9I32tftVn9TqLebptew&s",
  },
  {
    id: 113,
    name: "Adidas Dame 7",
    cost: "₹8,299",
    discount: "15% OFF",
    image: "https://rukminim2.flixcart.com/image/346/410/xif0q/shoe/9/z/d/-original-imah8gdeh8xsnhn6.jpeg?q=90",
  },
  {
    id: 114,
    name: "Puma Fusion Nitro",
    cost: "₹9,599",
    discount: "10% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwFFuuYpIvCJVGcIt9o-m0HB7667RJMMZbQ&s",
  },
  {
    id: 115,
    name: "Under Armour Embiid One",
    cost: "₹8,799",
    discount: "13% OFF",
    image: "https://m.media-amazon.com/images/I/41y9-1TuOJL._SY300_QL15_.jpg",
  },
];

const BasketBallFootwear = () => {
  const navigate = useNavigate();

  const handleAddToCart = (shoe) => {
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = existingCart.findIndex(cartItem => cartItem.id === shoe.id);

    if (existingItemIndex >= 0) {
      existingCart[existingItemIndex].qty = (existingCart[existingItemIndex].qty || 1) + 1;
    } else {
      existingCart.push({ ...shoe, qty: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(existingCart));
    navigate('/cart');
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Navbar />
      <h1 className="text-3xl font-bold mb-8 text-center"><br />Basketball Footwear Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {footwear.map((item, idx) => (
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

export default BasketBallFootwear;
