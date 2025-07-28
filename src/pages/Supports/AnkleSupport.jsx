import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const anklesupports = [
  {
    id: 1,
    name: "Nike Pro Ankle Sleeve",
    cost: "₹899",
    discount: "10% OFF",
    image: "https://m.media-amazon.com/images/I/51Ijqgu4ncL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    name: "Adidas Elite Ankle Support",
    cost: "₹1,099",
    discount: "12% OFF",
    image: "https://images-static.nykaa.com/media/catalog/product/6/6/667bfa1885652007535-1.jpg?tr=w-500",
  },
  {
    id: 3,
    name: "Puma Flex Ankle Brace",
    cost: "₹699",
    discount: "15% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbltNlCE0UpQGqnqqAPQr1GMNPmazKXaT4KQ&s",
  },
  {
    id: 4,
    name: "Under Armour Performance Ankle",
    cost: "₹1,299",
    discount: "18% OFF",
    image: "https://img.tatacliq.com/images/i24//658Wx734H/MP000000026795404_658Wx734H_202505301641441.jpeg",
  },
  {
    id: 5,
    name: "Reebok Active Ankle Guard",
    cost: "₹799",
    discount: "11% OFF",
    image: "https://img.tatacliq.com/images/i4/437Wx649H/MP000000007245831_437Wx649H_20200704173948.jpeg",
  },
  {
    id: 6,
    name: "Wildcraft Shield Ankle Pad",
    cost: "₹649",
    discount: "14% OFF",
    image: "https://images-eu.ssl-images-amazon.com/images/I/51JjKqeTOjL._AC_UL495_SR435,495_.jpg",
  },
  {
    id: 7,
    name: "Decathlon Domyos Ankle Support",
    cost: "₹549",
    discount: "20% OFF",
    image: "https://contents.mediadecathlon.com/p1603833/7899cb591a441a01403f47a2ada9d8aa/p1603833.jpg?format=auto&quality=70&f=2520x0",
  },
  {
    id: 8,
    name: "Skybags Sport Ankle Band",
    cost: "₹599",
    discount: "13% OFF",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/7/AE/TA/SN/25583990/sports-ankle-brace.jpg",
  },
  {
    id: 9,
    name: "F Gear Active Ankle Wrap",
    cost: "₹949",
    discount: "9% OFF",
    image: "https://m.media-amazon.com/images/I/61x+WRI+gaL.jpg",
  },
  {
    id: 10,
    name: "Tommy Hilfiger Ankle Guard",
    cost: "₹1,199",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWck114nEDTIocBPVMCdHvq7iv4ALwPqCBIA&s",
  },
  {
    id: 11,
    name: "HRX Compression Ankle Sleeve",
    cost: "₹749",
    discount: "16% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOcAo0qeynjM67KGBXIMcZbs1gKh13NZMFw&s",
  },
  {
    id: 12,
    name: "Nivia Neo Ankle Support",
    cost: "₹549",
    discount: "21% OFF",
    image: "https://m.media-amazon.com/images/I/41qTNEvHW3L._QL92_SH45_SS200_.jpg",
  },
  {
    id: 13,
    name: "Puma Shield Ankle Pad",
    cost: "₹799",
    discount: "13% OFF",
    image: "https://scssports.in/cdn/shop/files/PUMA-ONE-20.jpg?v=1712744941",
  },
  {
    id: 14,
    name: "Sparx Ankle Guard",
    cost: "₹699",
    discount: "17% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHlh_j91mbxoSBBGlrwdjBBEAM7FU4SEVPg&s",
  },
  {
    id: 15,
    name: "Lavie Pro Ankle Support",
    cost: "₹999",
    discount: "19% OFF",
    image: "https://m.media-amazon.com/images/I/81ZLUq-LVVS.jpg",
  },
];

const AnkleSupport = () => {
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
        Ankle Support Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {anklesupports.map((item, idx) => (
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

export default AnkleSupport;
