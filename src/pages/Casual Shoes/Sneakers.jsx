import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const sneakers = [
  {
    id: 1,
    name: "Nike Air Force 1",
    cost: "₹7,999",
    discount: "15% OFF",
    image: "https://knickgasm.com/cdn/shop/files/Nike-Air-Force-1-x-Astro-Drip-Knickgasm-2129.jpg?v=1751278385",
  },
  {
    id: 2,
    name: "Adidas Stan Smith",
    cost: "₹6,499",
    discount: "12% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPXdkDpiTS5LJfSi9HmkPtAKnQlRGueW49FgMSIgzOqE7EG1QAtlL5kM4GJ4TIK2qse8&usqp=CAU",
  },
  {
    id: 3,
    name: "Puma RS-X",
    cost: "₹5,299",
    discount: "18% OFF",
    image: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-326409,resizemode-75,msid-68843860/magazines/panache/puma-rs-x-trophies-review-comfortable-running-shoes-perfect-for-workouts-parties.jpg",
  },
  {
    id: 4,
    name: "Converse Chuck Taylor",
    cost: "₹3,999",
    discount: "20% OFF",
    image: "https://www.converse.in/media/catalog/product/a/1/a10439c_a_107x1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
  },
  {
    id: 5,
    name: "Vans Old Skool",
    cost: "₹4,499",
    discount: "14% OFF",
    image: "https://5.imimg.com/data5/ANDROID/Default/2023/1/OW/CO/WQ/154736600/product-jpeg.jpg",
  },
  {
    id: 6,
    name: "New Balance 574",
    cost: "₹5,799",
    discount: "17% OFF",
    image: "https://m.media-amazon.com/images/I/41bCv16k+kL._AC_.jpg",
  },
  {
    id: 7,
    name: "Fila Disruptor II",
    cost: "₹3,699",
    discount: "19% OFF",
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/30726244/2025/1/9/4213f1cb-eb2c-4a1b-8047-0be0db02d1ac1736417538962-FILA-Women-DISRUPTOR-II-WEDGE-Textured-Sneakers-970173641753-1.jpg",
  },
  {
    id: 8,
    name: "Reebok Classic Leather",
    cost: "₹4,199",
    discount: "16% OFF",
    image: "https://www.sneakerlab.com/cdn/shop/articles/Untitled_design_69.png?v=1712757467",
  },
  {
    id: 9,
    name: "Under Armour HOVR Phantom",
    cost: "₹6,899",
    discount: "22% OFF",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/8/439497959/XC/IV/FR/102860792/whatsapp-image-2024-07-31-at-8-26-08-pm-500x500.jpeg",
  },
  {
    id: 10,
    name: "ASICS Gel-Lyte III",
    cost: "₹7,299",
    discount: "13% OFF",
    image: "https://cdn.sanity.io/images/c1chvb1i/production/360ede1729d93884c9466150f66a6fc649e2a86d-640x426.jpg?w=400&h=266&q=75&fit=max&auto=format",
  },
  {
    id: 11,
    name: "Skechers D'Lites",
    cost: "₹5,099",
    discount: "21% OFF",
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/11622332/2020/3/18/b6a0bed0-af83-45c0-ad48-4263709747fa1584533642517CasualShoesSkechersMenCasualShoesSkechersMenCasualShoesSkech1.jpg",
  },
  {
    id: 12,
    name: "Hummel Slimmer Stadil",
    cost: "₹3,799",
    discount: "18% OFF",
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29670574/2024/5/22/d790c1ef-9e08-4bcd-9df6-f59a51e275301716353069425hummelMenColourblockedPUSneakers1.jpg",
  },
  {
    id: 13,
    name: "K-Swiss Classic VN",
    cost: "₹4,599",
    discount: "15% OFF",
    image: "https://di2ponv0v5otw.cloudfront.net/posts/2023/04/05/642e2ad11741be54f155847e/m_wp_642e2b199464f31da6f4762e.webp",
  },
  {
    id: 14,
    name: "Le Coq Sportif Courtset",
    cost: "₹3,299",
    discount: "19% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbti9dWH_BL6ulo7RpXDmbGPTsuYkPv_XiFg&s",
  },
  {
    id: 15,
    name: "Diadora Game L",
    cost: "₹4,899",
    discount: "20% OFF",
    image: "https://i.pinimg.com/736x/26/14/48/261448572dd8b752e731558e0256dd4e.jpg",
  },
];

const Sneakers = () => {
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
        Sneakers Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sneakers.map((item, idx) => (
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

export default Sneakers;
