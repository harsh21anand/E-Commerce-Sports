import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Navbar from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const runningShoes = [
  {
    id: 1,
    name: "Nike Air Zoom Pegasus",
    cost: "₹6,999",
    discount: "15% OFF",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/63c4596a-ca9a-4a56-82f3-0387903ed5f1/AIR+ZOOM+PEGASUS+41.png",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    cost: "₹11,999",
    discount: "20% OFF",
    image: "https://u-mercari-images.mercdn.net/photos/m68639558315_1.jpg",
  },
  {
    id: 3,
    name: "Puma Velocity Nitro",
    cost: "₹7,499",
    discount: "18% OFF",
    image: "https://images-static.nykaa.com/media/catalog/product/9/7/97b0e4ePMAPA19569706_5.jpg?tr=w-400",
  },
  {
    id: 4,
    name: "Asics Gel Nimbus 23",
    cost: "₹12,499",
    discount: "22% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/6/q/o/-original-imagezy5fufxzc7h-bb.jpeg?q=20&crop=false",
  },
  {
    id: 5,
    name: "Reebok Floatride Energy 3",
    cost: "₹8,299",
    discount: "17% OFF",
    image: "https://rukminim2.flixcart.com/image/300/300/l4d2ljk0/shoe/d/x/f/-original-imagf9vhhfnwb5g9.jpeg",
  },
  {
    id: 6,
    name: "Under Armour HOVR Machina",
    cost: "₹9,599",
    discount: "21% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/27077306/2024/1/22/30e12762-c61d-42fd-b1f7-3e56065565cd1705935690037UNDERARMOURUAWHOVRMachina3WomenRunningSportsShoes1.jpg",
  },
  {
    id: 7,
    name: "New Balance Fresh Foam 1080v11",
    cost: "₹10,499",
    discount: "19% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/q/p/l/-original-imagudcfvg4urwcs.jpeg?q=90&crop=false",
  },
  {
    id: 8,
    name: "Saucony Endorphin Speed 2",
    cost: "₹13,499",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa979O82Cxu4yZAbuH5QmrXhwQcxvtLOyRwA&s",
  },
  {
    id: 9,
    name: "Hoka One One Clifton 8",
    cost: "₹11,299",
    discount: "16% OFF",
    image: "https://www.hoka.com/on/demandware.static/-/Library-Sites-HOKA-EMEA-SHARED/default/dw2cec99ea/images/2021/Clifton-8/S21-Clifton-3.jpg",
  },
  {
    id: 10,
    name: "Mizuno Wave Rider 25",
    cost: "₹9,799",
    discount: "20% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4TS5kFfRZCibe06ITfm4c_Z4PnUbOJ9875wv8A4riXabpMw0wS9bAgvvcC3eBwq5S-0&usqp=CAU",
  },
  {
    id: 11,
    name: "Fila Memory Workshift",
    cost: "₹5,199",
    discount: "23% OFF",
    image: "https://www.uniformadvantage.com/dw/image/v2/BGPS_PRD/on/demandware.static/-/Sites-UAMasterCatalog/default/dw33f05447/1SG30002/1SG30002_BLACK_1.jpg?sw=600&sh=890&sm=fit",
  },
  {
    id: 12,
    name: "Li-Ning Arc Ace",
    cost: "₹6,299",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiw7IzbDhXaX3rrCcR1NpwpUhQ9C3d4z3STw&s",
  },
  {
    id: 13,
    name: "HRX Lightweight Trainer",
    cost: "₹4,999",
    discount: "25% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgB9EeusRlEE_0F4nKEN8dfjG-BvKdnlnAfQ&s",
  },
  {
    id: 14,
    name: "Decathlon Kalenji Run Support",
    cost: "₹3,499",
    discount: "18% OFF",
    image: "https://contents.mediadecathlon.com/p2717165/18b24508e659e92ce7437d9145e95535/p2717165.jpg",
  },
  {
    id: 15,
    name: "Wildcraft Hypashield Runner",
    cost: "₹5,799",
    discount: "22% OFF",
    image: "https://wildcraft.com/media/catalog/product/6/_/6_951_1.jpg?width=960",
  },
];

const RunningShoes = () => {
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
        Running Shoes Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {runningShoes.map((item, idx) => (
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

export default RunningShoes;
