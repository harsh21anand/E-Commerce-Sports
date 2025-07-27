import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Navbar from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const basketballShoes = [
  {
    id: 1,
    name: "Nike Air Zoom G.T. Cut",
    cost: "₹11,499",
    discount: "15% OFF",
    image: "https://static.nbastore.in/resized/500X500/735/nike-air-zoom-gt-cut-academy-ep-basketball-shoes-blackuniversity-red-black-67213b9918bc9.jpg?format=webp",
  },
  {
    id: 2,
    name: "Adidas Harden Vol. 5",
    cost: "₹10,199",
    discount: "18% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/13444956/2021/3/12/8a1c62fe-c216-4c64-b454-5713964e3d651615553718663-ADIDAS-Unisex-Black-Harden-Vol-5-Futurenatural-Basketball-Sh-1.jpg",
  },
  {
    id: 3,
    name: "Puma Clyde All-Pro",
    cost: "₹8,999",
    discount: "20% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZKE9GHIWuCsY19wQDsiCs8FPZCF2OiUnQA&s",
  },
  {
    id: 4,
    name: "Under Armour Curry Flow 8",
    cost: "₹12,299",
    discount: "22% OFF",
    image: "https://i.ebayimg.com/images/g/sTgAAOSwo1Zk1F7x/s-l1200.jpg",
  },
  {
    id: 5,
    name: "New Balance OMN1S",
    cost: "₹9,899",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDSR3IyhaKnZBbfWT3FeP-lDtiwZXqFcz_A&s",
  },
  {
    id: 6,
    name: "Anta KT6",
    cost: "₹7,499",
    discount: "25% OFF",
    image: "https://img.lazcdn.com/g/p/d6c8e059b8a5e72309864d9189ef6e57.jpg_720x720q80.jpg",
  },
  {
    id: 7,
    name: "Li-Ning Way of Wade 9",
    cost: "₹13,599",
    discount: "16% OFF",
    image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F08%2Fdwayne-wade-li-ning-way-of-wade-9-infinity-moment-release-date-0002.jpg?q=75&w=800&cbr=1&fit=max",
  },
  {
    id: 8,
    name: "Peak TP9-IV",
    cost: "₹6,799",
    discount: "21% OFF",
    image: "https://weartesters.com/uploads/2016/10/peak-tp9.4-vets-day-1.jpg",
  },
  {
    id: 9,
    name: "Reebok Shaq Attaq",
    cost: "₹8,499",
    discount: "17% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSazJsPm3-eAJlIVIpC1hA1wJRMzxRqgYtQ&s",
  },
  {
    id: 10,
    name: "Fila Grant Hill 2",
    cost: "₹5,999",
    discount: "20% OFF",
    image: "https://u-mercari-images.mercdn.net/photos/m95847576000_2.jpg",
  },
  {
    id: 11,
    name: "Converse All Star BB Evo",
    cost: "₹6,499",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnm4kytMhPOHdpYBnsZWOHBbZKW10NEQp5A&s",
  },
  {
    id: 12,
    name: "AND1 Attack 2.0",
    cost: "₹4,799",
    discount: "23% OFF",
    image: "https://m.media-amazon.com/images/I/41y-ntFn2eL._SY900_.jpg",
  },
  {
    id: 13,
    name: "Spalding Highlight",
    cost: "₹3,999",
    discount: "19% OFF",
    image: "https://assets.ajio.com/medias/sys_master/root/20240801/e5jh/66ab840d1d763220fa5402c2/-473Wx593H-469652206-black-MODEL.jpg",
  },
  {
    id: 14,
    name: "Peak Monster",
    cost: "₹5,899",
    discount: "18% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfq86_Ou5_ryGGrzTQgJWkkq6ExpT9epRLQz3PvvmH3GecUg3c6I97fwS10YGwjEztnDY&usqp=CAU",
  },
  {
    id: 15,
    name: "361° Big3 Future",
    cost: "₹7,299",
    discount: "24% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoDnwttAFY-d1ZEd4ZOIzYSusc45NOL-nr_q59JhvvBZh0fNPdrsdc4PJUmWJ3_U727Y&usqp=CAU",
  },
];

const BasketballShoes = () => {
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
        Basketball Shoes Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {basketballShoes.map((item, idx) => (
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

export default BasketballShoes;
