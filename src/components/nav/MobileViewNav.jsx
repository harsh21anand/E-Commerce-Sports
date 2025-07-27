import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const MobileViewNav = ({ isOpen, setIsOpen, menus, toRoutePath }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-gray-800 text-white space-y-3 px-4 py-4">
      {Object.keys(menus).map((item, idx) => (
        <div key={idx}>
          <button
            onClick={() =>
              activeMenu === item ? setActiveMenu(null) : setActiveMenu(item)
            }
            className="flex justify-between w-full py-2 hover:text-orange-400"
          >
            {item}
            <FaChevronDown
              className={`transition-transform ${
                activeMenu === item ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Submenus */}
          {activeMenu === item && (
            <div className="pl-4 space-y-1">
              {menus[item].map((menu, i) => (
                <div key={i}>
                  <h4 className="font-semibold mt-2">{menu.sport}</h4>
                  {menu.items.map((subItem, j) => (
                    <Link
                      to={typeof subItem === 'object' ? subItem.path : toRoutePath(subItem, menu.sport)}
                      key={j}
                      className="block pl-2 py-1 text-gray-300 hover:text-orange-400"
                      onClick={() => setIsOpen(false)} // Close on click
                    >
                      {typeof subItem === 'object' ? subItem.name : subItem}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileViewNav;
