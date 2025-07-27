import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyAccount = () => {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [cartItems, setCartItems] = useState(0);

  // Fetch data from localStorage on page load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (storedUser) setUser(storedUser);
    setOrders(storedOrders);
    setCartItems(storedCart.length);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}
      <div className="mb-6">
        <Link 
          to="/" 
          className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
        >
          <svg 
            className="w-5 h-5 mr-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">My Account</h1>

      {/* User Details */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Welcome, {user.name || "Guest"} 👋
        </h2>
        <p>Email: <span className="text-gray-700">{user.email}</span></p>
        <p>Phone: <span className="text-gray-700">{user.phone}</span></p>
        <Link
          to="/edit-profile"
          className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Edit Profile
        </Link>
      </div>

      {/* Orders Summary */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
        {orders.length === 0 ? (
          <p className="text-gray-600">You have no orders yet.</p>
        ) : (
          <table className="w-full border text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Order ID</th>
                <th className="p-2">Date</th>
                <th className="p-2">Status</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.date}</td>
                  <td className="p-2">{order.status}</td>
                  <td className="p-2">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Cart Summary */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Cart</h2>
        <p>You have <span className="font-bold">{cartItems}</span> item(s) in your cart.</p>
        <Link
          to="/cart"
          className="inline-block mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default MyAccount;
