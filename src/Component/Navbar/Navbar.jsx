import blackLogo from "../../assets/HomeNavbar/blacklogo.avif";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { City } from "country-state-city";
import { useAuth } from "../../Context/AuthContext";
import LoginModal from "../Login/LoginModel";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const Navbar = () => {
  const cities = City.getCitiesOfCountry("IN");
  const [city, setCity] = useState("Mumbai");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { user, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);



  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between px-4 py-4 lg:px-6">

          {/* LEFT: Menu + Logo */}
          <div className="flex items-center justify-between w-full lg:w-auto">
           <div className="lg:hidden">
  {!user ? (
    <button onClick={() => setIsSidebarOpen(true)}>
      <MenuIcon className="text-3xl text-gray-700" />
    </button>
  ) : (
    <div className="flex items-center gap-2 cursor-pointer">
      <AccountCircleIcon sx={{ fontSize: 28 }} />
      <span className="text-sm font-medium capitalize">
        {user.name}
      </span>
    </div>
  )}
</div>


            <img
              src={blackLogo}
              alt="Zomato"
              className="h-8 cursor-pointer"
            />
          </div>

          {/* DESKTOP SEARCH (CENTER) */}
          <div className="hidden lg:flex justify-center flex-1">
            <div className="shadow-md flex items-center border w-[720px]
                      border-gray-300 rounded-lg h-12 bg-white">

              {/* LOCATION */}
              <div className="flex items-center gap-2 px-3 border-r border-gray-300 max-w-[180px]">
                <LocationOnIcon className="text-red-400 text-lg shrink-0" />

                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="text-sm outline-none bg-transparent cursor-pointer truncate w-full"
                >
                  {cities.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>

                {/* <ArrowDropDownIcon className="text-gray-500 text-lg shrink-0" /> */}
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
          </div>

          {/* DESKTOP AUTH */}
          <div className="hidden lg:flex gap-4 items-center">
            {!user ? (
              <>
                <button
                  onClick={() => setShowLogin(true)}
                  className="text-gray-500 hover:text-black">
                  Log in
                </button>
                <button className="text-gray-500 hover:text-black">
                  Sign up
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 cursor-pointer">
                  <AccountCircleIcon sx={{ fontSize: 28 }} />
                  <span className="text-gray-700 font-medium capitalize">
                    {user.name}
                  </span>
                </div>
              </>

            )}
          </div>

        </div>

        {/* MOBILE SEARCH AREA */}
        <div className="lg:hidden px-4 pb-4 space-y-3">

          {/* LOCATION */}
          <div className="flex items-center gap-2 border border-gray-300
                    rounded-lg h-12 px-3 bg-white">
            <LocationOnIcon className="text-red-400 text-lg" />
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 text-sm outline-none bg-transparent"
            >
              {cities.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>

          </div>

          {/* SEARCH */}
          <div className="flex items-center gap-2 border border-gray-300
                    rounded-lg h-12 px-3 bg-white">
            <SearchIcon className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="flex-1 text-sm outline-none"
            />
          </div>
        </div>
      </nav>


      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR (LEFT SLIDE) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 lg:hidden
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b">
          <img src={blackLogo} alt="logo" className="h-6" />
          <button onClick={() => setIsSidebarOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col p-4 gap-4">
          {!user ? (
            <button onClick={() => setIsSidebarOpen(true)}>
              <MenuIcon />
            </button>
          ) : (
            <div className="flex items-center gap-1 cursor-pointer">
              <AccountCircleIcon sx={{ fontSize: 26 }} />
              <span className="text-sm capitalize">{user.name}</span>
            </div>
          )}


        </div>

      </div>
      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} />
      )}

    </>
  );
};

export default Navbar;
