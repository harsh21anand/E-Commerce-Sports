import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const badmintonSocks = [
  {
    id: 1,
    name: "Yonex Nanoray 18i",
    cost: "₹2,499",
    discount: "15% OFF",
    image: "https://m.media-amazon.com/images/I/71nNHk9N0ML._SX522_.jpg",
  },
  {
    id: 2,
    name: "Li-Ning G-Force Superlite",
    cost: "₹3,199",
    discount: "18% OFF",
    image: "https://in.lining.studio/cdn/shop/files/1_49c75d30-89ff-4a28-8b94-5b30c3fd9e99.jpg?v=1741132761&width=1946",
  },
  {
    id: 3,
    name: "Victor JetSpeed S12",
    cost: "₹7,499",
    discount: "20% OFF",
    image: "https://cdn.shopify.com/s/files/1/0503/5572/0947/products/JS-S12-F-BK_1800x1800.jpg?v=1638953686",
  },
  {
    id: 4,
    name: "Adidas Spieler E05",
    cost: "₹2,999",
    discount: "10% OFF",
    image: "https://www.badmintonwarehouse.com/cdn/shop/products/adidasspielere05_1024x1024.jpg?v=1572918294",
  },
  {
    id: 5,
    name: "Puma Elite Graphite Racket",
    cost: "₹1,899",
    discount: "17% OFF",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/racquet/l/z/g/g3-77-strung-1-elite-series-high-modulus-graphite-badminton-original-imaggr2jzq7gykhz.jpeg?q=70",
  },
  {
    id: 6,
    name: "Yonex Astrox 99 Pro",
    cost: "₹13,499",
    discount: "25% OFF",
    image: "https://www.yonex.com/media/catalog/product/cache/0/image/1800x/040ec09b1e35df139433887a97daa66f/a/s/astrox_99_pro_kurenai_4u5_front_1.jpg",
  },
  {
    id: 7,
    name: "Li-Ning Windstorm 72",
    cost: "₹4,999",
    discount: "16% OFF",
    image: "https://in.lining.studio/cdn/shop/products/ws72-blue_a88d0c44-e4c7-462b-bd1f-2edcc999e850.jpg?v=1643029873&width=1946",
  },
  {
    id: 8,
    name: "Victor Thruster K Falcon",
    cost: "₹9,999",
    discount: "22% OFF",
    image: "https://cdn.shopify.com/s/files/1/0503/5572/0947/products/THRUSTER-K-FALCON-S-F-BLACK-GOLD_1800x1800.jpg?v=1638953035",
  },
  {
    id: 9,
    name: "Adidas Wucht P8",
    cost: "₹5,499",
    discount: "19% OFF",
    image: "https://badmintonclick.com/wp-content/uploads/2018/10/adidas-wucht-p8-3.jpg",
  },
  {
    id: 10,
    name: "Puma Velocity 700 Racket",
    cost: "₹1,499",
    discount: "12% OFF",
    image: "https://rukminim2.flixcart.com/image/832/832/kz8qsnk0/racquet/k/k/l/g3-85-strung-1-velocity-700-carbon-graphite-badminton-racket-original-imagba2ajvrnkrmg.jpeg?q=70",
  },
  {
    id: 11,
    name: "Yonex Voltric Z Force II",
    cost: "₹6,499",
    discount: "23% OFF",
    image: "https://www.yonex.com/media/catalog/product/cache/0/image/1800x/040ec09b1e35df139433887a97daa66f/v/t/vtzf2_black_1.jpg",
  },
  {
    id: 12,
    name: "Li-Ning 3D Calibar 900",
    cost: "₹10,999",
    discount: "20% OFF",
    image: "https://cdn.shopify.com/s/files/1/0503/5572/0947/products/3D-CALIBAR-900B-C-RED_1800x1800.jpg?v=1638951497",
  },
  {
    id: 13,
    name: "Victor DriveX 9X",
    cost: "₹7,299",
    discount: "15% OFF",
    image: "https://badmintonhq.co.uk/cdn/shop/products/Victor_DriveX_9X_S__1.jpg?v=1643279623",
  },
  {
    id: 14,
    name: "Adidas Spieler A09",
    cost: "₹3,199",
    discount: "11% OFF",
    image: "https://www.sportsshowroom.in/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/A/I/AIMY003_000__00.jpg",
  },
  {
    id: 15,
    name: "Puma Strike Pro Racket",
    cost: "₹1,299",
    discount: "18% OFF",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/racquet/h/f/n/g3-80-unstrung-1-strike-pro-carbon-badminton-racket-with-full-original-imagqzyxyftpm7ng.jpeg?q=70",
  },
];

const BadmintonSocks = () => {
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

      <h1 className="text-3xl font-bold mt-3mb-8 text-center"><br />
        Badminton Socks Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {badmintonSocks.map((item, idx) => (
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
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default BadmintonSocks;
