import React from "react";

const CartItem = ({ item, onQtyChange, onRemove }) => {
  return (
    <div className="flex items-center border-b border-gray-200 pb-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-contain rounded-lg mr-4"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">{item.cost}</p>
        <div className="flex items-center mt-2">
          <button
            className="px-2 py-1 border rounded-l hover:bg-gray-100"
            onClick={() => onQtyChange(item.qty - 1)}
            disabled={item.qty <= 1}
          >
            -
          </button>
          <span className="px-4">{item.qty}</span>
          <button
            className="px-2 py-1 border rounded-r hover:bg-gray-100"
            onClick={() => onQtyChange(item.qty + 1)}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="ml-4 text-red-500 hover:text-red-700 text-xl"
        onClick={onRemove}
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;
