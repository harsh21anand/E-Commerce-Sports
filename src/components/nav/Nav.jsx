import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaUserAlt, FaBars } from "react-icons/fa";
import MobileViewNav from "./MobileViewNav"; // Import mobile menu

function Nav() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const userMenuRef = useRef(null);

  // Load cart items from localStorage and set up storage event listener
  useEffect(() => {
    const loadCartItems = () => {
      try {
        const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedCart);
      } catch (error) {
        console.error('Error loading cart items:', error);
        setCartItems([]);
      }
    };

    // Load cart items on component mount
    loadCartItems();

    // Listen for storage events to update cart when changed in other tabs/windows
    const handleStorageChange = (e) => {
      if (e.key === 'cartItems') {
        loadCartItems();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!showUserMenu) return;
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showUserMenu]);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const menus = {
    "ALL SPORTS": [
      {
        sport: "Football",
        items: [
          "Balls",
          "Footwear",
          "Bags",
          "Teamwear",
          "Goalkeeper Gloves",
          "Shin Guards",
          "Stockings",
          "Training Equipments",
          "Accessories",
        ],
        icon: "⚽",
      },
      {
        sport: "Basketball",
        items: [
          "Balls",
          "Footwear",
          "Bags",
          "Teamwear",
          "Socks",
          "Equipments",
          "Accessories",
        ],
        icon: "🏀",
      },
      {
        sport: "Badminton",
        items: ["Footwear", "Bags", "Apparels", "Socks", "Accessories"],
        icon: "🏸",
      },
    ],
    APPAREL: [
      {
        sport: "Men",
        items: ["T-Shirts", "Shorts", "Jackets", "Tracksuits"],
        icon: "👕",
      },
      {
        sport: "Women",
        items: ["Tops", "Leggings", "Jackets", "Skirts"],
        icon: "👗",
      },
    ],
    FOOTWEAR: [
      {
        sport: "Sports Shoes",
        items: ["Running Shoes", "Football Boots", "Basketball Shoes"],
        icon: "👟",
      },
      {
        sport: "Casual Shoes",
        items: ["Sneakers", "Slides", "Flip Flops"],
        icon: "🩴",
      },
    ],
    "MUSCLE SUPPORT": [
      {
        sport: "Supports",
        items: ["Knee Support", "Elbow Support", "Ankle Support"],
        icon: "💪",
      },
    ],
    ACCESSORIES: [
      {
        sport: "Gear",
        items: ["Bags", "Socks", "Water Bottles", "Headbands"],
        icon: "🎒",
      },
    ],
    OFFERS: [
      {
        sport: "Discounts",
        items: [
          { name: "Clearance Sale", path: "/clearance-sale" },
          { name: "Buy 1 Get 1", path: "/buy1-get1" },
          { name: "Flat 50% Off", path: "/flat50-off" },
        ],
        icon: "🔥",
        link: "/offers",
      },
    ],
   
  };

  const toRoutePath = (subItem, sport = "") => {
    // Convert to kebab-case and handle special cases
    const path = subItem.toLowerCase().replace(/\s+/g, "-");
    const sportPrefix = sport.toLowerCase();

   
    // Special cases for specific sections
    if (sport === 'Gear') {
      if (subItem === 'Bags') return '/gear-bags';
      if (subItem === 'Socks') return '/gear-socks';
      if (subItem === 'Water Bottles') return '/water-bottles';
      if (subItem === 'Headbands') return '/headbands';
      return `/${subItem.toLowerCase().replace(/\s+/g, '-')}`;
    }
    
    // Handle Bags specifically for each sport
    if (subItem === 'Bags') {
      if (sport === 'Football') return '/FootBall/bags';
      if (sport === 'Basketball') return '/BasketBall/basketballbags';
      if (sport === 'Badminton') return '/Badminton/bags';
      return '/gear-bags'; // Default for other sections
    }
    
    // Handle Socks in other sections
    if (subItem === 'Socks') {
      if (sport === 'Basketball') return '/BasketBall/basketballsocks';
      if (sport === 'Badminton') return '/Badminton/socks';
      return '/gear-socks'; // Default for other sections
    }
    
    // Special handling for specific sports
    const sportRoutes = {
      'basketball': {
        'balls': 'basketballs',
        'footwear': 'basketballfootwear',
        'bags': 'basketballbags',
        'teamwear': 'basketballteamwear',
        'socks': 'basketballsocks',
        'equipments': 'basketballequipments',
        'accessories': 'basketballaccessories'
      },
      'badminton': {
        'footwear': 'footwear',
        'bags': 'Bags',
        'socks': 'socks',
        'accessories': 'accessories',
        'apparels': 'apparels'
      },
      'football': {
        'balls': 'balls',
        'footwear': 'footwear',
        'bags': 'bags',
        'teamwear': 'teamwear',
        'goalkeeper-gloves': 'goalkeeper-gloves',
        'shin-guards': 'shin-guards',
        'stockings': 'stockings',
        'equipments': 'equipments',
        'training-equipments': 'training-equipments',
        'accessories': 'accessories'
      },
      'men': {
        't-shirts': 'tshirts',
        'shorts': 'shorts',
        'jackets': 'jackets',
        'tracksuits': 'tracksuits'
      },
      'women': {
        'tops': 'tops',
        'leggings': 'leggings',
        'jackets': 'jackets',
        'skirts': 'skirts'
      },
      'sports-shoes': {
        'running-shoes': 'running-shoes',
        'football-boots': 'football-boots',
        'basketball-shoes': 'basketball-shoes'
      }
    };

    // Check if the sport has specific routes
    if (sportRoutes[sportPrefix] && sportRoutes[sportPrefix][path]) {
      // Special case for running shoes
      if (path === 'running-shoes') {
        return `/${path}`;
      }
      const basePath = sportPrefix === 'sports-shoes' ? '' : `/${sportPrefix}/`;
      return `${basePath}${sportRoutes[sportPrefix][path]}`;
    }

    // Fallback to default path
    return `/${path}`;
  };

  return (
    <nav className="bg-gray-900 text-white shadow relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
         <img src={logo} alt="Logo" className="h-8 w-8" />
         <h1 className="text-xl font-bold">Sports_Hub</h1>
        </Link>


        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8 ml-20">
          {Object.keys(menus).map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
            {item === "OFFERS" ? (
             <Link
                to={menus["OFFERS"][0].link}
                className="hover:text-orange-400 transition-colors duration-300 inline-flex items-center justify-center align-middle leading-tight"
                >
              {item}
               </Link>
               ) : (
             <>
             <button className="hover:text-orange-400 transition-colors duration-300 inline-flex items-center justify-center align-middle leading-tight">
           {item}
         </button>


                  {/* Mega Menu */}
                  {activeMenu === item && (
  <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-lg p-6 flex gap-10 transition-all duration-300 w-[360px]">

                      {menus[item].map((menu, i) => (
                        <div key={i} className="flex flex-col">
                          <h3 className="font-bold mb-2 flex items-center gap-2">
                            <span className="text-2xl">{menu.icon}</span>
                            {menu.sport}
                          </h3>
                          {menu.items.map((subItem, j) => (
                            <Link
                              to={
                                typeof subItem === "object"
                                  ? subItem.path
                                  : toRoutePath(subItem, menu.sport)
                              }
                              key={j}
                              className="text-gray-700 hover:text-orange-500 transition-colors duration-200 text-sm"
                            >
                              {typeof subItem === "object"
                                ? subItem.name
                                : subItem}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Search, User, Cart, Hamburger */}
        <div className="flex items-center gap-4 text-xl">
          {/* Search */}
          <Link to="/search" className="hover:text-orange-400">
          <CiSearch />
           </Link>

          {/* User */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setShowUserMenu((prev) => !prev)}
              className="hover:text-orange-400"
            >
              <FaUserAlt />
            </button>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md py-2 z-50">
                <a
                  href="/login"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Login / Register
                </a>
                {/*My Account*/}
                <Link
                to="/myaccount"
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                My Account
               </Link>

              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="hover:text-orange-400 relative">
            <FiShoppingCart />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
                {cartItems.reduce((total, item) => total + (item.qty || 1), 0)}
              </span>
            )}
          </Link>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileViewNav
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
        menus={menus}
        toRoutePath={toRoutePath}
      />
    </nav>
  );
}

export default Nav;
