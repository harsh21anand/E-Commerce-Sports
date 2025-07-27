import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const basketballBags = [
  {
    id: 1,
    name: "Nike Hoops Elite Backpack",
    cost: "₹3,999",
    discount: "12% OFF",
    image: "https://cdn.shopify.com/s/files/1/0603/3031/1875/files/main-square_ce2b72ad-ed56-4b06-a8ea-25333fcd25c7.jpg?v=1709017129",
  },
  {
    id: 2,
    name: "Adidas Creator Backpack",
    cost: "₹3,499",
    discount: "10% OFF",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/88c1bdd6e7934feeb3d85f4c175a8316_9366/Excel_7_Backpack_White_IU7689_01_00_standard.jpg",
  },
  {
    id: 3,
    name: "Puma Training Pro Bag",
    cost: "₹2,799",
    discount: "15% OFF",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/puma-training-daily-backpack-35l-all-ages-unisex-training-mens-744570-black-one-size-164673558-qigmv.jpg",
  },
  {
    id: 4,
    name: "Under Armour Undeniable 5.0",
    cost: "₹4,299",
    discount: "18% OFF",
    image: "https://m.media-amazon.com/images/I/51CzgAOIMRL._UY1100_.jpg",
  },
  {
    id: 5,
    name: "Reebok Sport Style Bag",
    cost: "₹2,999",
    discount: "14% OFF",
    image: "https://m.media-amazon.com/images/I/719JUE6UhmL._UY1100_.jpg",
  },
  {
    id: 6,
    name: "Wilson Evolution Backpack",
    cost: "₹3,899",
    discount: "16% OFF",
    image: "https://www.wilson.com/en-gb/media/catalog/product/article_images/WTB18419B_/WTB18419B__b33d631c9e0a79bacb5e4c65476224bf.png",
  },
  {
    id: 7,
    name: "Spalding TF Backpack",
    cost: "₹2,599",
    discount: "20% OFF",
    image: "https://i0.wp.com/teamline.lu/wp-content/uploads/2019/10/spalding-backpack-01.jpg",
  },
  {
    id: 8,
    name: "Nike Sportswear RPM Bag",
    cost: "₹5,199",
    discount: "11% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmPPk9AH7J84wuhStIODVxhyvsv5pNh140w&s",
  },
  {
    id: 9,
    name: "Adidas Defender III",
    cost: "₹3,099",
    discount: "17% OFF",
    image: "https://m.media-amazon.com/images/I/81ELUJm162L._SL1500_.jpg",
  },
  {
    id: 10,
    name: "Puma Buzz Backpack",
    cost: "₹1,999",
    discount: "13% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2321157/2017/12/8/11512718866232-Puma-Men-Backpacks-9151512718866055-1.jpg",
  },
  {
    id: 11,
    name: "Under Armour Contain Duo",
    cost: "₹4,799",
    discount: "9% OFF",
    image: "https://m.media-amazon.com/images/I/61lIK7bIQmL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 12,
    name: "Wilson Tournament Bag",
    cost: "₹2,799",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAnMlSbEUGS3HWy6AsZ_k7MG0pSBityPdmRRTYzdGdVmOA39yh40fw91D_xwcItsmgOg&usqp=CAU",
  },
  {
    id: 13,
    name: "Spalding Highlight Backpack",
    cost: "₹3,299",
    discount: "14% OFF",
    image: "https://m.media-amazon.com/images/I/71QNmAQN9ML._UY1000_.jpg",
  },
  {
    id: 14,
    name: "Nike Hoops Utility Duffel",
    cost: "₹4,599",
    discount: "15% OFF",
    image: "https://static.nike.com/a/images/t_default/203a638b-7505-4bbf-a618-f1ffd180a510/NK+UTILITY+M+POWER+DUFF-GFX.png",
  },
  {
    id: 15,
    name: "Adidas Basketball Bag Pro",
    cost: "₹5,099",
    discount: "12% OFF",
    image: "https://d3pnpe87i1fkwu.cloudfront.net/wp-content/uploads/2018/04/Best-Basketball-Backpack-1.jpg",
  },
];

const BasketBallBags = () => {
  const navigate = useNavigate();

  const handleAddToCart = (bag) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingItemIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === bag.id
    );

    if (existingItemIndex >= 0) {
      existingCart[existingItemIndex].qty =
        (existingCart[existingItemIndex].qty || 1) + 1;
    } else {
      existingCart.push({ ...bag, qty: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    navigate("/cart");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Navbar />
     
      <h1 className="text-3xl font-bold mb-8 text-center"><br />
        Basketball Bags Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {basketballBags.map((item, idx) => (
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

export default BasketBallBags;
