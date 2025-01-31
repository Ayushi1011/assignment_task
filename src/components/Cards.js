import { useState } from "react";
import Button from "./Buttons";
import lockIcon from "../assests/card-icons/lock.svg";
import Modal from "./Modal";

const Cards = ({ icon, tag, title, description, price, frequency, tags, large }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };



  return (
    <div
      className={`p-5 rounded-lg shadow-md transition duration-300 flex flex-col justify-between 
      ${large ? "md:col-span-2" : "col-span-1"} 
      ${title === "Business Elite Package" ? "bg-blue-100" : "bg-white"} 
      hover:bg-blue-100`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon and Tag */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {icon && <img src={icon} alt={`${title} icon`} className="w-10 h-10" />}
          {tag && (
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
              {tag}
            </span>
          )}
        </div>

        {/* Price for one-time packages */}
        {frequency === "one time" && (
          <div className="text-lg font-semibold text-gray-900">
            ${price} <span className="text-sm text-gray-500">{frequency}</span>
          </div>
        )}
      </div>

      {/* Additional Tags */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {tags?.map((tag, index) => (
            <span key={index} className="bg-blue-500 text-white px-2 py-1 text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title & Description */}
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>

      {/* Buttons Section */}
      <div className="flex gap-3 mt-4">
        {title === "Personalized Package" ? (
          <Button  variant={isHovered ? "hoveredCompare" : "compare"}>
    
              <img src={lockIcon} alt="Lock" className="w-4 h-4 " />
            
          </Button>
        ) : (
          <>
            <Button
              variant={
                title === "Business Elite Package"
                  ? "hoveredCompare"
                  : isHovered
                  ? "hoveredCompare"
                  : "compare"
              }
              onClick={() => setIsModalOpen(true)}
            >
              Compare
            </Button>
            <Button variant="primary">Buy Now</Button>
          </>
        )}

        {/* Price for yearly subscriptions */}
        {title !== "Personalized Package" && frequency !== "one time" && (
          <div className="ml-auto text-right">
            <span className="text-sm text-black-500">$</span>
            <span className="text-2xl font-semibold text-gray-900">{price}</span>
            <span className="text-sm text-black-500">/year</span>
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(handleModalClose)} />
    </div>
  );
};

export default Cards;
