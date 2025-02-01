import React, { useState } from "react";
import Button from "../components/Buttons";
import welcomeBg from "../assests/welcome-card/Group 37232.svg";
import checkIcon from "../assests/modal-icons/Component 82 (1).svg";
import compareIcon from "../assests/location-icons/compare.svg";
import backButton from "../assests/location-icons/backButton.svg";
import shoppingCart from "../assests/location-icons/shopping-cart.svg";
import { useNavigate } from "react-router-dom";

function LocationSelection() {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState("");
  const [showDropdowns, setShowDropdowns] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const jurisdictions = [
    { id: "location1", title: "Location" },
    { id: "location2", title: "Location " },
    { id: "location3", title: "Location" },
  ];

  return (
    <div className="p-6 w-full bg-white rounded-lg">
      <div className="relative flex justify-between items-center mb-4">
        {/* Progress Bar */}
        <div className="relative w-full h-3 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: "72%" }}
          ></div>
          <div className="absolute left-[72%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 text-xs rounded-full shadow-md">
            72%
          </div>
        </div>
        <div className="relative ml-4">
          {/* Cart Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isOpen ? "bg-[#A6D2FF] text-black" : "bg-blue-100 "
            }`}
          >
            <img src={shoppingCart} alt="Cart" className="w-5 h-5" />
            <span>$0.00</span>
            <span className="text-sm"> ▼</span>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-[180px] max-w-[200px] bg-[#A6D2FF]  rounded-lg shadow-lg p-2 overflow-hidden z-50">
              <div className="flex justify-between p-3 border-b border-gray-200 text-sm bg-white rounded-lg mb-2">
                <span>Business Elite</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between p-3 border-b border-gray-200 text-sm bg-white rounded-lg mb-2">
                <span>Visa Cost</span>
                <span>$0.00</span>
              </div>

              <span>Total $0.00</span>
            </div>
          )}
        </div>
      </div>
      <h2
        className="text-xl font-semibold mb-4 flex items-center"
        onClick={() => navigate("/activities")}
      >
        <img
          src={backButton}
          alt="Checked"
          className="w-6 h-6 bg-gray-100 rounded "
        />
        Recommended Jurisdictions for Your Business
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {jurisdictions.map((jurisdiction) => (
          <label
            className={`rounded-lg p-4 cursor-pointer border-2 transition-all duration-300
            ${
              selectedJurisdiction === jurisdiction.id
                ? "border-blue-500 shadow-lg shadow-blck bg-blue-100"
                : "border-none bg-[#f8f8f8]"
            } 
            hover:bg-blue-50 hover:text-white group`}
          >
            <div className="flex justify-between items-center ">
              <h3 className="font-semibold text-gray-700">
                {jurisdiction.title}
              </h3>
              <input
                type="radio"
                name="jurisdiction"
                value={jurisdiction.id}
                checked={selectedJurisdiction === jurisdiction.id}
                onChange={() => setSelectedJurisdiction(jurisdiction.id)}
                className="form-radio text-blue-500 scale-150 
                shadow-lg shadow-blue-300 hover:shadow-xl hover:shadow-blue-500 "
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <p className="text-blue-600 font-semibold mt-2">Starts at $00/-</p>
            <ul className="mt-2 space-y-1">
              {[...Array(3)].map((_, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <span className="mr-2 text-blue-500">
                    <img
                      src={checkIcon}
                      alt="Checked"
                      className="w-6 h-6 mx-auto"
                    />{" "}
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing ela
                </li>
              ))}
            </ul>
            <button
              className={`w-full mt-4 py-2 rounded-lg transition-all duration-300 ease-in-out 
    ${
      selectedJurisdiction === jurisdiction.id
        ? "bg-blue-500 text-white"
        : "bg-blue-100 text-black"
    } 
    group-hover:bg-white group-hover:text-blue-500 
    hover:!bg-blue-500 hover:!text-white`}
              onClick={() => setSelectedJurisdiction(jurisdiction.id)}
            >
              Select
            </button>
          </label>
        ))}
      </div>

      <button className="mt-4 py-3 px-6 border rounded-lg text-black-600 border-blue-500 flex items-center gap-2">
        <img src={compareIcon} alt="Checked" className="w-6 h-6" />
        Compare Options
      </button>

      <h3 className="mt-6 text-lg font-semibold">
        Prefer a Different Jurisdiction?
      </h3>

      <div className="mt-2 flex justify-start">
        <button
          className="py-2 px-4 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-50"
          onClick={() => setShowDropdowns(!showDropdowns)}
        >
          Select a custom location
        </button>
      </div>

      {showDropdowns && (
        <div className="mt-4 flex flex-col md:flex-row gap-4 ">
          <select className="p-2 border rounded-lg flex-1 bg-[#f8f8f8]">
            <option>Select Emirate</option>
          </select>
          <select className="p-2 border rounded-lg flex-1 bg-[#f8f8f8]">
            <option>Jurisdiction Type</option>
          </select>
          <select className="p-2 border rounded-lg flex-1 bg-[#f8f8f8]">
            <option>Select Freezone</option>
          </select>
        </div>
      )}

      <div className="relative bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg shadow-sm flex items-center justify-between w-full mt-6">
        <p className="text-sm">
          Do you want to optimize your
          <span className="text-blue-600 font-semibold">Corporate Tax?</span>
        </p>

        <button className="relative z-10 px-4 py-2 text-white bg-blue-500 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-500 border border-blue-500 ml-auto">
          Know More
        </button>

        <img
          src={welcomeBg}
          alt="Background Design"
          className="absolute right-0 top-0 h-full opacity-50 rounded-lg"
        />
      </div>

      <div className="mt-6">
        <Button variant="primary">Next</Button>
      </div>
    </div>
  );
}

export default LocationSelection;
