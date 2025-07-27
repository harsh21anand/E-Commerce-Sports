import React from "react";
import ShopCard from "../../components/card/ShopCard";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const teamwearItems = [
  {
    id: 1,
    name: "Striker Football Jersey",
    cost: "Rs 799",
    discount: "10% OFF", 
    image: "https://thumblr.uniid.it/product/100296/955109b76413.jpg",
  },
  {
    id: 2,
    name: "Victory Football Jersey",
    cost: "Rs 899",
    discount: "10% OFF", 
    image: "https://teamexsportswear.com/cdn/shop/files/VictoryRedBlack.jpg?v=1717010705&width=713",
  },
  {
    id: 3,
    name: "Attack Football Jersey",
    cost: "Rs 749",
    discount: "10% OFF", 
    image: "https://gearteamapparel.com/cdn/shop/files/Custom-Fitted-Football-Jersey-Front-Varsity_720x.png?v=1683652081",
  },
  {
    id: 4, 
    name: "Champion Football Jersey",
    cost: "Rs 999",
    discount: "10% OFF", 
    image: "https://5.imimg.com/data5/SELLER/Default/2023/1/XH/TO/AC/84628409/football-club-jerseys-1000x1000.jpeg",
  },
  {
    id: 5,
    name: "Pro League Football Jersey",
    cost: "Rs 849",
    discount: "10% OFF", 
    image: "https://i.pinimg.com/1200x/2f/30/73/2f3073d4e4f97727d2a6d598939c030c.jpg",
  },
  {
    id: 6,
    name: "Goalkeeper Jersey",
    cost: "Rs 899",
    discount: "10% OFF", 
    image: "https://m.media-amazon.com/images/I/715N2Y-aPqL._SY741_.jpg",
  },
  {
    id: 7,
    name: "Swift Football Jersey",
    cost: "Rs 799",
    discount: "10% OFF", 
    image: "https://b3602360.smushcdn.com/3602360/wp-content/uploads/2024/03/Swift-Jersey_FR-7.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 8,
    name: "Rapid Football Jersey",
    cost: "Rs 949",
    discount: "10% OFF", 
    image: "https://www.footballkitnews.com/wp-content/uploads/2022/06/New-Rapid-Vienna-Jersey-2022-2023.jpg",
  },
  {
    id: 9,
    name: "Defender Football Jersey",
    cost: "Rs 699",
    discount: "10% OFF", 
    image: "https://www.zoneathletics.com/wp-content/uploads/2023/04/ULS-Jesey-Front.jpg",
  },
  {
    id: 10,
    name: "Thunder Football Jersey",
    cost: "Rs 849",
    discount: "10% OFF", 
    image: "https://customjersey.in/wp-content/uploads/2024/05/CJM-11-Front.jpg",
  },
  {
    id: 11,
    name: "Striker Pro Jersey",
    cost: "Rs 999",
    discount: "10% OFF", 
    image: "https://aidanglobal.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-09-28-at-2.30.35-PM-768x768.jpeg",
  },
  {
    id: 12,
    name: "Falcon Football Jersey",
    cost: "Rs 899",
    discount: "10% OFF", 
    image: "https://images.footballfanatics.com/atlanta-falcons/atlanta-falcons-nike-home-game-jersey-black-custom-mens_ss4_p-12001928+pv-1+u-54e7b8j7nnpzv88ybsfp+v-686bbf52fa904a60a6e3e60b29afb215.jpg?_hv=2&w=900",
  },
  {
    id: 13,
    name: "Predator Football Jersey",
    cost: "Rs 749",
    discount: "10% OFF", 
    image: "https://assets.gy.digital/H4Gl-5gv-lKrJRc5K6SD2IA7T6o=/fit-in/1800x1800/filters:fill(white):format(webp)/s3.gy.digital%2Ffamousports%2Fuploads%2Fasset%2Fdata%2F305569%2FIC9998_1.png",
  },
  {
    id: 14,
    name: "Supreme Football Jersey",
    cost: "Rs 899",
    discount: "10% OFF", 
    image: "https://images.stockx.com/images/Supreme-Spiderweb-Football-Jersey-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1744142786",
  },
  {
    id: 15,
    name: "Classic Football Jersey",
    cost: "Rs 799",
    discount: "10% OFF", 
    image: "https://i0.wp.com/www.copycatz.in/wp-content/uploads/2023/04/real-madrid-third-2012-13-retro-jersey.jpeg?resize=1024%2C1024&ssl=1",
  },
];

const Teamwear = () => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if item already exists in cart
    const existingItemIndex = existingCart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex >= 0) {
      // Item exists, increase quantity
      existingCart[existingItemIndex].qty = (existingCart[existingItemIndex].qty || 1) + 1;
    } else {
      // Add new item with quantity 1
      existingCart.push({ ...item, qty: 1 });
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
      
      <h1 className="text-3xl font-bold mb-8 text-center"><br />Football Teamwear</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamwearItems.map((item) => (
          <ShopCard
            key={item.id}
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


export default Teamwear;
