import React from "react";

const CartSummary = ({ subtotal, discount, tax, total }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>- ₹{discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Tax (12%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
