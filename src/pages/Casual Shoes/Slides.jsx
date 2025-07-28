import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const slides = [
  {
    id: 1,
    name: "Nike Benassi JDI",
    cost: "₹1,799",
    discount: "10% OFF",
    image: "https://static.ftshp.digital/img/p/4/6/6/5/0/46650-full_product.jpg",
  },
  {
    id: 2,
    name: "Adidas Adilette Comfort",
    cost: "₹2,199",
    discount: "12% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScz7UxDNcN6rWTaoNrrHRLYxLJMVXo1ezqNA&s",
  },
  {
    id: 3,
    name: "Puma Leadcat Slide",
    cost: "₹1,599",
    discount: "15% OFF",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/slipper-flip-flop/y/e/k/-original-imaghtdhax9gk7rw.jpeg?q=90&crop=false",
  },
  {
    id: 4,
    name: "Under Armour Locker III",
    cost: "₹1,299",
    discount: "14% OFF",
    image: "https://hockeyclub.ru/upload/resize_cache/iblock/02c/900_900_1/IMG_8186.jpg",
  },
  {
    id: 5,
    name: "Reebok Energylux Slide",
    cost: "₹1,499",
    discount: "11% OFF",
    image: "https://img.tatacliq.com/images/i11/437Wx649H/MP000000018024260_437Wx649H_202306210208401.jpeg",
  },
  {
    id: 6,
    name: "Fila Drifter Slide",
    cost: "₹1,199",
    discount: "13% OFF",
    image: "https://i.ebayimg.com/images/g/QfQAAOSwf-dg-dK7/s-l1200.webp",
  },
  {
    id: 7,
    name: "Skechers Go Walk Slide",
    cost: "₹2,399",
    discount: "16% OFF",
    image: "https://kaarastore.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-23-at-11.30.09-PM-1.jpeg",
  },
  {
    id: 8,
    name: "Decathlon Nabaiji Slide",
    cost: "₹799",
    discount: "18% OFF",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/sandal/t/3/h/-original-imaggcb3b7sgbsx2.jpeg?q=20&crop=false",
  },
  {
    id: 9,
    name: "Wildcraft Flip Slide",
    cost: "₹999",
    discount: "9% OFF",
    image: "https://wildcraft.com/media/catalog/product/4/_/4_1677.jpg?width=960",
  },
  {
    id: 10,
    name: "Crocs Classic Slide",
    cost: "₹2,699",
    discount: "20% OFF",
    image: "https://www.jiomart.com/images/product/original/469062165_blue/classic-crocs-slides-model-469062165_blue-0-202202191238.jpg?im=Resize=(1000,1000)",
  },
  {
    id: 11,
    name: "HRX Pool Slide",
    cost: "₹899",
    discount: "14% OFF",
    image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/6/k2p7WIRj_aab9c7dd768244a0a6f9bd2afef9df8d.jpg",
  },
  {
    id: 12,
    name: "Campus Poolside Slides",
    cost: "₹699",
    discount: "11% OFF",
    image: "https://img.tatacliq.com/images/i24//437Wx649H/MP000000026706960_437Wx649H_202505220846124.jpeg",
  },
  {
    id: 13,
    name: "Red Tape Casual Slide",
    cost: "₹1,399",
    discount: "15% OFF",
    image: "https://redtape.com/cdn/shop/files/RFF1216_1_jpg.jpg?v=1751017431",
  },
  {
    id: 14,
    name: "Sparx Comfort Slide",
    cost: "₹849",
    discount: "10% OFF",
    image: "https://www.jiomart.com/images/product/original/rvnljsdrsp/sparx-black-flip-flops-slides-women-sfl-145-product-images-rvnljsdrsp-7-202308012018.jpg?im=Resize=(500,630)",
  },
  {
    id: 15,
    name: "Bata Power Slide",
    cost: "₹999",
    discount: "12% OFF",
    image: "https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dw651975e7/images/large/8716656_7.jpeg?sw=620%20620w",
  },
];

const Slides = () => {
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
        Slides Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {slides.map((item, idx) => (
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

export default Slides;
