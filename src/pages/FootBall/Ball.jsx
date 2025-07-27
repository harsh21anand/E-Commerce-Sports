import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";


const balls = [
  {
    id: 1,
    name: "Football",
    image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D",
    cost: "₹999",
    discount: "20% OFF"
  },
  {
    id: 2,
    name: "Basketball",
    image: "https://t4.ftcdn.net/jpg/15/18/97/73/240_F_1518977356_2edJge6OvNI34UVk55Q2W4JSJ4VZiqNd.jpg",
    cost: "₹799",
    discount: "10% OFF"
  },
  {
    id: 3,
    name: "Cricket Ball",
    image: "https://media.istockphoto.com/id/493759086/photo/close-up-of-a-cricket-ball.jpg?s=612x612&w=0&k=20&c=2Ob1x6US7rLtY0hyNla_Ctjpd22DJx1b9TJIxvOKeyA=",
    cost: "₹299",
    discount: "15% OFF"
  },
  {
    id: 4,
    name: "Tennis Ball",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjXDUBKkds8EYMITSWwpfgdmkEdYNEJkl5Q&s",
    cost: "₹199",
    discount: "5% OFF"
  },
  {
    id: 5,
    name: "Volleyball",
    image: "https://media.istockphoto.com/id/618341990/photo/volleyball-ball-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ihlEG3bVjUzs4op9HJZFv8hpKGed_rekhj6PFwGT6rw=",
    cost: "₹699",
    discount: "25% OFF"
  },
  {
    id: 6,
    name: "Rugby Ball",
    image: "https://5.imimg.com/data5/DN/TP/LC/SELLER-61552528/csi-brown-rugby-ball.jpg",
    cost: "₹899",
    discount: "12% OFF"
  },
  {
    id: 7,
    name: "Handball",
    image: "https://m.media-amazon.com/images/I/81NvRgWEgCL.jpg",
    cost: "₹399",
    discount: "8% OFF"
  },
  {
    id: 8,
    name: "Baseball",
    image: "https://t4.ftcdn.net/jpg/00/54/49/95/360_F_54499577_XtMzy2S7xoVgAJNh2GqafxSgbMMPBhaY.jpg",
    cost: "₹249",
    discount: "18% OFF"
  },
  {
    id: 9,
    name: "Table Tennis Ball",
    image: "https://m.media-amazon.com/images/I/61FXrldnM+L.jpg",
    cost: "₹99",
    discount: "3% OFF"
  },
  {
    id: 10,
    name: "Golf Ball",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFQbIbxNhPJk5h1zskKoh5czd7b2Qwsxb_5J26uGSfyn67DbcaZ-E4BsseuWw63nlG_w&usqp=CAU",
    cost: "₹149",
    discount: "7% OFF"
  },
  {
    id: 11,
    name: "Hockey Ball",
    image: "https://t3.ftcdn.net/jpg/14/75/33/50/360_F_1475335032_T9s04anB6BAs1ZurHsWHHTquEyxUNu9I.jpg",
    cost: "₹179",
    discount: "6% OFF"
  },
  {
    id: 12,
    name: "Squash Ball",
    image: "https://m.media-amazon.com/images/I/81dC-w0LsBL._AC_SX679_.jpg",
    cost: "₹129",
    discount: "9% OFF"
  }
];



const Ball = () => {
  const navigate = useNavigate();

  const handleSelect = (ball) => {
    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if item already exists in cart
    const existingItemIndex = existingCart.findIndex(cartItem => cartItem.id === ball.id);
    
    if (existingItemIndex >= 0) {
      // Item exists, increase quantity
      existingCart[existingItemIndex].qty = (existingCart[existingItemIndex].qty || 1) + 1;
    } else {
      // Add new item with quantity 1
      existingCart.push({ ...ball, qty: 1 });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCart));
    
    // Navigate to cart page
    navigate('/cart');
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      
      <Header />
      <Navbar />
      
      <h1 className="text-3xl font-bold mb-8 text-center"><br />All Game Balls</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {balls.map((ball, idx) => (
          <ShopCard
            key={idx}
            image={ball.image}
            name={ball.name}
            cost={ball.cost}
            discount={ball.discount}
            onAddToCart={() => handleSelect(ball)}
          />
        ))}
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Ball;