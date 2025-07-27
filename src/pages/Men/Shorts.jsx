import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const shorts = [
  {
    id: 1,
    name: "Nike Dri-FIT Shorts",
    cost: "₹1,299",
    discount: "12% OFF",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/0cf5b328-11ba-4344-b24d-7baeb26f1b1e/AS+M+NK+DF+CHALLENGER+72IN1+SH.png",
  },
  {
    id: 2,
    name: "Adidas Essentials Shorts",
    cost: "₹1,499",
    discount: "10% OFF",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e01315b1dc63497a9927af0900ebafc6_9366/Essentials_French_Terry_3-Stripes_Shorts_Black_IC9435_01_laydown.jpg",
  },
  {
    id: 3,
    name: "Puma Active Shorts",
    cost: "₹999",
    discount: "15% OFF",
    image: "https://m.media-amazon.com/images/I/51EnJ42nQ5L._UY1100_.jpg",
  },
  {
    id: 4,
    name: "Under Armour Sportstyle",
    cost: "₹1,799",
    discount: "14% OFF",
    image: "https://www.underarmour.in/media/catalog/product/cache/a6c9600f6d89dc76028bfa07e5e1eb9a/1/3/1329590-420230909122517169.jpeg",
  },
  {
    id: 5,
    name: "Reebok Workout Ready Shorts",
    cost: "₹1,099",
    discount: "18% OFF",
    image: "https://d141zx60z515qt.cloudfront.net/mp52689fad81/prcb3f9/img0_800w.webp",
  },
  {
    id: 6,
    name: "HRX Training Shorts",
    cost: "₹899",
    discount: "20% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26902470/2024/3/8/459f31c9-8b3f-489e-95f4-2b35377217281709882638330-HRX-by-Hrithik-Roshan-Men-Shorts-4611709882637631-1.jpg",
  },
  {
    id: 7,
    name: "Decathlon Domyos Shorts",
    cost: "₹799",
    discount: "22% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/productimage/2021/5/3/6a9d2237-092d-4572-ad33-4df846aca4f11620026548958-1.jpg",
  },
  {
    id: 8,
    name: "ASICS Performance Shorts",
    cost: "₹1,299",
    discount: "16% OFF",
    image: "https://racycles.com/cdn/shop/files/28414.jpg?v=1749116771",
  },
  {
    id: 9,
    name: "New Balance Essentials Shorts",
    cost: "₹1,399",
    discount: "13% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGW0_57nb8uwYQuGEve2orgf8VoF7veoA1SA&s",
  },
  {
    id: 10,
    name: "Wildcraft Trekking Shorts",
    cost: "₹1,199",
    discount: "19% OFF",
    image: "https://images-static.nykaa.com/media/catalog/product/d/7/d72d40842954_Olive_2.jpg?tr=w-500",
  },
  {
    id: 11,
    name: "Fila Training Shorts",
    cost: "₹1,049",
    discount: "17% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMgiYvSv-dqIb7BAV0g1lAzeSKcl20bz5JOaqt8Tffd_sls-XUrzEMFqjNSIM5TfLMjw&usqp=CAU",
  },
  {
    id: 12,
    name: "Kappa Sports Shorts",
    cost: "₹999",
    discount: "15% OFF",
    image: "https://northbridgefc.com.au/storage/2021/01/Kappa-Black-Shorts-Large-Logo-1.jpg",
  },
  {
    id: 13,
    name: "Yonex Active Shorts",
    cost: "₹1,199",
    discount: "14% OFF",
    image: "https://m.media-amazon.com/images/I/91CJgCJiUoL._UF894,1000_QL80_.jpg",
  },
  {
    id: 14,
    name: "Li-Ning Training Shorts",
    cost: "₹1,349",
    discount: "11% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-HdZabhVWjcUiSTjnabhhZv99-skN6SgBEQ&s",
  },
  {
    id: 15,
    name: "Hummel Essential Shorts",
    cost: "₹1,149",
    discount: "13% OFF",
    image: "https://www.ekinsport.com/media/opti_image/webp/catalog/product/cache/ab26c22a655754f041e4ec1ba42dece0/2/2/224543-2001_short-hummel-essential-pour-unisexe-224543-2001_01_7.webp",
  },
];

const Shorts = () => {
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
        Men’s Shorts Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shorts.map((item, idx) => (
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

export default Shorts;
