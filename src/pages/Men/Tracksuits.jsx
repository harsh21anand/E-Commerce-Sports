import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const tracksuits = [
  {
    id: 1,
    name: "Nike Dri-FIT Tracksuit",
    cost: "₹5,299",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/51On3YKWkoL._UY1100_.jpg",
  },
  {
    id: 2,
    name: "Adidas Essentials 3-Stripes Tracksuit",
    cost: "₹4,999",
    discount: "15% OFF",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4d54b87a20c94aa290e13440b7725f97_9366/Essentials_3-Stripes_Tracksuit_Black_IJ8781_01_laydown.jpg",
  },
  {
    id: 3,
    name: "Puma Iconic T7 Tracksuit",
    cost: "₹4,499",
    discount: "10% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5hhIUBqCYmAg8at1xopY5F6ea98GzNrCKw&s",
  },
  {
    id: 4,
    name: "Under Armour Challenger Tracksuit",
    cost: "₹5,799",
    discount: "18% OFF",
    image: "https://m.media-amazon.com/images/I/51ZgeGqz5bL.jpg",
  },
  {
    id: 5,
    name: "Reebok Classic Vector Tracksuit",
    cost: "₹3,999",
    discount: "14% OFF",
    image: "https://otahuhushoes.co.nz/cdn/shop/files/16-386985_1.webp?v=1700781306&width=1445",
  },
  {
    id: 6,
    name: "HRX Training Tracksuit",
    cost: "₹2,899",
    discount: "20% OFF",
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/30036082/2024/11/12/487e4029-462a-40c9-846b-296a27d782531731394947238-HRX-by-Hrithik-Roshan-Men-Tracksuits-3731731394946355-1.jpg",
  },
  {
    id: 7,
    name: "ASICS Silver Tracksuit",
    cost: "₹4,299",
    discount: "16% OFF",
    image: "https://assets.ajio.com/medias/sys_master/root/20220811/Hb0F/62f4ecfeaeb26921afdf4004/-473Wx593H-469109450-black-MODEL.jpg",
  },
  {
    id: 8,
    name: "New Balance Athletic Tracksuit",
    cost: "₹5,199",
    discount: "11% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-mrIofF01IhCR_hRmtlx8pMRAMBumJCpwA&s",
  },
  {
    id: 9,
    name: "Decathlon Domyos Tracksuit",
    cost: "₹2,599",
    discount: "13% OFF",
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2021/6/9/35c16521-1708-4c8d-9ea3-c67a1cea93a91623212921914-1.jpg",
  },
  {
    id: 10,
    name: "Wildcraft Sports Tracksuit",
    cost: "₹3,499",
    discount: "17% OFF",
    image: "https://m.media-amazon.com/images/I/51v9DqwLvEL._UY1100_.jpg",
  },
  {
    id: 11,
    name: "Fila Heritage Tracksuit",
    cost: "₹3,299",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLAYias0d2qyhhJFVLZQc40nmA68c968uXw&s",
  },
  {
    id: 12,
    name: "Yonex Court Tracksuit",
    cost: "₹3,899",
    discount: "15% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRCIMdwG59edk59jeNuZccBZUqXEGituxSg&s",
  },
  {
    id: 13,
    name: "Li-Ning Performance Tracksuit",
    cost: "₹3,999",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7ojDmXHiSycD8TU__F0b1HIARFQti97g3g&s",
  },
  {
    id: 14,
    name: "Hummel Core Poly Tracksuit",
    cost: "₹3,199",
    discount: "21% OFF",
    image: "https://thumblr.uniid.it/product/215145/bdee0b0dd2a9.jpg?width=3840&format=webp&q=75",
  },
  {
    id: 15,
    name: "Columbia Ridge Tracksuit",
    cost: "₹6,499",
    discount: "9% OFF",
    image: "https://www.columbiasportswear.co.in/cdn/shop/files/WE3241-453_11.jpg?v=1743235313",
  },
];

const Tracksuits = () => {
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
        Men’s Tracksuits Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tracksuits.map((item, idx) => (
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

export default Tracksuits;
