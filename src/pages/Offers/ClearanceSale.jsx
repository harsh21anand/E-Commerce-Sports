import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const clearanceItems = [
  {
    id: 1,
    name: "Nivia Storm Football",
    cost: "₹499",
    discount: "20% OFF",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5sR1xE-4tT_WvZo08lhDJr791yqDWXP3glwHSfkW8x4yMMRTvCZk8mNFO6MVxZWrOn4FkW-JfUhF9VX78NC4oGZmcvfWyKXxrP7F17kJ9vrSF_a9-sw3jwg",
  },
  {
    id: 2,
    name: "Nivia Encounter Shin Guard",
    cost: "₹299",
    discount: "30% OFF",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2025/1/481954474/YD/VQ/ST/45172533/classic-with-sleeve-shin-gard-500x500.webp",
  },
  {
    id: 3,
    name: "Nivia Airstrike Volleyball",
    cost: "₹799",
    discount: "25% OFF",
    image:
      "https://m.media-amazon.com/images/I/71cvxK-1ImL.jpg",
  },
  {
    id: 4,
    name: "Nivia Combat Shoes",
    cost: "₹1,499",
    discount: "35% OFF",
    image:
      "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/22707078/2023/4/8/a6a474be-805c-4e2a-ab42-85a59268e36e1680947968354NiviaCombat20BasketballShoesForMen1.jpg",
  },
  {
    id: 5,
    name: "Nivia Titan Backpack",
    cost: "₹999",
    discount: "40% OFF",
    image:
      "https://m.media-amazon.com/images/I/91ZEGlFfV7L.jpg",
  },
  {
    id: 6,
    name: "Nivia Blaze Duffle Bag",
    cost: "₹899",
    discount: "28% OFF",
    image:
      "https://m.media-amazon.com/images/I/41Cpul6mVYL._UY1100_.jpg",
  },
  {
    id: 7,
    name: "Nivia Aero Football Studs",
    cost: "₹1,299",
    discount: "32% OFF",
    image:
      "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/c/5/8/6-fb-1027-ob-6-nivia-orange-black-original-imah2hgbfh5gbkgq.jpeg?q=90&crop=false",
  },
  {
    id: 8,
    name: "Nivia Super Court Badminton Shoes",
    cost: "₹1,999",
    discount: "37% OFF",
    image:
      "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22740956/2023/4/12/152c63cb-e421-4212-9f9a-44e2b2a3fb741681293301866NiviaFlash20BadmintonShoesForMen1.jpg",
  },
  {
    id: 9,
    name: "Nivia Performance Socks",
    cost: "₹199",
    discount: "15% OFF",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSShPhtEiO1YmxHCEesbDNfcDN3J_ALYxhPQg&s",
  },
  {
    id: 10,
    name: "Nivia Basic Cap",
    cost: "₹249",
    discount: "10% OFF",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DwXeL5tnnSv2zzDrUEvgc9V1bVNMO8iGNA&s",
  },
  {
    id: 11,
    name: "Nivia Blaster Handball",
    cost: "₹599",
    discount: "22% OFF",
    image:
      "https://lsmedia.linker-cdn.net/62267/2023/8685498.jpeg?d=400x400?d=600x314",
  },
  {
    id: 12,
    name: "Nivia Aqua Bottle 750ml",
    cost: "₹349",
    discount: "18% OFF",
    image:
      "https://m.media-amazon.com/images/I/517s567HehL._UF894,1000_QL80_.jpg",
  },
  {
    id: 13,
    name: "Nivia Trend Gym Bag",
    cost: "₹799",
    discount: "26% OFF",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgrmc8J-0EnRMN2F9fHvvH--DOfpUN8Dg3Q&s",
  },
  {
    id: 14,
    name: "Nivia Speed Skipping Rope",
    cost: "₹199",
    discount: "12% OFF",
    image:
      "https://m.media-amazon.com/images/I/51-YTwHFT0L._UF1000,1000_QL80_.jpg",
  },
  {
    id: 15,
    name: "Nivia Grip Pro Wristband",
    cost: "₹149",
    discount: "8% OFF",
    image:
      "https://www.niviasports.com/cdn/shop/files/GG-709VENOM.jpg?v=1716453009",
  },
];

const ClearanceSale = () => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

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
      {/* Main Content */}

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8 text-center">Clearance Sale</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clearanceItems.map((item) => (
          <div key={item.id} className="relative border rounded-lg shadow-md">
            {/* SALE Badge */}
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </div>

            {/* Product Card */}
            <ShopCard
              name={item.name}
              price={item.cost}
              image={item.image}
              discount={item.discount}
              onAddToCart={() => handleAddToCart(item)}
            />

           
          </div>
        ))}
      </div>
  <br /><br />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ClearanceSale;
