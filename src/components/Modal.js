import React, { useEffect } from "react";
import checkIcon from "../assests/modal-icons/Component 82 (1).svg";
import backIcon from "../assests/modal-icons/back.svg";
import { useNavigate } from "react-router-dom";

function Modal({ isOpen, onClose }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  if (!isOpen) return null;
  const features = [
    {
      name: "Business Setup - Freezone",
      foundersStarter: true,
      businessElite: true,
      incorporation: true,
    },
    {
      name: "VAT Registration",
      foundersStarter: true,
      businessElite: true,
      incorporation: false,
    },
    {
      name: "VAT Profile Amendments",
      foundersStarter: true,
      businessElite: true,
      incorporation: true,
    },
    {
      name: "Corporate Tax Registration",
      foundersStarter: true,
      businessElite: true,
      incorporation: true,
    },
    {
      name: "VAT Returns - Quarterly",
      foundersStarter: true,
      businessElite: true,
      incorporation: true,
    },
    {
      name: "Basic Books - Annually",
      foundersStarter: "upto 4 employee",
      businessElite: true,
      incorporation: false,
    },
    {
      name: "Professional Books & MIS - Monthly",
      foundersStarter: false,
      businessElite: true,
      incorporation: false,
    },
    {
      name: "VAT Consultancy",
      foundersStarter: true,
      businessElite: true,
      incorporation: false,
    },
    {
      name: "PayRoll and WPS",
      foundersStarter: false,
      businessElite: true,
      incorporation: false,
    },
    {
      name: "Economic Substance Regulation",
      foundersStarter: true,
      businessElite: true,
      incorporation: true,
    },
    {
      name: "Licence Renewal - Freezone ",
      foundersStarter: false,
      businessElite: true,
      incorporation: false,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-7xl p-8 relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="text-center text-lg font-semibold mb-6">
          <div className="grid grid-cols-4 gap-4">
            <div></div>
            <h3>Founders Starter Package</h3>
            <h3 className="relative font-bold text-blue-600">
              Business Elite Package
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs px-2 py-1 rounded-lg border border-blue-600">
                Most popular
              </span>
            </h3>
            <h3>Incorporation Package</h3>
          </div>
        </div>

        {/* Price Row */}
        <div className="grid grid-cols-4 bg-blue-100 p-3 text-center font-semibold mb-6 rounded-lg">
          <span>Price</span>
          <span className="text-black">
            $2,885<span className="text-gray-500 text-sm">/Annual</span>
          </span>
          <span className="text-blue-600">
            $7,628<span className="text-gray-500 text-sm">/Annual</span>
          </span>
          <span className="text-black">
            $2,120<span className="text-gray-500 text-sm">/Annual</span>
          </span>
        </div>

        {/* Feature Comparison Table */}
        <div className="divide-y divide-gray-200 overflow-y-auto max-h-96">
          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-4 text-left py-2 px-4">
              <span className="text-gray-700">{feature.name}</span>

              {/* Founders Starter Column */}
              <span className="text-center">
                {feature.foundersStarter ? (
                  typeof feature.foundersStarter === "string" ? (
                    <span>{feature.foundersStarter}</span>
                  ) : (
                    <img
                      src={checkIcon}
                      alt="Checked"
                      className="w-6 h-6 mx-auto"
                    />
                  )
                ) : feature.foundersStarter === false ? (
                  <span className="text-gray-400">-</span>
                ) : feature.special ? (
                  <span>{feature.special}</span>
                ) : null}
              </span>

              {/* Business Elite Column */}
              <span className="text-center">
                {feature.businessElite ? (
                  <img
                    src={checkIcon}
                    alt="Checked"
                    className="w-6 h-6 mx-auto"
                  />
                ) : feature.businessElite === false ? (
                  <span className="text-gray-400">-</span>
                ) : feature.special ? (
                  <span>{feature.special}</span>
                ) : null}
              </span>

              {/* Incorporation Column */}
              <span className="text-center">
                {feature.incorporation ? (
                  <img
                    src={checkIcon}
                    alt="Checked"
                    className="w-6 h-6 mx-auto"
                  />
                ) : feature.incorporation === false ? (
                  <span className="text-gray-400">-</span>
                ) : feature.special ? (
                  <span>{feature.special}</span>
                ) : null}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="mt-6">
          <div className="grid grid-cols-4 gap-4 w-full">
            <div
              className="flex justify-center items-center"
              onClick={() => navigate("/")}
            >
              <img
                src={backIcon}
                alt="Back Icon"
                className="w-10 h-10 ml-3 mx-auto"
                onClick={onClose}
              />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <button
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-500"
                onClick={() => navigate("/activities")}
              >
                Buy Now
              </button>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <button
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-500"
                onClick={() => navigate("/activities")}
              >
                Buy Now
              </button>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <button
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-500"
                onClick={() => navigate("/activities")}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
