import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assests/navigation-icons/Logo.svg";
import dashboardIcon from "../assests/navigation-icons/grid-5.svg";
import companyIcon from "../assests/navigation-icons/building-4.svg";
import documentsIcon from "../assests/navigation-icons/document-copy.svg";
import servicesIcon from "../assests/navigation-icons/note.svg";
import complianceIcon from "../assests/navigation-icons/receipt-discount.svg";
import booksIcon from "../assests/navigation-icons/book.svg";
import moneyIcon from "../assests/navigation-icons/dollar-square.svg";
import lockIcon from "../assests/navigation-icons/lock.svg";
import BlackLock from "../assests/navigation-icons/black-lock.svg";
import buildingIcon from "../assests/navigation-icons/company.svg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`h-screen fixed md:relative bg-white shadow-md transition-all duration-300 flex flex-col z-50 ${
        isOpen ? "w-64" : "w-20"
      } md:w-64 overflow-y-auto`}
    >
      {/* Top Section */}
      <div className="flex items-center justify-center relative p-4">
        <img
          src={logo}
          alt="Logo"
          className={`h-8 transition-all ${!isOpen && "hidden md:block"}`}
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-gray-200 rounded-md md:hidden"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Navigation */}
      <div className=" mx-3 p-3  items-center">
        <nav className="mt-4 flex flex-col space-y-2">
          <SidebarLink
            to="/"
            icon={dashboardIcon}
            text="Dashboard"
            isOpen={isOpen}
            active
          />
          <SidebarLink
            to="#"
            icon={companyIcon}
            text="Company"
            isOpen={isOpen}
            locked
          />
          <SidebarLink
            to="#"
            icon={documentsIcon}
            text="Documents"
            isOpen={isOpen}
            locked
          />
          <SidebarLink
            to="#"
            icon={servicesIcon}
            text="Services"
            isOpen={isOpen}
            locked
          />
          <SidebarLink
            to="#"
            icon={complianceIcon}
            text="Compliance"
            isOpen={isOpen}
            locked
          />
          <SidebarLink
            to="#"
            icon={booksIcon}
            text="Banks"
            isOpen={isOpen}
            locked
          />
          <SidebarLink
            to="#"
            icon={moneyIcon}
            text="Money"
            isOpen={isOpen}
            locked
          />
        </nav>
      </div>

      <div className="mt-auto p-4 flex items-center justify-center space-x-2">
        <img src={buildingIcon} alt="Company Icon" className="h-6 w-6" />
        <p className="text-base font-semibold whitespace-nowrap">
          Your Company
        </p>
      </div>
    </div>
  );
}

const SidebarLink = ({ icon, text, isOpen, active, locked }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center p-3 transition rounded-xl 
        ${
          active
            ? "bg-blue-600 text-white font-bold shadow-xl"
            : "text-black hover:bg-blue-100 group"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={icon} alt={text} className="h-6 w-6" />
      <span
        className={`ml-3 text-sm font-medium ${!isOpen && "hidden md:block"}`}
      >
        {text}
      </span>

      {locked && (
        <img
          src={isHovered ? BlackLock : lockIcon}
          alt="Locked"
          className="h-4 w-4 ml-auto transition"
        />
      )}
    </div>
  );
};
export default Sidebar;
