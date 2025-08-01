const ProductCard = ({ image, title, cost, onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 flex flex-col"
  >
    <div className="aspect-[3/4] bg-white flex items-center justify-center p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain mx-auto"
      />
    </div>
    <div className="p-4 text-left bg-white">
      <span className="block text-sm font-medium text-gray-900 truncate">
        {title}
      </span>
      <span className="block text-lg font-bold text-red-600 mt-1">
        ₹{cost}
      </span>
    </div>
  </button>
);
export default ProductCard;
