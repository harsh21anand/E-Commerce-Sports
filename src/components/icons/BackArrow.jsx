import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const BackArrow = ({ onClick, className = "" }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Back"
    className={`flex items-center gap-2 text-black hover:text-teal-700 font-bold text-lg focus:outline-none bg-transparent border-none p-0 ${className}`}
  >
    <FaArrowLeft className="inline-block text-xl" />
    <span>Back</span>
  </button>
);

export default BackArrow;
