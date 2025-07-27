import React from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../../components/card/ShopCard";
import Header from "../../components/header/Header";
import Navbar from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const tops = [
  {
    id: 1,
    name: "Nike Pro Dri-FIT Top",
    cost: "₹2,199",
    discount: "12% OFF",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ccada99d-f8aa-4fb1-93d3-6cc72f903f48/AS+W+NP+DF+SHINE+CROP+TOP.png",
  },
  {
    id: 2,
    name: "Adidas Aeroready Tank",
    cost: "₹1,799",
    discount: "15% OFF",
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/20468980/2023/9/8/1d8cdf72-a48a-4cf6-9a68-489a7946166c1694152999429-ADIDAS-Own-The-Run-Running-AEROREADY-Tank-Top-79116941529991-1.jpg",
  },
  {
    id: 3,
    name: "Puma Studio Ribbed Tee",
    cost: "₹1,599",
    discount: "10% OFF",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/523963/01/bv/fnd/IND/fmt/png/STUDIO-UNWIND-Women's-Long-Sleeve-Training-T-shirt",
  },
  {
    id: 4,
    name: "Under Armour Tech V-Neck",
    cost: "₹2,399",
    discount: "18% OFF",
    image: "https://www.underarmour.in/media/catalog/product/cache/a6c9600f6d89dc76028bfa07e5e1eb9a/1/3/1384227-120250527094259620.jpg",
  },
  {
    id: 5,
    name: "HRX Activewear Top",
    cost: "₹1,299",
    discount: "14% OFF",
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10565528/2023/8/29/503391ba-3e26-4d19-921d-24a66de9a5fe1693310526364HrxByHrithikRoshanRedRapid-DryRunningTankTop1.jpg",
  },
  {
    id: 6,
    name: "Decathlon Domyos Tank",
    cost: "₹999",
    discount: "20% OFF",
    image: "https://contents.mediadecathlon.com/p13710/54ddb86d0d4cae188ac483bf51e97bb0/p13710.jpg",
  },
  {
    id: 7,
    name: "ASICS Court T-Shirt",
    cost: "₹1,799",
    discount: "13% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24751022/2023/8/31/2390e96d-f2ab-4d62-8cba-4e1603dfdbd71693481477373ASICSCourtGraphicYellowWomensT-shirts1.jpg",
  },
  {
    id: 8,
    name: "Reebok Training Tee",
    cost: "₹1,499",
    discount: "17% OFF",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/SEPTEMBER/4/qazolPMu_c0d69dee1f87432d9150b1d560aa5a6e.jpg",
  },
  {
    id: 9,
    name: "Fila Classic Crop Top",
    cost: "₹1,199",
    discount: "11% OFF",
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/26561208/2023/12/21/20a69d74-3439-448c-b296-81106b1de28f1703104400313FILABlackBlackCottonTop1.jpg",
  },
  {
    id: 10,
    name: "Yonex Active Top",
    cost: "₹1,699",
    discount: "15% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKQ4ZE84FkXUcBC1EswrH_rpaN7v9TtSKaw&s",
  },
  {
    id: 11,
    name: "Li-Ning Courtwear Top",
    cost: "₹1,499",
    discount: "19% OFF",
    image: "https://img2.cdn.91app.com.my/webapi/imagesV3/Cropped/SalePage/323007/0/638815266531370000?v=1",
  },
  {
    id: 12,
    name: "Hummel Poly Top",
    cost: "₹1,399",
    discount: "21% OFF",
    image: "https://hummel.net.in/cdn/shop/files/2_9f06846c-a57d-48e7-95b6-23a7662eb070.png?v=1750414577",
  },
  {
    id: 13,
    name: "Columbia Ridge Top",
    cost: "₹1,999",
    discount: "9% OFF",
    image: "https://www.columbiasportswear.co.in/cdn/shop/files/AK8932-686_1.jpg?v=1743237986",
  },
  {
    id: 14,
    name: "Wildcraft Breeze Top",
    cost: "₹1,299",
    discount: "14% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6wq9ua-lBRRuwKkSWFEGhTZeLPgRU0WpIA&s",
  },
  {
    id: 15,
    name: "New Balance Athletics Top",
    cost: "₹1,799",
    discount: "13% OFF",
    image: "https://images.bike24.com/i/mb/3c/cd/a5/new-balance-tank-top-women-rose-sugar-heather--6-1784943.jpg",
  },
];

const Tops = () => {
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
        Women’s Tops Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tops.map((item, idx) => (
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

export default Tops;
