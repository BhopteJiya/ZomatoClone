import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";   
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ city, setCity, cities })=>{

return(
  <div className="shadow-md flex items-center border w-full lg:w-[720px] mx-auto border-gray-300 rounded-lg h-12 bg-white">
    
    {/* LOCATION */}
    <div className="flex items-center gap-2 px-3 border-r border-gray-300 max-w-[160px] ">
      <LocationOnIcon className="text-red-400 text-lg shrink-0" />

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="text-sm outline-none bg-transparent cursor-pointer appearance-none truncate w-full"
      >
        {cities.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      <ArrowDropDownIcon className="text-gray-500 text-lg shrink-0" />
    </div>

    {/* SEARCH */}
    <div className="flex items-center gap-2 px-3 flex-1">
      <SearchIcon className="text-gray-500 text-lg" />
      <input
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
        className="flex-1 text-sm outline-none"
      />
    </div>
  </div>
);
};
export default SearchBar