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
     <button
        onClick={() => navigate("/")}
        className="flex items-center mb-6 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-lg font-semibold shadow"
        style={{ maxWidth: 200 }}
      >
        <span className="mr-2 text-xl">&larr;</span> Back
      </button>
      
      
      {/* Clearance Sale Section */}
      <div 
        className={`${offerSectionClasses}`}
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
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
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1519764622345-2347931d7d21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
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
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
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
