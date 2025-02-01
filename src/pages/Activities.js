import { useState } from "react";
import Button from "../components/Buttons";

export default function BusinessOverview() {
  const [visaCount, setVisaCount] = useState(0);
  const [businessDetails, setBusinessDetails] = useState("");
  const [sellInUAE, setSellInUAE] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState([]); // Track selected industries
  const [businessActivities, setBusinessActivities] = useState([]); // Track selected business activities
  const [turnoverInUAE, setTurnoverInUAE] = useState(null); // Track turnover status (Yes, No, Not Sure)
  const [workspaceRequirements, setWorkspaceRequirements] = useState({
    retailShop: false,
    warehouse: false,
    virtualOffice: false,
    industrialArea: false,
    physicalOffice: false,
    none: false,
  });

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
    <div className="p-6 max-w-4xl mx-auto space-y-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold">Business Overview & Visa Requirements</h2>
      <div className="flex items-center space-x-2">
        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div style={{ width: "28%" }} className="h-2 bg-blue-500 rounded-full"></div>
        </div>
        <span className="text-sm text-gray-600">28%</span>
      </div>

      {/* Industry Selection Section */}
      <div className="p-4 border border-gray-300 rounded-lg">
        <h3 className="text-lg font-medium mb-2">
          Identify the industries or sectors that best describe your business operations.
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {industries.map((industry) => (
            <button
              key={industry}
              className={`px-4 py-2 text-sm font-medium rounded-lg border ${
                selectedIndustries.includes(industry) ? 'bg-blue-500 text-white' : 'border-gray-300'
              }`}
              onClick={() => handleIndustrySelect(industry)}
            >
              {selectedIndustries.includes(industry) ? '✓ ' : '+ '} {industry}
            </button>
          ))}
        </div>
      </div>

      {/* Business Activity Section */}
      <div className="p-4 border border-gray-300 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Describe Your Business Activities</h3>
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded-lg ${businessActivities.includes('Goods') ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => handleActivitySelect('Goods')}
          >
            Goods
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${businessActivities.includes('Services') ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => handleActivitySelect('Services')}
          >
            Services
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${businessActivities.includes('Trading') ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => handleActivitySelect('Trading')}
          >
            Trading
          </button>
        </div>
        <input
          placeholder="Enter your business details here..."
          className="mt-3 w-full h-12 px-4 border border-gray-300 rounded-lg bg-gray-100"
          value={businessDetails}
          onChange={(e) => setBusinessDetails(e.target.value)}
        />
      </div>

      {/* Visa Requirements Section */}
      <div className="p-4 border border-gray-300 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Specify Visa Requirements</h3>
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700"
            onClick={() => setVisaCount(Math.max(0, visaCount - 1))}
          >
            -
          </button>
          <span className="text-lg font-medium">{visaCount}</span>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => setVisaCount(visaCount + 1)}
          >
            +
          </button>
          <span className="ml-4 text-blue-500 font-medium">Cost: ${visaCount * 500}.00</span>
        </div>
      </div>

      {/* Buy or Sell in UAE Section */}
      <div className="p-4 border border-gray-300 rounded-lg">
        <h3 className="text-lg font-medium mb-2">
          Are you planning to buy or sell goods and services within the U.A.E.?
        </h3>
        <div className="flex gap-4">
          <button
            className={`px-6 py-2 rounded-lg ${sellInUAE ? 'bg-blue-500 text-white' : 'border border-gray-300'}`}
            onClick={() => setSellInUAE(true)}
          >
            Yes
          </button>
          <button
            className={`px-6 py-2 rounded-lg ${!sellInUAE ? 'bg-blue-500 text-white' : 'border border-gray-300'}`}
            onClick={() => setSellInUAE(false)}
          >
            No
          </button>
        </div>
      </div>

      {/* Workspace Requirements Section */}
      <div className="p-4 border border-gray-300 rounded-lg">
        <h3 className="text-lg font-medium mb-2">
          Indicate if your business requires a specific type of workspace.
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {['retailShop', 'warehouse', 'virtualOffice', 'industrialArea', 'physicalOffice', 'none'].map((workspace) => (
            <label key={workspace} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={workspace}
                checked={workspaceRequirements[workspace]}
                onChange={handleWorkspaceChange}
                className="form-checkbox"
              />
              <span>
                {workspace === 'retailShop' && 'Retail Shop'}
                {workspace === 'warehouse' && 'Warehouse'}
                {workspace === 'virtualOffice' && 'Virtual Office Space'}
                {workspace === 'industrialArea' && 'Industrial Area'}
                {workspace === 'physicalOffice' && 'Physical Office Space'}
                {workspace === 'none' && 'None'}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Turnover Section with Yes, No, Not Sure options */}
      <div className="p-4 border border-gray-300 rounded-lg">
        <h3 className="text-lg font-medium mb-2">
          Will your company's annual turnover exceed AED 3 million in the upcoming financial year in the U.A.E.?
        </h3>
        <div className="flex gap-4">
          <button
            className={`px-6 py-2 rounded-lg ${turnoverInUAE === 'Yes' ? 'bg-blue-500 text-white' : 'border border-gray-300'}`}
            onClick={() => setTurnoverInUAE('Yes')}
          >
            Yes
          </button>
          <button
            className={`px-6 py-2 rounded-lg ${turnoverInUAE === 'No' ? 'bg-blue-500 text-white' : 'border border-gray-300'}`}
            onClick={() => setTurnoverInUAE('No')}
          >
            No
          </button>
          <button
            className={`px-6 py-2 rounded-lg ${turnoverInUAE === 'Not Sure' ? 'bg-blue-500 text-white' : 'border border-gray-300'}`}
            onClick={() => setTurnoverInUAE('Not Sure')}
          >
            Not Sure
          </button>
        </div>
      </div>

      <Button variant="primary">Next</Button>
    </div>
  );
}
