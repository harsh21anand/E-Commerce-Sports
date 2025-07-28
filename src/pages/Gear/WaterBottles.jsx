import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const waterBottles = [
  {
    id: 1,
    name: "Nike Squeeze Water Bottle",
    cost: "₹499",
    discount: "10% OFF",
    image: "https://m.media-amazon.com/images/I/41+9FTH8rAL.jpg",
  },
  {
    id: 2,
    name: "Adidas Steel Sports Bottle",
    cost: "₹799",
    discount: "15% OFF",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/2b25c0484ee34cafb243af4f0146836f_9366/Performance_Bottle_0.5_L_Blue_HT3523_01_standard.jpg",
  },
  {
    id: 3,
    name: "Puma Hydro Flow Bottle",
    cost: "₹649",
    discount: "12% OFF",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/054931/02/fnd/IND/fmt/png/Fit-Mix-Shaker-Training-Water-Bottle-600ml",
  },
  {
    id: 4,
    name: "Decathlon Quick Sip Bottle",
    cost: "₹349",
    discount: "18% OFF",
    image: "https://contents.mediadecathlon.com/p453601/1903acb1e56544edabf75c9626cc72da/p453601.jpg?format=auto&quality=70&f=2520x0",
  },
  {
    id: 5,
    name: "Reebok Active Hydrate Bottle",
    cost: "₹559",
    discount: "14% OFF",
    image: "https://m.media-amazon.com/images/I/51us+jWaTDL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    name: "Under Armour Thermos Bottle",
    cost: "₹899",
    discount: "20% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd35yJA5F3zaeVkX4aV5uYjKX1ZaJ3rZIisA&s",
  },
  {
    id: 7,
    name: "Wildcraft Travel Bottle",
    cost: "₹429",
    discount: "13% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2375860/2018/2/22/11519294753684-Wildcraft-Unisex-Travel-Accessory-3091519294753633-1.jpg",
  },
  {
    id: 8,
    name: "HRX Eco-Friendly Bottle",
    cost: "₹379",
    discount: "16% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26954484/2024/1/12/c40efe30-ed14-484c-93d2-a61271b8526f1705060809749WaterBottle1.jpg",
  },
  {
    id: 9,
    name: "F Gear Hydro Steel Bottle",
    cost: "₹699",
    discount: "11% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrUDIS7ZE-Argi0SwQLdHTqjGFMn-N7MeIQ&s",
  },
  {
    id: 10,
    name: "Tommy Sport Classic Bottle",
    cost: "₹1,099",
    discount: "19% OFF",
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/JANUARY/29/PHYK2DMZ_2461e491b516408fb95d6b93a3617029.jpg",
  },
  {
    id: 11,
    name: "American Tourister Flask Bottle",
    cost: "₹649",
    discount: "17% OFF",
    image: "https://m.media-amazon.com/images/I/51FdSOwl74L._UF894,1000_QL80_.jpg",
  },
  {
    id: 12,
    name: "Sparx Quick Fill Bottle",
    cost: "₹299",
    discount: "21% OFF",
    image: "https://strausssport.com/cdn/shop/products/51nhoms8HxL.jpg?v=1687718380",
  },
  {
    id: 13,
    name: "Decathlon Insulated Bottle",
    cost: "₹499",
    discount: "22% OFF",
    image: "https://contents.mediadecathlon.com/p2201733/0aaf2450ffe46f5726a688b65968ac04/p2201733.jpg",
  },
  {
    id: 14,
    name: "Nivia Pro Sports Bottle",
    cost: "₹459",
    discount: "18% OFF",
    image: "https://m.media-amazon.com/images/I/6118MJC0VIL.jpg",
  },
  {
    id: 15,
    name: "Asics Gym Bottle",
    cost: "₹549",
    discount: "9% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrcMkcVrxHfBk84HFk9IVOo1Yeji3LTuXrg&s"
  },
];

const WaterBottles = () => {
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
      <h1 className="text-3xl font-bold mb-8 text-center"><br />Gear - Water Bottles Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {waterBottles.map((item, idx) => (
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

export default WaterBottles;
