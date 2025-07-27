import React from "react";

const ShopCard = ({ image, name, cost, discount, onAddToCart }) => (
  <div
    className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition"
  >
    <img
      src={image}
      alt={name}
      className="w-60 h-60 object-cover mb-4 rounded"
    />
    <h2 className="text-lg font-semibold mb-2">{name}</h2>
    <div className="flex items-center space-x-2 mb-2">
      <span className="text-xl font-bold text-green-600">{cost}</span>
      <span className="text-sm text-red-500 font-semibold">{discount}</span>
    </div>
    <button
      className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow"
      onClick={onAddToCart}
    >
      Add to Bag
    </button>
  </div>
);


export default ShopCard;
