import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Sneakers", path: "/sneakers" },
  { name: "Slides", path: "/slides" },
  { name: "Flip Flops", path: "/flip-flops" },
 
];

const CasualShoesMain = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 flex flex-col items-center justify-center py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
          Casual Footwear Collection
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Step out in style with our comfortable and trendy casual shoes perfect for any occasion.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 w-full max-w-6xl">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => navigate(category.path)}
            className="group cursor-pointer bg-white/70 backdrop-blur-sm rounded-2xl shadow-md p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-white/90 hover:-translate-y-1 border border-gray-100"
          >
            <div className="w-16 h-16 mb-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">👟</span>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-1">{category.name}</h3>
            <span className="text-sm text-blue-600 font-medium">Shop Now →</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasualShoesMain;