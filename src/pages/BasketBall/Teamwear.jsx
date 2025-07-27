import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const basketballTeamwear = [
  {
    id: 1,
    name: "Nike Basketball Jersey",
    cost: "₹2,199",
    discount: "10% OFF",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/17728b16-5bcb-4444-a241-309ee067a7f4/AS+M+NK+DF+DNA+JERSEY.png",
  },
  {
    id: 2,
    name: "Adidas Performance Shorts",
    cost: "₹1,899",
    discount: "12% OFF",
    image: "https://assets.ajio.com/medias/sys_master/root/20201110/luYS/5fa9908caeb269d56304c2d8/-473Wx593H-460756045-grey-MODEL.jpg",
  },
  {
    id: 3,
    name: "Puma Court T-Shirt",
    cost: "₹1,599",
    discount: "8% OFF",
    image: "https://m.media-amazon.com/images/I/71S7Ey9YcwL._AC_UY1100_.jpg",
  },
  {
    id: 4,
    name: "Under Armour Warm-Up Jacket",
    cost: "₹3,499",
    discount: "15% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSq438EXF8CNJsbsnwUV37nqpo5PlMitHjg&s",
  },
  {
    id: 5,
    name: "Reebok Sleeveless Jersey",
    cost: "₹1,299",
    discount: "18% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFxIhhHdfy8EWUksJjaDHZNUkC7-rUbdSKPlgqdTiiawL8b6pMPAUkzHIO5s6gQG0GrAs&usqp=CAU",
  },
  {
    id: 6,
    name: "Wilson Team Shorts",
    cost: "₹1,199",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCXtu-QiSzPldKz4x8rvNPcl6Ic2jCCFp8Pg&s",
  },
  {
    id: 7,
    name: "Spalding Elite Jersey",
    cost: "₹1,799",
    discount: "11% OFF",
    image: "https://m.media-amazon.com/images/I/91TfDSJ8lKL._UY1100_.jpg",
  },
  {
    id: 8,
    name: "Nike Pro Compression Tights",
    cost: "₹2,499",
    discount: "9% OFF",
    image: "https://thumblr.uniid.it/product/181054/93eed8f8c884.jpg?width=3840&format=webp&q=75",
  },
  {
    id: 9,
    name: "Adidas Team Polo Shirt",
    cost: "₹1,699",
    discount: "16% OFF",
    image: "https://images.footballfanatics.com/team-gb/team-gb-golf-polo-shirt_ss5_p-200502282+u-337u55hmxp2aic5n1dy0+v-thkadsbruxifispcs9j0.jpg?_hv=2&w=400",
  },
  {
    id: 10,
    name: "Puma Basketball Hoodie",
    cost: "₹3,199",
    discount: "13% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLX0rz3ouIwPYD1JRK-8REmt6VUiPHJn410A&s",
  },
  {
    id: 11,
    name: "Under Armour Sleeveless Hoodie",
    cost: "₹2,799",
    discount: "17% OFF",
    image: "https://images-cdn.ubuy.co.id/65a9548840076369864e6a91-under-armour-men-39-s-tech-sleeveless.jpg",
  },
  {
    id: 12,
    name: "Reebok Warm-Up Pants",
    cost: "₹2,099",
    discount: "15% OFF",
    image: "https://imagescdn.reebok.in/img/app/product/3/39903497-18169617.jpg?auto=format&w=390",
  },
  {
    id: 13,
    name: "Wilson Practice Jersey",
    cost: "₹1,099",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrqJS9oh2RwqzxTVI2dSu9pbPuxvrETUzTQ&s",
  },
  {
    id: 14,
    name: "Spalding Training Shorts",
    cost: "₹1,499",
    discount: "10% OFF",
    image: "https://m.media-amazon.com/images/I/41Mxe9-JmvL.jpg",
  },
  {
    id: 15,
    name: "Nike Fly Basketball Shorts",
    cost: "₹1,799",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/61wsv1nYPSL._UY1100_.jpg",
  },
];

const BasketBallTeamwear = () => {
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
        Basketball Teamwear Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {basketballTeamwear.map((item, idx) => (
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

export default BasketBallTeamwear;
