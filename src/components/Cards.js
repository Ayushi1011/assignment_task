import { useState } from "react";
import Button from "./Buttons";

const Cards = ({ title, description, price, frequency, tags, large }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-5 rounded-lg shadow-md transition duration-300 min-h-[220px] 
      ${large ? "md:col-span-2" : "col-span-1"} 
      ${title === "Business Elite Package" ? "bg-blue-100" : "bg-white"} 
      hover:bg-blue-100`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

{frequency === "one time" && (
        <div className="text-right text-lg font-semibold text-gray-900">
          ${price} <span className="text-sm text-black-500">{frequency}</span>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {tags?.map((tag, index) => (
            <span key={index} className="bg-blue-500 text-white px-2 py-1 text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>

      <div className="flex justify-between items-center mt-4">
      </div>

      <div className="flex gap-3 mt-4">
      <Button
    variant={
      title === "Business Elite Package"
        ? "hoveredCompare" 
        : isHovered
        ? "hoveredCompare" 
        : "compare" }
  >
    Compare
  </Button>
  <Button variant="primary">Buy Now</Button>
  
      </div>
      {title !== "Personalized Package" && frequency !== "one time" && (
        <div className="text-right">
          <span className="text-sm text-black-500">$</span>   
          <span className="text-2xl font-semibold text-gray-900">{price}</span>
          <span className="text-sm text-black-500">/year</span>
        </div>
      )}
    </div>
  );
};

export default Cards;
