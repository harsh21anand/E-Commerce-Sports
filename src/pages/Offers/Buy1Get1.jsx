import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav"; 
import Footer from "../../components/footer/Footer";

const bogoItems = [
    {
      id: 1,
      name: "Sports T-Shirt (Buy 1 Get 1)",
      price: "₹999",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmU2q9_U9Wc56Zn9_dR32p3WmmyOVad0V3SA&s",
    },
    {
      id: 2,
      name: "Running Shorts (Buy 1 Get 1)",
      price: "₹799",
      image: "https://m.media-amazon.com/images/I/71n-TJswlRL._UY1000_.jpg",
    },
    {
      id: 3,
      name: "Gym Gloves (Buy 1 Get 1)",
      price: "₹499",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAf5FNvxnpvi-_CPVBC06JhS0jad5byHAIUg&s",
    },
    {
      id: 4,
      name: "Yoga Mat (Buy 1 Get 1)",
      price: "₹1,299",
      image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/05/2240520-11-Best-Yoga-Mats-to-Support-Your-Practice-in-2022-1296x728-Header-f0dec1.jpg?w=1155&h=1528",
    },
    {
      id: 5,
      name: "Sports Cap (Buy 1 Get 1)",
      price: "₹399",
      image: "https://images.meesho.com/images/products/248621097/iijqc_512.jpg",
    },
    {
      id: 6,
      name: "Water Bottle (Buy 1 Get 1)",
      price: "₹299",
      image: "https://images.meesho.com/images/products/422644846/ulstw_512.jpg",
    },
    {
      id: 7,
      name: "Sweatband Set (Buy 1 Get 1)",
      price: "₹199",
      image: "https://m.media-amazon.com/images/I/71cJfNkzGJL._UF350,350_QL50_.jpg",
    },
    {
      id: 8,
      name: "Compression Socks (Buy 1 Get 1)",
      price: "₹599",
      image: "https://images.meesho.com/images/products/485506465/evni1_512.jpg",
    },
    {
      id: 9,
      name: "Sports Duffel Bag (Buy 1 Get 1)",
      price: "₹1,499",
      image: "https://mikebags.com/cdn/shop/files/8_300x.jpg?v=1737183121",
    },
    {
      id: 10,
      name: "Athletic Sunglasses (Buy 1 Get 1)",
      price: "₹899",
      image: "https://images.meesho.com/images/products/223495248/p0wjf_512.webp",
    },
    {
      id: 11,
      name: "Resistance Band (Buy 1 Get 1)",
      price: "₹349",
      image: "https://m.media-amazon.com/images/I/41d-IzCbJ-L._AC_.jpg",
    },
    {
      id: 12,
      name: "Ankle Support (Buy 1 Get 1)",
      price: "₹449",
      image: "https://rukminim2.flixcart.com/image/704/844/l4ln8nk0/support/z/9/y/both-the-legs-ankle-support-for-pain-relief-ankle-wrap-grip-gym-original-imagfgggtjzqywhp.jpeg?q=90&crop=false",
    },
    {
      id: 13,
      name: "Fitness Tracker Strap (Buy 1 Get 1)",
      price: "₹549",
      image: "https://m.media-amazon.com/images/I/41e3lTBIlVL.jpg",
    },
    {
      id: 14,
      name: "Gym Towel (Buy 1 Get 1)",
      price: "₹249",
      image: "https://m.media-amazon.com/images/I/71GLtjowMAL._SL1200_.jpg",
    },
    {
      id: 15,
      name: "Wrist Wraps (Buy 1 Get 1)",
      price: "₹299",
      image: "https://m.media-amazon.com/images/I/61H-2WgPT+L.jpg",
    },
  ];
  

const Buy1Get1 = () => {
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
    <div className="pt-18 bg-gray-100 min-h-screen">
      <Header />
      <Navbar />
      

      <h1 className="text-3xl font-bold mt-8 mb-6 text-center">🎁 Buy 1 Get 1</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bogoItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow hover:shadow-md transition relative"
          >
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              BOGO
            </span>
            <div key={item.id} className="relative">
              <ShopCard
                name={item.name}
                price={item.price}
                image={item.image}
                discount={item.discount}
                onAddToCart={() => handleAddToCart(item)}
              />
             
            </div>
          </div>
        ))}
      </div>
      <br /><br />
      <Footer />
    </div>
  );
};

export default Buy1Get1;
