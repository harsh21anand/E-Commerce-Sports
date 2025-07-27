import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const basketballAccessories = [
  {
    id: 1,
    name: "Nike Elite Headband",
    cost: "₹799",
    discount: "10% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReglY8eC0uEUF-vzYPEbk17FF3q634czImtw&s",
  },
  {
    id: 2,
    name: "Adidas Wristbands (Pair)",
    cost: "₹499",
    discount: "12% OFF",
    image: "https://m.media-amazon.com/images/I/71dgCnALeNL.jpg",
  },
  {
    id: 3,
    name: "Spalding Water Bottle",
    cost: "₹699",
    discount: "8% OFF",
    image: "https://res.cloudinary.com/russell-corp-australia-pty-ltd/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/catalog/product/image/157348fa/water-bottle.jpg?_i=AB",
  },
  {
    id: 4,
    name: "Puma Sports Cap",
    cost: "₹1,199",
    discount: "15% OFF",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/3/399564973/XB/NQ/CL/103208303/puma-green-polyester-sports-cap.jpg",
  },
  {
    id: 5,
    name: "Wilson Basketball Net",
    cost: "₹1,599",
    discount: "11% OFF",
    image: "https://images-eu.ssl-images-amazon.com/images/I/81b0-LOT-YL._AC_UL495_SR435,495_.jpg",
  },
  {
    id: 6,
    name: "Molten Ball Bag (6 Balls)",
    cost: "₹2,499",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIQSQALGuVF0B8WucVmtgqvcoPO-qqKB7eg&s",
  },
  {
    id: 7,
    name: "Under Armour Duffel Bag",
    cost: "₹3,199",
    discount: "13% OFF",
    image: "https://m.media-amazon.com/images/I/41umDCG2udL._AC_SS300_.jpg",
  },
  {
    id: 8,
    name: "Nike Arm Sleeves",
    cost: "₹1,299",
    discount: "20% OFF",
    image: "https://images-cdn.ubuy.co.in/6560cc12a474643d68157e0a-nike-dri-fit-uv-solar-arm-sleeves-1.jpg",
  },
  {
    id: 9,
    name: "Adidas Shoe Bag",
    cost: "₹899",
    discount: "9% OFF",
    image: "https://m.media-amazon.com/images/I/81uigupJ+SL._UY1100_.jpg",
  },
  {
    id: 10,
    name: "Spalding Ball Pump",
    cost: "₹599",
    discount: "18% OFF",
    image: "https://m.media-amazon.com/images/I/71RIHeN-oRL._UF894,1000_QL80_.jpg",
  },
  {
    id: 11,
    name: "Reebok Cooling Towel",
    cost: "₹499",
    discount: "10% OFF",
    image: "https://www.tradeinn.com/f/13678/136783840/reebok-active-enhanced-towel.webp",
  },
  {
    id: 12,
    name: "Wilson Grip Enhancer",
    cost: "₹299",
    discount: "15% OFF",
    image: "https://m.media-amazon.com/images/I/61JqTrDsGML.jpg",
  },
  {
    id: 13,
    name: "Puma Sports Socks (3 Pack)",
    cost: "₹699",
    discount: "12% OFF",
    image: "https://images-static.nykaa.com/media/catalog/product/6/2/62eb17468539301_1.jpg?tr=w-500",
  },
  {
    id: 14,
    name: "Nike Drawstring Bag",
    cost: "₹1,099",
    discount: "17% OFF",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a73cc4e9-bae0-4df0-a4b8-07cb515dde0d/NK+ACDMY+GMSK.png",
  },
  {
    id: 15,
    name: "Molten Training Stopwatch",
    cost: "₹1,499",
    discount: "16% OFF",
    image: "https://m.media-amazon.com/images/I/71VFtoP+6fL._UF1000,1000_QL80_.jpg",
  },
];

const BasketBallAccessories = () => {
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
        Basketball Accessories Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {basketballAccessories.map((item, idx) => (
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

export default BasketBallAccessories;
