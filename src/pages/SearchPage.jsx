import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/nav/Nav";

// Categories mapping
const categories = {
  badminton: [
    { name: "Accessories", path: "/Badminton/accessories" },
    { name: "Apparels", path: "/Badminton/apparels" },
    { name: "Bags", path: "/Badminton/bags" },
    { name: "Footwear", path: "/Badminton/footwear" },
    { name: "Socks", path: "/Badminton/socks" },
  ],
  football: [
    { name: "Accessories", path: "/FootBall/accessories" },
    { name: "Bags", path: "/FootBall/bags" },
    { name: "Footwear", path: "/FootBall/footwear" },
    { name: "Ball", path: "/FootBall/balls" },
    { name: "Training Equipments", path: "/FootBall/training-equipments" },
    { name: "Teamwear", path: "/FootBall/teamwear" },
    { name: "GoalKeeper", path: "/FootBall/goalkeeper-gloves" },
    { name: "ShinGuards", path: "/FootBall/shin-guards" },
    { name: "Stocking", path: "/FootBall/stockings" },
  ],
  basketball: [
    { name: "Balls", path: "/BasketBall/basketballs" },
    { name: "Footwear", path: "/BasketBall/basketballfootwear" },
    { name: "Bags", path: "/BasketBall/basketballbags" },
    { name: "Socks", path: "/BasketBall/basketballsocks" },
    { name: "Equipments", path: "/BasketBall/basketballequipments" },
    { name: "Teamwear", path: "/BasketBall/basketballteamwear" },
    { name: "Accessories", path: "/BasketBall/basketballaccessories" },
  ],
  casualshoes: [
    { name: "Sneakers", path: "/sneakers" },
    { name: "Slides", path: "/slides" },
    { name: "Flip Flops", path: "/flip-flops" },
  ],
  sportsshoes: [
    { name: "Basketball Shoes", path: "/basketball-shoes" },
    { name: "Football Boots", path: "/football-boots" },
    { name: "Running Shoes", path: "/running-shoes" },
  ],
  support: [
    { name: "Knee Support", path: "/knee-support" },
    { name: "Elbow Support", path: "/elbow-support" },
    { name: "Ankle Support", path: "/ankle-support" },
  ],
  gear: [
    { name: "Bags", path: "/gear-bags" },
    { name: "Socks", path: "/gear-socks" },
    { name: "Water Bottles", path: "/water-bottles" },
    { name: "Headbands", path: "/headbands" },
  ],
  men: [
    { name: "TShirts", path: "/Men/tshirts" },
    { name: "Shorts", path: "/Men/shorts" },
    { name: "Jackets", path: "/Men/jackets" },
    { name: "Tracksuits", path: "/Men/tracksuits" },
  ],
  women: [
    { name: "Tops", path: "/Women/tops" },
    { name: "Leggings", path: "/Women/leggings" },
    { name: "Jackets", path: "/Women/jackets" },
    { name: "Skirts", path: "/Women/skirts" },
  ],
};

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  // Helper: normalize string (remove spaces, lowercase)
  const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();

  const handleSearch = (e) => {
    e.preventDefault();
    const term = normalize(searchTerm);

    let matched = [];

    // 1️⃣ Exact match in main categories
    if (categories[term]) {
      matched = categories[term];
    } else {
      // 2️⃣ Exact match in subcategories
      for (const key in categories) {
        const exact = categories[key].find(
          (item) => normalize(item.name) === term
        );
        if (exact) {
          matched = [exact];
          break;
        }
      }

      // 3️⃣ If no exact match, fallback to partial match
      if (matched.length === 0) {
        for (const key in categories) {
          const partialMatches = categories[key].filter((item) =>
            normalize(item.name).includes(term)
          );
          matched.push(...partialMatches);
        }
      }
    }

    // Remove duplicates
    const uniqueResults = Array.from(
      new Map(matched.map((item) => [item.path, item])).values()
    );

    setResults(uniqueResults);
  };

  // Get all keywords (main + subcategories)
  const allKeywords = [
    ...Object.keys(categories),
    ...Object.values(categories).flat().map((item) => item.name),
  ];

  // Handle click on keyword
  const handleKeywordClick = (keyword) => {
    setSearchTerm(keyword);
    setTimeout(() => handleSearch({ preventDefault: () => {} }), 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2]">
      {/* Navigation Bar */}
      <Nav />

      {/* Main Content */}
      <div className="p-6">
        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex justify-center mb-6"
        >
          <input
            type="text"
            placeholder="Search categories or items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-all"
          >
            Search
          </button>
        </form>

        {/* Helpful Keywords */}
        <div className="mb-8">
          <h3 className="text-center text-lg font-semibold text-gray-700 mb-3">
            🔑 Helpful Keywords:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allKeywords.map((keyword, index) => (
              <button
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                className="px-3 py-1 text-sm rounded-full bg-white shadow text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-all"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {results && (
          <div>
            {results.length > 0 ? (
              <>
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                  Results for "{searchTerm.trim()}"
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                  {results.map((category) => (
                    <div
                      key={category.name}
                      onClick={() => navigate(category.path)}
                      className="cursor-pointer bg-white/40 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl p-6 w-52 text-center font-medium text-gray-700 hover:scale-105 hover:bg-white/60 hover:shadow-3xl transition-all duration-300 ease-in-out"
                    >
                      {category.name}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-center text-gray-500">
                No results found. Try another keyword.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
