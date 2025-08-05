import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../components/nav/Nav';

const Offers = () => {
  const navigate = useNavigate();
  // Common classes for all offer sections
  const offerSectionClasses = "relative h-[400px] rounded-xl overflow-hidden bg-cover bg-center flex items-end p-8 text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg";
  const offerContentClasses = "relative z-10 w-full";
  const titleClasses = "text-4xl font-bold mb-4 text-white drop-shadow-md";
  const descriptionClasses = "text-xl mb-6 max-w-2xl text-white drop-shadow-md";
  const buttonClasses = "absolute bottom-8 right-8 px-8 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg";

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
       <Header />
       <Navbar />
     
      
  {/* Clearance Sale Section */}
  <div 
        className={`${offerSectionClasses}`}
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(https://www.shutterstock.com/image-vector/clearance-header-banner-template-promotion-260nw-2100113311.jpg)'
        }}
      >
        <div className={offerContentClasses}>
          <h2 className={titleClasses}>Clearance Sale</h2>
          <p className={descriptionClasses}>Up to 70% off on selected items. Limited time offer!</p>
          <Link to="/clearance-sale" className={buttonClasses}>
            Shop Now
          </Link>
        </div>
      </div>




      {/* Buy 1 Get 1 Section */}
      <div 
        className={`${offerSectionClasses}`}
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(https://png.pngtree.com/thumb_back/fh260/background/20211128/pngtree-buy-one-get-free-banner-image_917768.png)'
        }}
      >
        <div className={offerContentClasses}>
          <h2 className={titleClasses}>Buy 1 Get 1 Free</h2>
          <p className={descriptionClasses}>Buy any item and get another one absolutely free!</p>
          <Link to="/buy1-get1" className={buttonClasses}>
            Shop Now
          </Link>
        </div>
      </div>

      {/* Flat 50% Off Section */}
      <div 
        className={`${offerSectionClasses}`}
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(https://pbs.twimg.com/media/Dl0UM_CWsAAx0xk.jpg)'
        }}
      >
        <div className={offerContentClasses}>
          <h2 className={titleClasses}>Flat 50% Off</h2>
          <p className={descriptionClasses}>Get 50% off on your first purchase. Use code: SPORTS50</p>
          <Link to="/flat50-off" className={buttonClasses}>
            Shop Now
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Offers;
