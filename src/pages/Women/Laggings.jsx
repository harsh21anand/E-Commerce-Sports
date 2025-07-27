import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const leggings = [
  {
    id: 1,
    name: "Nike One Luxe Leggings",
    cost: "₹2,999",
    discount: "15% OFF",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a637a00e-f77f-4910-84e0-d824a622b27c/AS+W+NIKE+ONE+LUXE+MR+TIGHT.png",
  },
  {
    id: 2,
    name: "Adidas Essentials High-Rise",
    cost: "₹3,499",
    discount: "10% OFF",
    image: "https://scssports.in/cdn/shop/files/Yonex_Round_Neck_RJ-H036-2532_Badminton_T-Shirt_94_400x@2x.png?v=1735370768",
  },
  {
    id: 3,
    name: "Puma Studio Foundation Leggings",
    cost: "₹2,199",
    discount: "12% OFF",
    image: "https://images-static.nykaa.com/media/catalog/product/f/9/f94940752330318_1.jpg?tr=w-500",
  },
  {
    id: 4,
    name: "Under Armour Meridian Ankle",
    cost: "₹4,199",
    discount: "18% OFF",
    image: "https://www.underarmour.in/media/catalog/product/cache/a6c9600f6d89dc76028bfa07e5e1eb9a/1/3/1369006-520230710082725952.jpeg",
  },
  {
    id: 5,
    name: "Reebok Lux Bold Leggings",
    cost: "₹2,499",
    discount: "17% OFF",
    image: "https://www.reebok.eu/cdn/shop/files/23356790_53856541_800.webp?v=1744664304&width=600",
  },
  {
    id: 6,
    name: "Decathlon Domyos 500",
    cost: "₹1,499",
    discount: "20% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/28746994/2024/7/5/c5781582-f444-432c-a9c2-3ee309b956dc1720165046237-Womens-Slim-Fit-Fitness-Leggings-Fit-500---Black-Print-51817-1.jpg",
  },
  {
    id: 7,
    name: "HRX Active Solid Leggings",
    cost: "₹1,799",
    discount: "14% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2488700/2022/5/16/0f852114-fedb-4b95-aa7b-4e0a7b8959081652684277885-HRX-by-Hrithik-Roshan-Black-Tights-151652684277264-2.jpg",
  },
  {
    id: 8,
    name: "ASICS MotionDry Leggings",
    cost: "₹3,199",
    discount: "16% OFF",
    image: "https://www.asics.co.in/media/catalog/product/2/0/2011c881_001_gm_sd_glb-3.jpg",
  },
  {
    id: 9,
    name: "Columbia Anytime Outdoor Leggings",
    cost: "₹2,899",
    discount: "13% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3i_L8ekfSaVM3_Lpiw1R79nZuWU-08VJaA&s",
  },
  {
    id: 10,
    name: "Wildcraft Essential Leggings",
    cost: "₹1,299",
    discount: "19% OFF",
    image: "https://wildcraft.com/media/catalog/product/2/_/2_802.jpg?auto=webp&format=pjpg&fit=cover",
  },
  {
    id: 11,
    name: "Fila Classic Stretch Leggings",
    cost: "₹2,199",
    discount: "11% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgvrfTds8gHoqL23qgfJap6PEirNB-0yXQg&s",
  },
  {
    id: 12,
    name: "New Balance Transform Leggings",
    cost: "₹3,599",
    discount: "22% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkXYDnYPv0Dw9gE7mgdoEov5_ygzttJGRng&s",
  },
  {
    id: 13,
    name: "Yonex Quick-Dry Leggings",
    cost: "₹2,799",
    discount: "9% OFF",
    image: "https://m.media-amazon.com/images/I/51XRZ+jCjNL._UF894,1000_QL80_.jpg",
  },
  {
    id: 14,
    name: "Li-Ning High Waist Leggings",
    cost: "₹2,499",
    discount: "18% OFF",
    image: "https://cdn.shopify.com/s/files/1/0618/9462/3460/files/f1_e29871fc-4904-48cb-92a4-0424477d754d.jpg?v=1750172335&crop=center&height=800&width=600",
  },
  {
    id: 15,
    name: "Hummel Poly Training Leggings",
    cost: "₹1,999",
    discount: "21% OFF",
    image: "https://hummel.net.in/cdn/shop/files/3410002-8118.png?v=1750411239",
  },
];

const Leggings = () => {
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
        Women’s Leggings Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {leggings.map((item, idx) => (
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

export default Leggings;
