import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const jackets = [
  {
    id: 1,
    name: "Nike Sportswear Windrunner Jacket",
    cost: "₹4,499",
    discount: "10% OFF",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/2c25697c-59d1-4109-9396-4d13aeda6a7d/AS+W+NSW+NK+WR+WVN+UV+FZ+JKT.png",
  },
  {
    id: 2,
    name: "Adidas Essentials 3-Stripes Jacket",
    cost: "₹3,999",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/81XFCy9khoL._UY1100_.jpg",
  },
  {
    id: 3,
    name: "Puma Women's Transition Jacket",
    cost: "₹2,799",
    discount: "15% OFF",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/592381/01/fnd/IND/fmt/png/Active-Women's-Transition-Jacket",
  },
  {
    id: 4,
    name: "Under Armour Rival Fleece Hoodie",
    cost: "₹5,199",
    discount: "20% OFF",
    image: "https://www.underarmour.in/media/catalog/product/cache/fe00ef9a43201311b84f219ced64b808/1/3/1379501-012-SM-120231115010509594.jpg",
  },
  {
    id: 5,
    name: "Reebok Classics Track Jacket",
    cost: "₹3,299",
    discount: "18% OFF",
    image: "https://images-cdn.ubuy.co.in/656fdc79b2849b5b6d10c2ea-reebok-classics-vector-tracktop.jpg",
  },
  {
    id: 6,
    name: "HRX Active Solid Jacket",
    cost: "₹2,499",
    discount: "16% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/9299169/2020/3/16/d5dabac9-cc52-4537-ba39-7b366263f3df1584348353026-HRX-by-Hrithik-Roshan-Women-Jackets-4431584348350815-1.jpg",
  },
  {
    id: 7,
    name: "Decathlon Domyos 500 Full-Zip",
    cost: "₹1,999",
    discount: "14% OFF",
    image: "https://i5.walmartimages.com/asr/b2e78448-c3e2-4f1e-83c5-e24d6b85a30a.49e1ba406d64ed16e7d21fd6aaaf9eaa.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
  {
    id: 8,
    name: "ASICS Silver Jacket",
    cost: "₹4,799",
    discount: "11% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEcYnz0lJJK_Vp6jdhsU9O6vGntnFrPsJMg&s",
  },
  {
    id: 9,
    name: "Columbia Outdoor Rain Jacket",
    cost: "₹6,299",
    discount: "22% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/1869130/2018/9/21/5ea9432d-92b5-4f04-a438-994971163a891537507820667-Columbia-Coral-Red-Arcadia-II-Outdoor-Rain-Jacket-4941537507-1.jpg",
  },
  {
    id: 10,
    name: "Fila Retro Zip Up Jacket",
    cost: "₹2,899",
    discount: "13% OFF",
    image: "https://i.ebayimg.com/images/g/mjsAAOSwkAReG~4J/s-l400.jpg",
  },
  {
    id: 11,
    name: "New Balance Impact Run Jacket",
    cost: "₹5,399",
    discount: "17% OFF",
    image: "https://nb.scene7.com/is/image/NB/wj21264bk_nb_70_i?$pdpflexf2$&wid=440&hei=440",
  },
  {
    id: 12,
    name: "Yonex Power Cushion Jacket",
    cost: "₹3,699",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4891t6SDUleJu3BazMfYPY7rTjGSL8XXb_A&s",
  },
  {
    id: 13,
    name: "Li-Ning Breathable Sports Jacket",
    cost: "₹3,199",
    discount: "21% OFF",
    image: "https://image.made-in-china.com/318f0j00UtyRHIYnOPcq/JK2411J02-JK2411P01-INGOR-mp4.webp",
  },
  {
    id: 14,
    name: "Wildcraft Outdoor Softshell",
    cost: "₹2,599",
    discount: "25% OFF",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/wildcraft-women-softshell-jacket-pro-oavps99iqxv-size-s-maroon-164470012-a2ker.png",
  },
  {
    id: 15,
    name: "Hummel Training Jacket",
    cost: "₹1,799",
    discount: "20% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/16034866/2021/11/8/ec7f9372-1fb6-4235-ad91-e64e4165beb61636374468102Jackets1.jpg",
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
        Women’s Jackets Collection
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
