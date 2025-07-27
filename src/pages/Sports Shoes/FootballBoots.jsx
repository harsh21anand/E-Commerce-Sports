import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Navbar from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const footballBoots = [
  {
    id: 1,
    name: "Nike Mercurial Superfly",
    cost: "₹12,999",
    discount: "18% OFF",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/4dca3b7c-b2ad-44d8-b8cb-354c13fe7ef4/ZM+SUPERFLY+10+ELITE+FG+NU1.png",
  },
  {
    id: 2,
    name: "Adidas Predator Freak",
    cost: "₹10,499",
    discount: "20% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQV9q30AntfrVi0BeocU74z641hd7CRBYB4JcGoBLk3r-fzgl2r1EcvHdM_nnt2zv6fM&usqp=CAU",
  },
  {
    id: 3,
    name: "Puma Future Z 1.1",
    cost: "₹8,299",
    discount: "15% OFF",
    image: "https://images-cdn.ubuy.co.in/646057038b18fa3ec522ecbc-puma-future-z-1-1-fg-brazil-limited.jpg",
  },
  {
    id: 4,
    name: "New Balance Furon V6+",
    cost: "₹9,999",
    discount: "17% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EhtjXH2wAm3Xo2picI9qi-IHetLp0FieoA&s",
  },
  {
    id: 5,
    name: "Under Armour Clone Magnetico",
    cost: "₹7,599",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2D4beN2G4mbDcP0Qs4xfYkWL28Ant7c6w8Q&s",
  },
  {
    id: 6,
    name: "Mizuno Morelia Neo III",
    cost: "₹11,299",
    discount: "22% OFF",
    image: "https://images-cdn.ubuy.ae/645d11fcdd4f2655b3101e75-mizuno-morelia-neo-3-japan-p1ga208001.jpg",
  },
  {
    id: 7,
    name: "Asics DS Light X-Fly 4",
    cost: "₹9,899",
    discount: "16% OFF",
    image: "https://static.wixstatic.com/media/397ede_6b68975e3d274cf7ae299465aeb60d20~mv2.jpg/v1/fill/w_520,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/397ede_6b68975e3d274cf7ae299465aeb60d20~mv2.jpg",
  },
  {
    id: 8,
    name: "Diadora Brasil Italy OG",
    cost: "₹13,999",
    discount: "25% OFF",
    image: "https://images.prodirectsport.com/ProductImages/Main/1010695_Main_Thumb_1727916.jpg",
  },
  {
    id: 9,
    name: "Kipsta Agility 900",
    cost: "₹5,499",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRix00TLxiIRqdyUpnybpFXpe0fqcpH6DkW6A&s",
  },
  {
    id: 10,
    name: "Umbro Velocita Alchemist",
    cost: "₹8,799",
    discount: "21% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWn8Rn48DTxNzUzzJiUNlkb_peHxh06qcfA&s",
  },
  {
    id: 11,
    name: "Joma Propulsion Lite",
    cost: "₹6,399",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUSWFTbhTO8bL2BRIxE2rCrIsCLdsCl2oWA&s",
  },
  {
    id: 12,
    name: "Pantofola d’Oro Lazzarini",
    cost: "₹14,999",
    discount: "12% OFF",
    image: "https://www.vintagefootballshirts.com/cdn/shop/files/pantofola-d-oro-lazzarini-66784-1.jpg?v=1729957550",
  },
  {
    id: 13,
    name: "Kelme Precision",
    cost: "₹4,899",
    discount: "17% OFF",
    image: "https://m.media-amazon.com/images/I/61QtY-iPrHL.jpg",
  },
  {
    id: 14,
    name: "Sondico Flair FG",
    cost: "₹3,499",
    discount: "20% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPMmE-MJ88oUiTJ9unVzMum_uYoCfkX2ZiAg&s",
  },
  {
    id: 15,
    name: "Decathlon Viralto III",
    cost: "₹5,299",
    discount: "15% OFF",
    image: "https://contents.mediadecathlon.com/p2389740/k$4e86d05c526b4803c33f49ed54b62dad/kids-artificial-grass-ag-football-shoes-viralto-iii-blue-orange-kipsta-8767814.jpg?f=1920x0&format=auto",
  },
];

const FootballBoots = () => {
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
        Football Boots Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {footballBoots.map((item, idx) => (
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

export default FootballBoots;
