import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import searchIcon from "../assests/topBar-icons/search-normal.svg";
import logoutIcon from "../assests/topBar-icons/Login.svg";
import callIcon from "../assests/topBar-icons/Frame 1618871179.svg";
import callHoverIcon from "../assests/topBar-icons/FrameHover.svg";
import userIcon from "../assests/topBar-icons/profile.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLogout, setLogout] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center rounded-xl">
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div
        className="relative flex-1 max-w-5xl md:flex items-center bg-gray-100 rounded-lg px-4 py-3 mr-6 
  transition-all duration-150 ease-in-out focus-within:shadow-lg focus-within:translate-y-0.5"
      >
        <img
          src={searchIcon}
          alt="Search"
          className="h-5 w-5 mr-2 inline-block"
        />
        <input
          type="text"
          placeholder="Search packages..."
          className="bg-transparent flex-grow px-2 outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="flex items-center border border-blue-500 text-black px-4 py-2 rounded-lg transition hover:bg-blue-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? callHoverIcon : callIcon}
            alt="Call"
            className="h-6.5 w-6.5 mr-2"
          />
          Book Free Consultation
        </button>

        <div
          className="relative flex items-center space-x-3 px-3 py-2 rounded-xl transition-all duration-200 bg-blue-100 hover:bg-blue-200"
          onMouseEnter={() => setLogout(true)}
          onMouseLeave={() => setLogout(false)}
        >
          <div className="h-9 w-9 rounded-full flex items-center justify-center overflow-hidden bg-blue-500">
            <img src={userIcon} alt="User" className="h-9 w-9 rounded-full" />
          </div>
          <span className="text-blue-600 font-semibold">ZY</span>
          <img
            src={logoutIcon}
            alt="Logout"
            className="h-6 w-6 cursor-pointer"
          />

          {isLogout && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-white/90 backdrop-blur-md shadow-lg rounded-md py-1 px-3 text-blue-700 font-semibold text-sm">
              <span>Logout</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
