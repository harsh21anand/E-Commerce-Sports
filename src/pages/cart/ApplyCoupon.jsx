import React, { useState } from "react";

const ApplyCoupon = ({ onApply }) => {
  const [code, setCode] = useState("");

  return (
    <div className="flex mt-4">
      <input
        type="text"
        placeholder="Enter coupon code"
        className="flex-1 border border-gray-300 rounded-l px-3 py-2"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        onClick={() => onApply(code)}
        className="bg-green-600 text-white px-4 py-2 rounded-r hover:bg-green-700"
      >
        Apply
      </button>
    </div>
  );
};

export default ApplyCoupon;
