
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import BackArrow from "../components/icons/BackArrow";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const mobile = e.target.mobile.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Validate
    if (!name || !email || !mobile || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Invalid mobile number.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (localStorage.getItem(mobile)) {
      alert("User already exists with this mobile number.");
      return;
    }

    const userData = {
      name,
      mobile,
      email,
      password,
    };

    localStorage.setItem(mobile, JSON.stringify(userData));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Jfk7q6HRt5YmmAyLPujmkIfP-CVtkgtyyA&s')",
      }}
    >
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
            <BackArrow onClick={() => navigate('/')} className="mb-2" />
        <h2 className="text-3xl font-bold text-center text-black drop-shadow-md">
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border rounded outline-blue focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block font-semibold mb-1">
              Mobile No
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="10-digit mobile number"
              className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>


          <div>
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block font-semibold mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              className="w-full px-3 py-2 border rounded outline-blue focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

         


          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded transition"
          >
            Register
          </button>

          <p className="text-center text-white-700 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;