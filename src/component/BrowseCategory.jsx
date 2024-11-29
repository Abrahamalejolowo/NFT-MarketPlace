import React, { useState } from "react";
import { categories } from "./Database";

function BrowseCategory() {
  const [clicked, setClicked] = useState(null);

  const handleClick = (index) => {
    setClicked(index);
    setTimeout(() => setClicked(null), 300); // Reset animation after 300ms
  };

  return (
    <div className="py-8  sm:px-8 lg:px-[9%]">
      <h1 className="text-3xl font-bold  mb-8 text-white">Browse Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="group cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            {/* Category Image with Animation */}
            <div
              className={`overflow-hidden rounded-lg ${
                clicked === index ? "animate-pulse" : ""
              }`}
            >
              <img
                src={category.category_picture}
                alt={category.category_title}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>

            {/* Category Title */}
            <div className=" w-full mt-[-5px] bg-[#3b3b3b] rounded-b-lg flex px-3 py-6 items-center mx-auto">
              <p className="font-semibold font-sans text-base text-white truncate">
                {category.category_title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseCategory;
