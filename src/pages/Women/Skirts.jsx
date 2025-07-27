import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const skirts = [
  {
    id: 1,
    name: "Nike Court Dri-FIT Tennis Skirt",
    cost: "₹3,299",
    discount: "10% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gbbs8w9LZCrHuW6HLZqvXEtzgJXlqf_aIw&s",
  },
  {
    id: 2,
    name: "Adidas Club Pleated Skirt",
    cost: "₹2,799",
    discount: "12% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGM0sYYMYUXfYqm5sNvMnekJpR841UqbM8NA&s",
  },
  {
    id: 3,
    name: "Puma Active Training Skirt",
    cost: "₹2,499",
    discount: "15% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ45ofHSHfvEcFDWvCOXg_EC6BA2Y4IoAD3Q&s",
  },
  {
    id: 4,
    name: "Yonex Women's Badminton Skirt",
    cost: "₹1,999",
    discount: "18% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-B48__g3XKWv8w92Xn6uM3NeQSwtfce8Ntg&s",
  },
  {
    id: 5,
    name: "Reebok Sport Luxe Skirt",
    cost: "₹2,599",
    discount: "11% OFF",
    image: "https://www.reebok.com/cdn/shop/files/JPG-100250799_F_Model_eCom_77224748-590f-47fe-b54c-db79394ae2e6.jpg?v=1743691144",
  },
  {
    id: 6,
    name: "HRX Active Flared Skirt",
    cost: "₹1,799",
    discount: "13% OFF",
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22923964/2023/4/27/36092836-5e1a-4936-a588-cd2a4ea4b2231682598568373Skirts1.jpg",
  },
  {
    id: 7,
    name: "Decathlon Artengo Tennis Skirt",
    cost: "₹1,599",
    discount: "14% OFF",
    image: "https://contents.mediadecathlon.com/p2834605/9e474c8d36006b41935d152ff4a4eb73/p2834605.jpg",
  },
  {
    id: 8,
    name: "Under Armour Play Up Skirt",
    cost: "₹3,499",
    discount: "16% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEALllFrSRsIcW_jfcH9l9xm5jhPqHvl2sw&s",
  },
  {
    id: 9,
    name: "Fila Women's Pleated Skirt",
    cost: "₹2,399",
    discount: "17% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCYYYvlVS8Get9jVMmwgklx135ckeH103oQ&s",
  },
  {
    id: 10,
    name: "Columbia Outdoor Skirt",
    cost: "₹4,299",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpzdZfZcTNbncwkhEb2DlhCV-x_6muxSrO9Q&s",
  },
  {
    id: 11,
    name: "ASICS Court Tennis Skirt",
    cost: "₹2,999",
    discount: "20% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07uXhBD7e92e2GgbhUlvd92RhG-raXNG5pA&s",
  },
  {
    id: 12,
    name: "Wildcraft Softshell Skirt",
    cost: "₹1,899",
    discount: "22% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJAtNkwJPWdtl_-_Kqgzl5U74DNrSxEnf-SHYmLHavaWjapqTo-gF9Qp0nuEUwuoKevV0&usqp=CAU",
  },
  {
    id: 13,
    name: "Li-Ning Sports Skirt",
    cost: "₹2,199",
    discount: "21% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJm6oCN4cJemBNQ4xblmzwLqBc_mO1_Ym8hh3-JO0-AfXsMuMuU9Hq_ZH6N-_sZUoyiI&usqp=CAU",
  },
  {
    id: 14,
    name: "Hummel Training Skirt",
    cost: "₹1,599",
    discount: "24% OFF",
    image: "https://m.media-amazon.com/images/I/81HKTgSdqEL._UY1100_.jpg",
  },
  {
    id: 15,
    name: "New Balance Active Skirt",
    cost: "₹2,799",
    discount: "18% OFF",
    image: "https://m.media-amazon.com/images/I/61VtPMIk6QL._UY1000_.jpg",
  },
];

const Skirts = () => {
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
        Women’s Skirts Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skirts.map((item, idx) => (
          <ShopCard
            key={idx}
            image={item.image}
            name={item.name}
            cost={item.cost}
            discount={item.discount}
            onAddToCart={() => handleAddToCart(item)}
          />
        ))}
      </div><br /><br />
      <Footer />
    </div>
  );
};

export default Skirts;
