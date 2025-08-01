const CategoryCard = ({ image, title, onClick }) => (
  <button
    onClick={onClick}
    className="relative w-full h-[350px] rounded-lg overflow-hidden group focus:outline-none shadow"
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    <div className="absolute bottom-8 left-0 w-full flex flex-col items-center">
      <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg text-center px-2">
        {title}
      </span>
      <span className="block w-16 h-1 bg-red-700 mt-2 rounded" />
    </div>
  </button>
);

export default CategoryCard;