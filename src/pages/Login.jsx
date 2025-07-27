import React from "react";
import { useNavigate, Link } from "react-router-dom";
import BackArrow from "../components/icons/BackArrow";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const mobile = event.target.mobile.value.trim();
    const password = event.target.password.value.trim();
    const userData = localStorage.getItem(mobile);

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!userData) {
      alert("No user found with this mobile number.");
      return;
    }

    const user = JSON.parse(userData);
    if (user.password !== password) {
      alert("Incorrect password.");
      return;
    }

    alert("Login successful!");
    navigate("/"); // Redirect to home page after successful login
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20250416/original/pngtree-water-droplets-on-window-with-city-lights-in-background-calm-mood-picture-image_16436956.jpg')",
      }}
    >
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full sm:max-w-md">
            <BackArrow onClick={() => navigate('/')} className="mb-2" />

        <form onSubmit={handleLogin} className="space-y-4 w-full">
          <h2 className="text-3xl font-bold text-center text-black drop-shadow-md">
            Login
          </h2>

          {/* Mobile Input */}
          <div className="w-full block">
            <label
              htmlFor="mobile"
              className="block text-xl font-bold text-black mb-1"
            >
              Mobile No
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              className="block w-full px-3 py-3 bg-gray-100 rounded text-sm placeholder-gray-500 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div className="w-full block">
            <label
              htmlFor="password"
              className="block text-xl font-medium text-black mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="block w-full px-3 py-3 bg-gray-100 rounded text-sm placeholder-gray-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded w-full hover:bg-black transition"
          >
            Login
          </button>

          {/* Links */}
          <p className="text-xl text-center text-white">
            <Link to="/forgot-password" className="text-black hover:underline">
              Forgot Password?
            </Link>
          </p>

          <p className="text-xl text-center text-white">
            Don't have an account?{" "}
            <Link to="/register" className="text-black hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
