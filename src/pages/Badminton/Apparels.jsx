import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const badmintonApparels = [
  {
    id: 1,
    name: "Yonex Tournament T-Shirt",
    cost: "₹1,499",
    discount: "10% OFF",
    image: "https://m.media-amazon.com/images/I/81ced7l9F+L.jpg",
  },
  {
    id: 2,
    name: "Li-Ning Shorts Pro",
    cost: "₹999",
    discount: "15% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNkI3z4ssQ7tvveH3jTW1MDOcngELjFziKA&s",
  },
  {
    id: 3,
    name: "Victor Elite Tracksuit",
    cost: "₹3,199",
    discount: "12% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mVg_chHR4SXGwyUqEF-oNWiu9-mt07wIcQ&s",
  },
  {
    id: 4,
    name: "Adidas Badminton Polo",
    cost: "₹1,799",
    discount: "20% OFF",
    image: "https://www.directbadminton.co.uk/images/extralarge/adi_IZ3220.jpg",
  },
  {
    id: 5,
    name: "Puma Training Jersey",
    cost: "₹1,299",
    discount: "18% OFF",
    image: "https://www.jiomart.com/images/product/original/464716565006/puma-men-blue-polyester-mcfc-training-jersey-product-images-464716565006-0-202406211306.jpg?im=Resize=(500,630)",
  },
  {
    id: 6,
    name: "Li-Ning Women's Tank Top",
    cost: "₹1,099",
    discount: "14% OFF",
    image: "https://sw3295.sfstatic.io/upload_dir/shop/_thumbs/Badminton-top-kvinder-li-ning-blaa-lilla-avsk016-1--1.w800.h800.fill.jpg",
  },
  {
    id: 7,
    name: "Yonex Hoodie",
    cost: "₹2,499",
    discount: "22% OFF",
    image: "https://m.media-amazon.com/images/I/51rzSfKyh7L._UY1100_.jpg",
  },
  {
    id: 8,
    name: "Victor Sleeveless T-Shirt",
    cost: "₹899",
    discount: "25% OFF",
    image: "https://m.media-amazon.com/images/I/31q7aSMULqL._UF894,1000_QL80_.jpg",
  },
  {
    id: 9,
    name: "Adidas Warm-Up Pants",
    cost: "₹2,099",
    discount: "16% OFF",
    image: "https://playr.in/cdn/shop/files/adidas-men-adult-training-solid-track-pants-polyester-regular-fit-for-all-season-902255_1800x1800.jpg?v=1746536369",
  },
  {
    id: 10,
    name: "Puma Court Shorts",
    cost: "₹1,099",
    discount: "19% OFF",
    image: "https://assets.ajio.com/medias/sys_master/root/20220322/cYV3/6238d52caeb26921afe9536d/-473Wx593H-469128327-black-MODEL.jpg",
  },
  {
    id: 11,
    name: "Yonex Premium Jersey",
    cost: "₹1,799",
    discount: "17% OFF",
    image: "https://aidanglobal.com/wp-content/uploads/2022/08/9-front-2.jpg",
  },
  {
    id: 12,
    name: "Li-Ning Windbreaker",
    cost: "₹2,599",
    discount: "11% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzB1i5QXNfuWYWtBgBs8LgxidE5y2cnCQp_w&s",
  },
  {
    id: 13,
    name: "Victor Zip Jacket",
    cost: "₹3,099",
    discount: "23% OFF",
    image: "https://www.victorsport.com/files/en_us/product/list_117895_20240706014516.jpg",
  },
  {
    id: 14,
    name: "Adidas Badminton Skirt",
    cost: "₹1,399",
    discount: "20% OFF",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4f9da80d0fba43969453b428c0569804_9366/Tennis_Pro_HEAT.RDY_Match_Skirt_Blue_IX1549_21_model.jpg",
  },
  {
    id: 15,
    name: "Puma Performance Tee",
    cost: "₹1,199",
    discount: "13% OFF",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/527083/45/fnd/IND/fmt/png/Essentials-Boys-Performance-Tee",
  },
];

const BadmintonApparels = () => {
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
        Badminton Apparels Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {badmintonApparels.map((item, idx) => (
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

export default BadmintonApparels;
