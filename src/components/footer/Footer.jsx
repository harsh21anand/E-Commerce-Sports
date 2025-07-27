import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for routing
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-0 mb-0">
      {/* Top section with #MoveUp and links */}
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
        {/* Left: Email Signup */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-white">#MoveUp</span> by signing up
          </h2>
          <div className="relative border-b border-gray-500 flex justify-between items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent w-full py-3 px-1 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="absolute right-0 text-red-600 font-bold uppercase tracking-wide hover:text-red-500">
              Send
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="bg-white text-black p-3 rounded-full hover:bg-red-600 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white text-black p-3 rounded-full hover:bg-red-600 hover:text-white">
              <FaXTwitter />
            </a>
            <a href="#" className="bg-white text-black p-3 rounded-full hover:bg-red-600 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white text-black p-3 rounded-full hover:bg-red-600 hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Middle: Company Info */}
        <div className="mt-6 md:mt-0">
          <h3 className="font-bold mb-4">COMPANY INFORMATION</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/about" className="hover:text-red-600">About Us</Link> {/* ✅ Changed to Link */}
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-600">Contact</Link> {/* ✅ Changed to Link */}
            </li>
            <li><a href="#" className="hover:text-red-600">Terms And Conditions</a></li>
            <li><a href="#" className="hover:text-red-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-red-600">Exchange & Return Policy</a></li>
            <li><a href="#" className="hover:text-red-600">Track Order</a></li>
            <li><a href="#" className="hover:text-red-600">Blogs</a></li>
            <li><a href="#" className="hover:text-red-600">Catalogues</a></li>
            <li><a href="#" className="hover:text-red-600">CSR Policy</a></li>
          </ul>
        </div>

        {/* Right: Affiliations & Contact */}
        <div className="md:w-1/3 flex flex-col md:flex-row md:justify-between">
          {/* Affiliations */}
          <div>
            <h3 className="font-bold mb-4">Sports_Hub AFFILIATIONS</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-red-600">AIFF</a></li>
              <li><a href="#" className="hover:text-red-600">ISL</a></li>
              <li><a href="#" className="hover:text-red-600">Bhutan Football Federation</a></li>
              <li><a href="#" className="hover:text-red-600">Srilankan Football Federation</a></li>
              <li><a href="#" className="hover:text-red-600">BFI</a></li>
              <li><a href="#" className="hover:text-red-600">VFI</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-6 md:mt-0">
            <h3 className="font-bold mb-4">CONNECT WITH US</h3>
            <p className="flex items-center mb-2"><FaPhoneAlt className="mr-2" /> +91-9525874518</p>
            <p className="flex items-center mb-2"><FaEnvelope className="mr-2" /> contact@Sports_Hub.in</p>
            <p>(Mon-Sat, 10:00am till 6:00pm)</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4">
        &copy; 2025 Sports_Hub Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
