import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const tShirts = [
  {
    id: 1,
    name: "Nike Dry Fit T-Shirt",
    cost: "₹1,299",
    discount: "10% OFF",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3fe209e4-f0e0-41fe-9e05-52991fc3adfb/AS+M+NK+DF+TEE+2+YR+SWOOSH.png",
  },
  {
    id: 2,
    name: "Adidas Climacool Tee",
    cost: "₹1,499",
    discount: "15% OFF",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/f5a868dbdd4540a8b964f4968eb1b820_9366/Club_Tennis_Climacool_Graphic_Tee_Black_JF8422_21_model.jpg",
  },
  {
    id: 3,
    name: "Puma Performance Shirt",
    cost: "₹1,199",
    discount: "8% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZ9uj7Ix3CPGJI0vBwLWDynDxPSgieFKbNA&s",
  },
  {
    id: 4,
    name: "Under Armour HeatGear",
    cost: "₹1,699",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/51p5-Fvw7IL._UY1000_.jpg",
  },
  {
    id: 5,
    name: "Reebok Training Tee",
    cost: "₹999",
    discount: "18% OFF",
    image: "https://imagescdn.reebok.in/img/app/product/3/39643481-13358957.jpg?auto=format&w=390",
  },
  {
    id: 6,
    name: "HRX Active T-Shirt",
    cost: "₹899",
    discount: "20% OFF",
    image: "https://nimbuscluster.blob.core.windows.net/server01/hrx/product/productImage-TVLj9f8NzX0eAmnbR7NzF-1662610505",
  },
  {
    id: 7,
    name: "Decathlon Domyos Tee",
    cost: "₹799",
    discount: "22% OFF",
    image: "https://assets.ajio.com/medias/sys_master/root/20241114/pEHk/67358f44260f9c41e8dfddcc/ftx_black_men_t-shirt_with_round_neck.jpg",
  },
  {
    id: 8,
    name: "ASICS Training Shirt",
    cost: "₹1,299",
    discount: "14% OFF",
    image: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018213816_437Wx649H_202307021826381.jpeg",
  },
  {
    id: 9,
    name: "New Balance Running Tee",
    cost: "₹1,499",
    discount: "16% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKxz_xq7lYqncyaB1IjPqAHClvqlLxPYECg&s",
  },
  {
    id: 10,
    name: "Wildcraft Sports Tee",
    cost: "₹899",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROa6VKTGOyZ8FuqJo2azdT9sjqfGmOPeWQ9r4hr9OF8QwiH3vF_krI-77Fkl8O5kJGlrk&usqp=CAU",
  },
  {
    id: 11,
    name: "Fila Classic T-Shirt",
    cost: "₹1,099",
    discount: "13% OFF",
    image: "https://images-cdn.ubuy.co.in/66e1067dd7697043446d35fd-fila-mens-big-tall-classic-logo-short.jpg",
  },
  {
    id: 12,
    name: "Hummel Performance Tee",
    cost: "₹1,299",
    discount: "17% OFF",
    image: "https://hummel.net.in/cdn/shop/products/203447-7045_A.jpg?v=1750412294",
  },
  {
    id: 13,
    name: "Kappa Workout T-Shirt",
    cost: "₹999",
    discount: "15% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22119696/2023/2/24/5b07857d-32ae-457c-8032-cbae1530a03b1677258344665KappaMenBlueAppliqueTrainingorGymT-shirt1.jpg",
  },
  {
    id: 14,
    name: "Yonex Active Tee",
    cost: "₹1,199",
    discount: "11% OFF",
    image: "https://scssports.in/cdn/shop/files/Yonex_Round_Neck_RJ-H036-2532_Badminton_T-Shirt_17.png?v=1734957294",
  },
  {
    id: 15,
    name: "Li-Ning Dry Fit T-Shirt",
    cost: "₹1,399",
    discount: "9% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/1744302/2017/3/1/11488352589658-Shiv-Naresh-Men-White-Printed-Polo-Collar-T-Shirt-1261488352589456-1.jpg",
  },
];

const TShirts = () => {
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
        Men’s T-Shirts Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tShirts.map((item, idx) => (
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

export default TShirts;
