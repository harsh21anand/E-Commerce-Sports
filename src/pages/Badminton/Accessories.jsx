import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const badmintonAccessories = [
  {
    id: 1,
    name: "Yonex Grip Tape",
    cost: "₹299",
    discount: "10% OFF",
    image: "https://m.media-amazon.com/images/I/61YvE0hnLSL.jpg",
  },
  {
    id: 2,
    name: "Li-Ning Wristband",
    cost: "₹199",
    discount: "15% OFF",
    image: "https://www.asiansports.in/cdn/shop/files/02_1.webp?v=1721814704",
  },
  {
    id: 3,
    name: "Victor Headband",
    cost: "₹249",
    discount: "12% OFF",
    image: "https://cdn1.sgliteasset.com/victorma/images/product/product-4390914/VAs0nXiv672d775a25475_1731032922.png",
  },
  {
    id: 4,
    name: "Yonex Water Bottle",
    cost: "₹499",
    discount: "8% OFF",
    image: "https://badmintonhq.co.uk/cdn/shop/products/8609239a-b656-4b92-b69d-6c6746260f66_grande.jpg?v=1731962301",
  },
  {
    id: 5,
    name: "Li-Ning Kit Bag",
    cost: "₹1,299",
    discount: "18% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujwF0yyBXWqitb3fRgsuKkseeXwmKXnVRDQ&s",
  },
  {
    id: 6,
    name: "Victor Shoe Bag",
    cost: "₹399",
    discount: "20% OFF",
    image: "https://m.media-amazon.com/images/I/31duSNxphJL._UF894,1000_QL80_.jpg",
  },
  {
    id: 7,
    name: "Adidas Sweatband Set",
    cost: "₹349",
    discount: "17% OFF",
    image: "https://m.media-amazon.com/images/I/81jA5H+pHLL.jpg",
  },
  {
    id: 8,
    name: "Puma Bottle Holder",
    cost: "₹249",
    discount: "13% OFF",
    image: "https://m.media-amazon.com/images/I/51NUlzQXF6L._UF894,1000_QL80_.jpg",
  },
  {
    id: 9,
    name: "Yonex Keychain",
    cost: "₹149",
    discount: "22% OFF",
    image: "https://m.media-amazon.com/images/I/51Q6hEt4eqL._UF894,1000_QL80_.jpg",
  },
  {
    id: 10,
    name: "Li-Ning Bag Tag",
    cost: "₹199",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdjSizJnZkVi50ow78HDEtUt302Kw7pH6Kw&s",
  },
  {
    id: 11,
    name: "Victor Grip Powder",
    cost: "₹299",
    discount: "14% OFF",
    image: "https://m.media-amazon.com/images/I/31RsGcZAddL.jpg",
  },
  {
    id: 12,
    name: "Yonex Racket Cover",
    cost: "₹599",
    discount: "11% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/kdrpksw0/cover/n/g/u/full-cover-for-carbonex-free-size-full-cover-5-yonex-original-imafuhdqrhtm3hdt.jpeg?q=90&crop=false",
  },
  {
    id: 13,
    name: "Li-Ning String Cutter",
    cost: "₹449",
    discount: "16% OFF",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/1/TB/PL/YW/47147190/li-ning-stringing-machine-500x500.jpg",
  },
  {
    id: 14,
    name: "Victor Badminton Net",
    cost: "₹1,499",
    discount: "21% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyz27HkB75j7Ch9vI6IR5XLL3RsIZsDhmIwA&s",
  },
  {
    id: 15,
    name: "Puma Towel",
    cost: "₹599",
    discount: "15% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/bath-towel/f/x/7/1069653-puma-premium-original-imaedknwh8gdggwy.jpeg?q=90&crop=false",
  },
];

const BadmintonAccessories = () => {
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
        Badminton Accessories Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {badmintonAccessories.map((item, idx) => (
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

export default BadmintonAccessories;
