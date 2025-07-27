import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import ApplyCoupon from "./ApplyCoupon";
import ErrorBoundary from "../../components/ErrorBoundary";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Load cart items from localStorage
      const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      console.log('Loaded cart items:', storedCart);
      setCartItems(storedCart);
    } catch (err) {
      console.error('Error loading cart items:', err);
      setError('Failed to load cart items. Please try again.');
    }
  }, []);

  const handleQuantityChange = (index, newQty) => {
    setCartItems((prev) => {
      const updated = prev.map((item, idx) => idx === index ? { ...item, qty: newQty } : item);
      localStorage.setItem("cartItems", JSON.stringify(updated));
      return updated;
    });
  };

  const handleRemove = (index) => {
    setCartItems((prev) => {
      const updated = prev.filter((_, idx) => idx !== index);
      localStorage.setItem("cartItems", JSON.stringify(updated));
      return updated;
    });
  };


  const handleApplyCoupon = (code) => {
    setCouponCode(code);
    // Example: apply flat ₹200 discount
    if (code === "NIVIA200") {
      setDiscount(200);
      alert("Coupon applied successfully!");
    } else {
      alert("Invalid coupon code.");
      setDiscount(0);
    }
  };

  // Helper to extract numeric value from string price (e.g. '₹999' -> 999)
  const getPrice = (str) => {
    if (!str) return 0;
    try {
      return Number(str.toString().replace(/[^\d.]/g, "")) || 0;
    } catch (err) {
      console.error('Error parsing price:', str, err);
      return 0;
    }
  };

  // Helper to extract percent from string discount (e.g. '20% OFF' -> 20)
  const getDiscountPercent = (str) => {
    if (!str) return 0;
    try {
      return Number((str.toString().match(/\d+/) || [0])[0]) || 0;
    } catch (err) {
      console.error('Error parsing discount:', str, err);
      return 0;
    }
  };

  // Calculate subtotal and total discount
  const subtotal = cartItems.reduce((sum, item) => {
    try {
      return sum + (getPrice(item?.cost) * (item?.qty || 1));
    } catch (err) {
      console.error('Error calculating subtotal for item:', item, err);
      return sum;
    }
  }, 0);

  const totalDiscount = cartItems.reduce((sum, item) => {
    try {
      const price = getPrice(item?.cost);
      const percent = getDiscountPercent(item?.discount);
      return sum + ((price * percent / 100) * (item?.qty || 1));
    } catch (err) {
      console.error('Error calculating discount for item:', item, err);
      return sum;
    }
  }, 0);

  const tax = Math.max(0, subtotal - totalDiscount) * 0.12; // 12% tax on discounted subtotal
  const total = Math.max(0, subtotal - totalDiscount - discount + tax);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Cart content component
  const CartContent = () => {
    const navigate = useNavigate();
    return (
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center mb-6 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-lg font-semibold shadow"
          style={{ maxWidth: 200 }}
        >
          <span className="mr-2" style={{ fontSize: '1.5em' }}>&larr;</span>
          Back
        </button>
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {!cartItems || cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-1 space-y-6">
              {cartItems.map((item, idx) => (
                <CartItem
                  key={idx}
                  item={item}
                  onQtyChange={(qty) => handleQuantityChange(idx, qty)}
                  onRemove={() => handleRemove(idx)}
                />
              ))}

              <ApplyCoupon onApply={handleApplyCoupon} />
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
              <CartSummary
                subtotal={subtotal}
                discount={totalDiscount + discount}
                tax={tax}
                total={total}
              />
              <button
                onClick={() => (window.location.href = "/checkout")}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <CartContent />
    </ErrorBoundary>
  );
};

export default Cart;
