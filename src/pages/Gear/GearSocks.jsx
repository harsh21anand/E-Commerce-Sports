import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Navbar from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const gearSocks = [
  {
    id: 1,
    name: "Nike Performance Socks",
    cost: "₹499",
    discount: "10% OFF",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/29b26d55-c379-48ac-ab28-b6674dc07395/U+NK+NSW+EVERYDAY+ESSENTIAL+CR.png",
  },
  {
    id: 2,
    name: "Adidas Crew Socks Pack",
    cost: "₹599",
    discount: "12% OFF",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/364c62c739f9486488bdda5bae7761fd_9366/adidas_x_FARM_Rio_Crew_Socks_2_Pairs_Pink_IX7638_00_plp_standard.jpg",
  },
  {
    id: 3,
    name: "Puma Ankle Socks",
    cost: "₹399",
    discount: "8% OFF",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/685938/03/dt06/fnd/IND/fmt/png/Half-Terry-Ankle-Length-Socks-Pack-of-6",
  },
  {
    id: 4,
    name: "HRX Training Socks",
    cost: "₹449",
    discount: "15% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2510297/2018/6/6/1db47a01-936d-4670-b63d-beb07cdf3cc01528284938014-HRX-by-Hrithik-Roshan-Women-Pack-of-3-Colourblocked-Ankle-Length-Socks-2861528284937903-2.jpg",
  },
  {
    id: 5,
    name: "Under Armour Sport Socks",
    cost: "₹599",
    discount: "11% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdmP9DqHM2HbxbHdudU9wZJKc56EGkVIQpljizuh8YdHAbyexP0HmqUpKmKs1yP7nYnk&usqp=CAU",
  },
  {
    id: 6,
    name: "Reebok Active Socks",
    cost: "₹549",
    discount: "14% OFF",
    image: "https://m.media-amazon.com/images/I/711oqaC6DcL._SL1500_.jpg",
  },
  {
    id: 7,
    name: "Wildcraft Quick-Dry Socks",
    cost: "₹349",
    discount: "9% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/18291616/2022/5/28/bb1ed284-3dde-4795-912a-0b03b43fe4bb1653722677124-Low-Ankle1_Pk2--Wildcraft--Bk_GyMl-731653722676892-1.jpg",
  },
  {
    id: 8,
    name: "Decathlon Stretch Socks",
    cost: "₹299",
    discount: "13% OFF",
    image: "https://contents.mediadecathlon.com/p2579214/52c326b6cf6e5d8121bcfbf7fee3c933/p2579214.jpg",
  },
  {
    id: 9,
    name: "Nivia Comfort Socks",
    cost: "₹399",
    discount: "16% OFF",
    image: "https://m.media-amazon.com/images/I/71+Y4Be10DL._UY1100_.jpg",
  },
  {
    id: 10,
    name: "HRX Essentials Socks",
    cost: "₹479",
    discount: "18% OFF",
    image: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/25275118/2023/10/9/7dab8749-e14c-4647-88cc-b24102c0a6ba1696854170653-Men-Quarter-Socks-9711696854170285-1.jpg",
  },
  {
    id: 11,
    name: "Puma Sports Crew Socks",
    cost: "₹549",
    discount: "7% OFF",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/686796/01/fnd/IND/fmt/png/Sport-Socks-Pack-of-3",
  },
  {
    id: 12,
    name: "Sparx Cushioned Socks",
    cost: "₹379",
    discount: "20% OFF",
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29494070/2024/8/28/4945638c-5ffc-4b8e-b8c1-a96a61c7e8651724845060651-HRX-by-Hrithik-Roshan-Men-Pack-Of-5-Ankle-Length-Socks-62617-1.jpg",
  },
  {
    id: 13,
    name: "Fila Classic Sports Socks",
    cost: "₹429",
    discount: "17% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-J0neFjYvYvdiF7sdCLKT5_HzG-wcj9CQNg&s",
  },
  {
    id: 14,
    name: "Decathlon Hiking Socks (pack of 2)",
    cost: "₹299",
    discount: "22% OFF",
    image: "https://contents.mediadecathlon.com/p2862021/3ad17655883b1356af464c90020ef8af/p2862021.jpg",
  },
  {
    id: 15,
    name: "Asics Gel-Cushion Socks",
    cost: "₹499",
    discount: "9% OFF",
    image: "https://www.asics.co.in/media/catalog/product/3/0/3013a854_003_ac_ft_glb-base.jpg?optimize=high&bg-color=255%2C255%2C255&fit=cover&height=375&width=500&auto=webp&format=pjpg",
  },
];

const GearSocks = () => {
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
    <div className="flex flex-col min-h-screen overflow-x-hidden">
       <Header />
      <Navbar />
     
      <h1 className="text-3xl font-bold mb-8 text-center"><br />
        Gear - Socks Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gearSocks.map((item, idx) => (
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

export default GearSocks;
