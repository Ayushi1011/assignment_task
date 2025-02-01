import { useState } from "react";
import Button from "../components/Buttons";
import shoppingCart from "../assests/location-icons/shopping-cart.svg";
import { useNavigate } from "react-router-dom";
import backButton from "../assests/location-icons/backButton.svg";

function Activities() {
  const [visaCount, setVisaCount] = useState(0);
  const [businessDetails, setBusinessDetails] = useState("");
  const [sellInUAE, setSellInUAE] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [businessActivities, setBusinessActivities] = useState([]);
  const [turnoverInUAE, setTurnoverInUAE] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [workspaceRequirements, setWorkspaceRequirements] = useState({
    retailShop: false,
    warehouse: false,
    virtualOffice: false,
    industrialArea: false,
    physicalOffice: false,
    none: false,
  });

  const navigate = useNavigate();
  const industries = [
    "Healthcare",
    "Manufacturing",
    "Professional Services",
    "Information Technology",
    "Finance and Insurance",
    "Construction and Real Estate",
    "Commercial and Retail",
    "Education",
    "Logistics and Transportation",
    "Tourism and Hospitality",
    "Others",
  ];

  const handleIndustrySelect = (industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((item) => item !== industry)
        : [...prev, industry]
    );
  };

  const handleActivitySelect = (activity) => {
    setBusinessActivities((prev) =>
      prev.includes(activity)
        ? prev.filter((item) => item !== activity)
        : [...prev, activity]
    );
  };

  const handleWorkspaceChange = (e) => {
    const { name, checked } = e.target;
    setWorkspaceRequirements((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="p-6 w-full bg-white rounded-lg">
      <h2 className="text-2xl font-semibold">
        Business Overview & Visa Requirements
      </h2>

      <div className="relative flex justify-between items-center mb-4">
        <div className="relative w-full h-3 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: "28%" }}
          ></div>
          <div className="absolute left-[28%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 text-xs rounded-full shadow-md">
            28%
          </div>
        </div>
        <div className="relative ml-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-300 ${
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

      {/* Industry Selection Section */}
      <h2
        className="text-xl font-semibold mb-4 flex items-center"
        onClick={() => navigate("/")}
      >
        {" "}
        <img
          src={backButton}
          alt="Checked"
          className="w-6 h-6 bg-gray-100 rounded"
        />
        Identify the industries or sectors that best describe your business
        operations.
      </h2>
      <div className="p-4 rounded-lg bg-[#f8f8f8] mb-6">
        <div className="grid grid-cols-3 gap-2">
          {industries.map((industry) => (
            <button
              key={industry}
              className={`px-4 py-2 text-sm font-medium rounded-lg border ${
                selectedIndustries.includes(industry)
                  ? "bg-blue-100 text-black border border-blue-500"
                  : "bg-white text-black hover:bg-blue-100"
              }`}
              onClick={() => handleIndustrySelect(industry)}
            >
              {selectedIndustries.includes(industry) ? "✓ " : "+ "} {industry}
            </button>
          ))}
        </div>
      </div>

      {/* Business Activity Section */}
      <h3 className="text-lg font-medium mb-4">
        Describe Your Business Activities
      </h3>
      <div className="flex space-x-2">
        <button
          className={`px-4 py-2 rounded-lg ${
            businessActivities.includes("Goods")
              ? "bg-blue-100 text-black border border-blue-500"
              : "bg-[#f8f8f8] text-black hover:bg-blue-100"
          }`}
          onClick={() => handleActivitySelect("Goods")}
        >
          Goods
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            businessActivities.includes("Services")
              ? "bg-blue-100 text-black border border-blue-500"
              : "bg-[#f8f8f8] text-black hover:bg-blue-100"
          }`}
          onClick={() => handleActivitySelect("Services")}
        >
          Services
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            businessActivities.includes("Trading")
              ? "bg-blue-100 text-black border border-blue-500"
              : "bg-[#f8f8f8] text-black hover:bg-blue-100"
          }`}
          onClick={() => handleActivitySelect("Trading")}
        >
          Trading
        </button>
      </div>
      <textarea
        placeholder="Enter your business details here..."
        className="mt-3 w-full h-24 px-4 py-2 border border-gray-300 rounded-lg bg-[#f8f8f8] resize-none mb-6 hover:shadow-lg"
        value={businessDetails}
        onChange={(e) => setBusinessDetails(e.target.value)}
      />

      {/* Visa Requirements Section */}
      <h3 className="text-lg font-medium mb-4 flex items-center ">
        Specify Visa Requirements
        <div className="relative group flex items-center ml-2">
          <span className="w-10 h-10 flex items-center justify-center  text-blue-500 text-xl rounded-full cursor-pointer">
            ⓘ
          </span>
          {/* Tooltip */}
          <div className="absolute left-full ml-2 w-64 bg-gray-200 text-black text-xs rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            Select the number of visas required for your employees. Each visa
            costs $500.
          </div>
        </div>
      </h3>
      <div className="flex items-center space-x-4 mb-6">
        <button
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md"
          onClick={() => setVisaCount(Math.max(0, visaCount - 1))}
        >
          -
        </button>
        <span className="text-lg font-medium">{visaCount}</span>
        <button
          className="px-4 py-2 bg-gray-100 text-blue rounded-md"
          onClick={() => setVisaCount(visaCount + 1)}
        >
          +
        </button>
        <span className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium">
          Cost: ${visaCount * 500}.00
        </span>
      </div>

      {/* Buy or Sell in UAE Section */}
      <div className="p-4 rounded-lg bg-[#f8f8f8] mb-6 hover:shadow-lg">
        <h3 className="text-lg font-medium mb-4">
          Are you planning to buy or sell goods and services within the U.A.E.?
        </h3>
        <div className="flex gap-4">
          <button
            className={`px-6 py-2 rounded-lg ${
              sellInUAE
                ? "bg-blue-100 text-black border border-blue-500"
                : "bg-white text-black hover:bg-blue-100"
            }`}
            onClick={() => setSellInUAE(true)}
          >
            Yes
          </button>
          <button
            className={`px-6 py-2 rounded-lg ${
              !sellInUAE
                ? "bg-blue-100 text-black border border-blue-500"
                : "bg-white text-black hover:bg-blue-100"
            }`}
            onClick={() => setSellInUAE(false)}
          >
            No
          </button>
        </div>
      </div>

      {/* Workspace Requirements Section */}
      <div className="p-4 rounded-lg bg-[#f8f8f8] mb-6 hover:shadow-lg">
        <h3 className="text-lg font-medium mb-4">
          Indicate if your business requires a specific type of workspace.
        </h3>
        <div className="grid grid-cols-3 gap-6">
          {[
            "retailShop",
            "warehouse",
            "virtualOffice",
            "industrialArea",
            "physicalOffice",
            "none",
          ].map((workspace) => (
            <label key={workspace} className="flex items-center space-x-3">
              <input
                type="checkbox"
                name={workspace}
                checked={workspaceRequirements[workspace]}
                onChange={handleWorkspaceChange}
                className="w-5 h-5 border-2 border-blue-500 rounded"
              />
              <span>
                {workspace === "retailShop" && "Retail Shop"}
                {workspace === "warehouse" && "Warehouse"}
                {workspace === "virtualOffice" && "Virtual Office Space"}
                {workspace === "industrialArea" && "Industrial Area"}
                {workspace === "physicalOffice" && "Physical Office Space"}
                {workspace === "none" && "None"}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Turnover Section with Yes, No, Not Sure options */}
      <div className="p-4 rounded-lg bg-[#f8f8f8] mb-6 hover:shadow-lg">
        <h3 className="text-lg font-medium mb-4">
          Will your company's annual turnover exceed AED 3 million in the
          upcoming financial year in the U.A.E.?
        </h3>
        <div className="flex gap-4">
          <button
            className={`px-6 py-2 rounded-lg ${
              turnoverInUAE === "Yes"
                ? "bg-blue-100 text-black border border-blue-500"
                : "bg-white text-black hover:bg-blue-100"
            }`}
            onClick={() => setTurnoverInUAE("Yes")}
          >
            Yes
          </button>
          <button
            className={`px-6 py-2 rounded-lg ${
              turnoverInUAE === "No"
                ? "bg-blue-100 text-black border border-blue-500"
                : "bg-white text-black hover:bg-blue-100"
            }`}
            onClick={() => setTurnoverInUAE("No")}
          >
            No
          </button>
          <button
            className={`px-6 py-2 rounded-lg ${
              turnoverInUAE === "Not Sure"
                ? "bg-blue-100 text-black border border-blue-500"
                : "bg-white text-black hover:bg-blue-100"
            }`}
            onClick={() => setTurnoverInUAE("Not Sure")}
          >
            Not Sure
          </button>
        </div>
      </div>

      <Button variant="primary" onClick={() => navigate("/location")}>
        Next
      </Button>
    </div>
  );
}

export default Activities;
