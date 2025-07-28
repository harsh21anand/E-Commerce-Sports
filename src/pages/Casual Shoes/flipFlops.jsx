import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Navbar from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const flipflops = [
  {
    id: 1,
    name: "Nike Solarsoft Flip-Flop",
    cost: "₹999",
    discount: "12% OFF",
    image: "https://assets.ajio.com/medias/sys_master/root/hb7/h01/15552002654238/-1117Wx1400H-460345077-grey-MODEL.jpg",
  },
  {
    id: 2,
    name: "Adidas Eezay Flip-Flop",
    cost: "₹799",
    discount: "10% OFF",
    image: "https://img.tatacliq.com/images/i12/437Wx649H/MP000000016414507_437Wx649H_202307200139521.jpeg",
  },
  {
    id: 3,
    name: "Puma Epic Flip v2",
    cost: "₹699",
    discount: "15% OFF",
    image: "https://www.jiomart.com/images/product/original/460885793_black/epic-v2-thong-strap-flip-flops-model-460885793_black-0-202108090303.jpg?im=Resize=(500,630)",
  },
  {
    id: 4,
    name: "Crocs Crocband Flip",
    cost: "₹1,499",
    discount: "18% OFF",
    image: "https://m.media-amazon.com/images/I/71onuuIzG6L._UY300_.jpg",
  },
  {
    id: 5,
    name: "Reebok Active Flip-Flop",
    cost: "₹849",
    discount: "11% OFF",
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17238996/2022/3/7/8cd35d10-0822-40ff-88a5-b38ade919e291646636598711-Louis-Philippe-Men-Sandals-3301646636598403-1.jpg",
  },
  {
    id: 6,
    name: "Skechers Go Walk Flip",
    cost: "₹1,299",
    discount: "14% OFF",
    image: "https://images-cdn.ubuy.co.in/6879420c56aab806690c68df-skechers-women-s-go-walk-flex.jpg",
  },
  {
    id: 7,
    name: "Bata Hawaii Flip-Flop",
    cost: "₹399",
    discount: "20% OFF",
    image: "https://i.ytimg.com/vi/tZnFVQmGO6Y/maxresdefault.jpg",
  },
  {
    id: 8,
    name: "Sparx Rubber Flip-Flop",
    cost: "₹499",
    discount: "13% OFF",
    image: "https://relaxofootwear.com/cdn/shop/files/SF0099G-BKRD-11.jpg?v=1744269841&width=800",
  },
  {
    id: 9,
    name: "HRX by Hrithik Flip-Flop",
    cost: "₹599",
    discount: "9% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/slipper-flip-flop/r/2/o/-original-imagzvndhbghvh8r.jpeg?q=90&crop=false",
  },
  {
    id: 10,
    name: "Red Tape Comfort Flip",
    cost: "₹699",
    discount: "15% OFF",
    image: "https://img.tatacliq.com/images/i18//437Wx649H/MP000000022742763_437Wx649H_202406290118261.jpeg",
  },
  {
    id: 11,
    name: "Wildcraft Beach Flip",
    cost: "₹749",
    discount: "10% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/1616907/2017/3/8/11488971202507-Wildcraft-Men-Sandals-7901488971202545-5.jpg",
  },
  {
    id: 12,
    name: "Campus Chill Flip-Flop",
    cost: "₹549",
    discount: "17% OFF",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/slipper-flip-flop/3/e/g/6-gc-1032b-campus-blue-original-imaggnyhdg89ga34.jpeg?q=90&crop=false",
  },
  {
    id: 13,
    name: "Fila Classic Flip-Flop",
    cost: "₹799",
    discount: "12% OFF",
    image: "https://vntgsmthg.com/cdn/shop/files/FILASLIDES90_SWOOD_CANVAS16.jpg?v=1683482280&width=416",
  },
  {
    id: 14,
    name: "Tommy Hilfiger Flip-Flop",
    cost: "₹1,199",
    discount: "14% OFF",
    image: "https://u-mercari-images.mercdn.net/photos/m47786693450_1.jpg",
  },
  {
    id: 15,
    name: "Decathlon Nabaiji Flip",
    cost: "₹499",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrjoUTEOIO2NABRv6Tf-7Updrz9JWOcAyawA&s",
  },
];

const FlipFlops = () => {
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
      <Navbar />
      <Header />
      <h1 className="text-3xl font-bold mb-8 text-center"><br />
        Flip-Flop Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flipflops.map((item, idx) => (
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

export default FlipFlops;
