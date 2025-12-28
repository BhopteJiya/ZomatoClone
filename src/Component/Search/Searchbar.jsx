import { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  //  Filter logic (safe)
  const filteredData = data.filter((item) => {
    const nameMatch = item.name
      ?.toLowerCase()
      .includes(query.toLowerCase());

    const cuisineMatch = Array.isArray(item.cuisine)
      ? item.cuisine.join(" ").toLowerCase().includes(query.toLowerCase())
      : item.cuisine
          ?.toLowerCase()
          .includes(query.toLowerCase());

    return nameMatch || cuisineMatch;
  });

  //  Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //  Navigate on click
  const handleSelect = (id) => {
    navigate(`/resdetail/${id}`);
    setQuery("");
  };


  return (
    <div ref={searchRef} className="relative w-full h-full">
      {/* Input */}
      <div className="flex items-center gap-2 h-full">
        <SearchIcon className="text-gray-500" />
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 text-sm outline-none bg-transparent"
        />
      </div>

      {/* Dropdown */}
      {query && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg z-50 max-h-64 overflow-y-auto">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">
                  {Array.isArray(item.cuisine)
                    ? item.cuisine.join(", ")
                    : item.cuisine}
                </p>
              </div>
            ))
          ) : (
            <p className="px-4 py-3 text-sm text-gray-500">
              No results found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
