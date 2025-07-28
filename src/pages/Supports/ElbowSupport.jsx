import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const elbowsupports = [
  {
    id: 1,
    name: "Nike Pro Elbow Sleeve",
    cost: "₹799",
    discount: "10% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/l5h2xe80/support/u/z/0/fitness-pro-elbow-sleeve-3-0-m-25-dc4399-010-nike-28-original-imagg5fbr6df8dmh.jpeg?q=20&crop=false",
  },
  {
    id: 2,
    name: "Adidas Elite Elbow Support",
    cost: "₹999",
    discount: "12% OFF",
    image: "https://www.elitefitness.co.nz/media/catalog/product/cache/0dc065a0860ac51cb6d6f72c418bbfb4/e/l/elbowsupport_adidas_02.jpg",
  },
  {
    id: 3,
    name: "Puma Flex Elbow Brace",
    cost: "₹699",
    discount: "15% OFF",
    image: "https://m.media-amazon.com/images/I/81-x+lVtSbL._UF894,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Under Armour Performance Elbow",
    cost: "₹1,099",
    discount: "18% OFF",
    image: "https://m.media-amazon.com/images/I/71Es7FuRvrL.jpg",
  },
  {
    id: 5,
    name: "Reebok Active Elbow Guard",
    cost: "₹749",
    discount: "11% OFF",
    image: "https://sportsjam.in/media/catalog/product/cache/f6d88dd4f51ed5a5b4384f0ded062b0d/r/b/rbsu1352.jpg",
  },
  {
    id: 6,
    name: "Wildcraft Shield Elbow Pad",
    cost: "₹599",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnDph9dobZ0OrCmzCezesb0imvf_QH9-uRw&s",
  },
  {
    id: 7,
    name: "Decathlon Domyos Elbow Support",
    cost: "₹549",
    discount: "20% OFF",
    image: "https://contents.mediadecathlon.com/p2265602/9bdae07e8da10587e4ab25f17cefca3e/p2265602.jpg",
  },
  {
    id: 8,
    name: "Skybags Sport Elbow Band",
    cost: "₹599",
    discount: "13% OFF",
    image: "https://m.media-amazon.com/images/I/71-xnO9sr-L._UF350,350_QL50_.jpg",
  },
  {
    id: 9,
    name: "F Gear Active Elbow Wrap",
    cost: "₹849",
    discount: "9% OFF",
    image: "https://www.wodarmour.in/cdn/shop/files/elbow-wrap-one-pair-wodarmour-1.jpg?v=1706300037",
  },
  {
    id: 10,
    name: "Tommy Hilfiger Elbow Guard",
    cost: "₹1,199",
    discount: "14% OFF",
    image: "https://shop.teamsg.in/cdn/shop/files/KLRRADIXElbowGuard_1.jpg?v=1749720668",
  },
  {
    id: 11,
    name: "HRX Compression Elbow Sleeve",
    cost: "₹699",
    discount: "16% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/arm-sleeve/d/x/u/-original-imagg5gtmwyhhrgj.jpeg?q=90&crop=false",
  },
  {
    id: 12,
    name: "Nivia Neo Elbow Support",
    cost: "₹549",
    discount: "21% OFF",
    image: "https://m.media-amazon.com/images/I/51QSgvXptuL._UF350,350_QL50_.jpg",
  },
  {
    id: 13,
    name: "Puma Shield Elbow Pad",
    cost: "₹749",
    discount: "13% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWF43Mx-8x5WMTINMHJqyMyvCxqY_Jb2cAg&s",
  },
  {
    id: 14,
    name: "Sparx Elbow Guard",
    cost: "₹699",
    discount: "17% OFF",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/3/ZA/LO/ON/40983079/dsc-wildfire-sparx-tennis-cricket-bat-sh-500x500.jpg",
  },
  {
    id: 15,
    name: "Lavie Pro Elbow Support",
    cost: "₹999",
    discount: "19% OFF",
    image: "https://m.media-amazon.com/images/I/71oRw-hd--L.jpg",
  },
];

const ElbowSupport = () => {
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
        Elbow Support Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {elbowsupports.map((item, idx) => (
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

export default ElbowSupport;
