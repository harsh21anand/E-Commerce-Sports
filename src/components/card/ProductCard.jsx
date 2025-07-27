import React from "react";

const ProductCard = ({ image, title, cost,  onClick }) => (
  <button
    onClick={onClick}
    className="relative w-full h-[350px] rounded-lg overflow-hidden group focus:outline-none bg-white shadow hover:shadow-lg transition"
    style={{ minWidth: 250 }}
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-2/3 object-contain bg-white"
    />
    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-white via-white/80 to-transparent">
      <span className="block text-lg font-semibold text-gray-900 truncate">{title}</span>
      <span className="block text-xl font-bold text-red-600 mt-1">{cost}</span>
    </div>
  </button>
);

export default ProductCard;