import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const footwears = [
    { 
      id: 1,
      name: "Nike Field General", 
      cost: "₹6,999", 
      discount: "10% OFF", 
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ea467a3c-d62b-453e-af6c-a700325c76b3/WMNS+NIKE+FIELD+GENERAL.png" 
    },
    { 
      id: 2,
      name: "Nike Alpha Menace 4", 
      cost: "₹5,499", 
      discount: "15% OFF", 
      image: "https://m.media-amazon.com/images/I/71n8mKJ9lLL._UY900_.jpg" 
    },
    { 
      id: 3,
      name: "Adidas Adizero Chaos", 
      cost: "₹5,299", 
      discount: "12% OFF", 
      image: "https://u-mercari-images.mercdn.net/photos/m19732252713_2.jpg" 
    },
    { 
      id: 4,
      name: "Phenom Flash Velocity", 
      cost: "₹4,799", 
      discount: "20% OFF", 
      image: "https://liverocksolid.com/cdn/shop/files/Velocity2-Superman1_41dc56b4-bd84-4519-b482-0fe4457c128a_446x448.png?v=1747169299" 
    },
    { 
      id: 5,
      name: "Phenom Joker Velocity", 
      cost: "₹4,599", 
      discount: "18% OFF", 
      image: "https://i5.walmartimages.com/seo/Vizari-Stealth-Firm-Ground-Soccer-Cleats-Lightweight-Durable-Comfortable-Youth-Soccer-Cleats-Excellent-Traction-Boys-Soccer-Shoes-Padded-Heel-Anti-St_98ce8a58-286f-4b84-a85b-d8a0a1a750dd.91cfa1df271d8556de02d53a97968e84.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" 
    },
    { 
      id: 6,
      name: "Phenom Tom & Jerry", 
      cost: "₹4,299", 
      discount: "22% OFF", 
      image: "https://m.media-amazon.com/images/I/61w+jbFk6GL._AC_SY695_.jpg" 
    },
    { 
      id: 7,
      name: "Nike Vapor Shark 3", 
      cost: "₹6,299", 
      discount: "17% OFF", 
      image: "https://m.media-amazon.com/images/I/41LBbn5RshL._SX625_.jpg" 
    },
    { 
      id: 8,
      name: "Adidas Predator", 
      cost: "₹6,799", 
      discount: "14% OFF", 
      image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c6a2cebb6b9f43098eabcc0ae18d7141_9366/Predator_League_Firm-Multi-Ground_Boots_Red_ID3745_HM1.jpg" 
    },
    { 
      id: 9,
      name: "Puma Ultra", 
      cost: "₹5,199", 
      discount: "19% OFF", 
      image: "https://www.prokituk.com/media/catalog/product/cache/9d44fa6b34aa55943a44a9c7fcf36187/1/0/107504-03final.webp" 
    },
    { 
      id: 10,
      name: "Reebok Classic", 
      cost: "₹3,899", 
      discount: "11% OFF", 
      image: "https://cdn.shopify.com/s/files/1/0862/7834/0912/files/100008491_FLT_eCom-tif.png?v=1736438144&width=800" 
    },
    { 
      id: 11,
      name: "Under Armour Spike", 
      cost: "₹6,999", 
      discount: "16% OFF", 
      image: "https://www.vsathletics.com/store/images/P/3023397-101.jpg" 
    },
    { 
      id: 12,
      name: "Nivia Encounter 8.0", 
      cost: "₹2,499", 
      discount: "21% OFF", 
      image: "https://m.media-amazon.com/images/I/81X4yFqM68L._SY695_.jpg" 
    },
    { 
      id: 13,
      name: "Nivia Safari", 
      cost: "₹2,199", 
      discount: "13% OFF", 
      image: "https://www.niviasports.com/cdn/shop/files/2B0A6580.jpg?v=1753432360&width=1090" 
    },
    { 
      id: 14,
      name: "Nivia Ashtang 2.0", 
      cost: "₹3,299", 
      discount: "15% OFF", 
      image: "https://www.niviasports.com/cdn/shop/files/FB-3944BKAshtang2.0Turf4.jpg?v=1733982968&width=1090" 
    },
    { 
      id: 15,
      name: "Nivia Carbonite 7.0", 
      cost: "₹2,899", 
      discount: "20% OFF", 
      image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/v/e/s/3-1659-3-nivia-black-original-imah7e3uhjbgtqgy.jpeg?q=90&crop=false" 
    }
  ];
  

const Footwear = () => {
  const navigate = useNavigate();

  const handleAddToCart = (footwear) => {
    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if item already exists in cart
    const existingItemIndex = existingCart.findIndex(cartItem => cartItem.id === footwear.id);
    
    if (existingItemIndex >= 0) {
      // Item exists, increase quantity
      existingCart[existingItemIndex].qty = (existingCart[existingItemIndex].qty || 1) + 1;
    } else {
      // Add new item with quantity 1
      existingCart.push({ ...footwear, qty: 1 });
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
      
      <h1 className="text-3xl font-bold mb-8 text-center"><br /> Football Footwear</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {footwears.map((item, idx) => (
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

export default Footwear;
