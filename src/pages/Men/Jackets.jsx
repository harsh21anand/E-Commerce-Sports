import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";

import Footer from "../../components/footer/Footer";

const jackets = [
  {
    id: 1,
    name: "Nike Windrunner Jacket",
    cost: "₹4,999",
    discount: "10% OFF",
    image: "https://assets.ajio.com/medias/sys_master/root/20240309/0kkT/65ec494a05ac7d77bba40c94/-473Wx593H-469564478-black-MODEL.jpg",
  },
  {
    id: 2,
    name: "Adidas Essentials Puffer",
    cost: "₹5,499",
    discount: "15% OFF",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/d11fb58e34ad46cd821d234270b347d7_9366/ESSENTIALS_PUFFER_JACKET_Grey_JM0407_21_model.jpg",
  },
  {
    id: 3,
    name: "Puma Active Training Jacket",
    cost: "₹3,799",
    discount: "12% OFF",
    image: "https://assets.ajio.com/medias/sys_master/root/h24/he1/15682373615646/-473Wx593H-460579623-green-MODEL3.jpg",
  },
  {
    id: 4,
    name: "Under Armour Storm Jacket",
    cost: "₹6,299",
    discount: "18% OFF",
    image: "https://www.westportbigandtall.com/cdn/shop/products/41483_BLAC_1500x.jpg",
  },
  {
    id: 5,
    name: "Reebok Classic Track Jacket",
    cost: "₹3,299",
    discount: "14% OFF",
    image: "https://www.superkicks.in/cdn/shop/products/classictrackjacket-1.jpg?v=1675958602",
  },
  {
    id: 6,
    name: "HRX Outdoor Jacket",
    cost: "₹2,999",
    discount: "20% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/28851638/2024/11/14/dd8209a7-492f-4349-b000-31c0a1bfa2931731578390837-HRX-by-Hrithik-Roshan-Men-Jackets-5031731578390269-1.jpg",
  },
  {
    id: 7,
    name: "Decathlon Quechua Waterproof",
    cost: "₹4,199",
    discount: "16% OFF",
    image: "https://contents.mediadecathlon.com/p2292980/f3e2f16e0e1bcb4997e587cb4a77a2a5/p2292980.jpg?format=auto&quality=70&f=2520x0",
  },
  {
    id: 8,
    name: "ASICS Winter Running Jacket",
    cost: "₹5,999",
    discount: "13% OFF",
    image: "https://images.asics.com/is/image/asics/2011C397_300_GM_FT_GLB?$sfcc-product$",
  },
  {
    id: 9,
    name: "New Balance Lifestyle Jacket",
    cost: "₹4,799",
    discount: "11% OFF",
    image: "https://nb.scene7.com/is/image/NB/mj41506bk_nb_70_i?$pdpflexf2$&wid=440&hei=440",
  },
  {
    id: 10,
    name: "Wildcraft Trekking Jacket",
    cost: "₹3,999",
    discount: "17% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehXr1lK1ZL3NM8Gl6ip_fawjUbOgIB6UwJA&s",
  },
  {
    id: 11,
    name: "Fila Retro Sports Jacket",
    cost: "₹3,499",
    discount: "14% OFF",
    image: "https://m.media-amazon.com/images/I/71J6PInZ4+L._UY1100_.jpg",
  },
  {
    id: 12,
    name: "Yonex Warm-Up Jacket",
    cost: "₹2,799",
    discount: "15% OFF",
    image: "https://www.nydhi.com/cdn/shop/products/50058EX_Red.jpg?v=1634487073",
  },
  {
    id: 13,
    name: "Li-Ning Training Jacket",
    cost: "₹3,199",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzB1i5QXNfuWYWtBgBs8LgxidE5y2cnCQp_w&s",
  },
  {
    id: 14,
    name: "Hummel Pro Training Jacket",
    cost: "₹2,999",
    discount: "21% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPRr6PZtkd_1ir1vNGuExbNCQXVn2P06y9g&s",
  },
  {
    id: 15,
    name: "Columbia Explorer Jacket",
    cost: "₹7,499",
    discount: "9% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugujH3bcovOpHLnhCJS-OXxtMuNR0i1bxJA&s",
  },
];

const Jackets = () => {
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
        Men’s Jackets Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jackets.map((item, idx) => (
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

export default Jackets;
