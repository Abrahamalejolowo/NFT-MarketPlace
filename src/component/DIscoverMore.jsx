import React from "react";
import { newTrading } from "./Database";
import { Link } from "react-router-dom";

function DIscoverMore() {
  return (
    <section className="max-w-7xl mx-auto px-[9%] sm:px-8 py-12">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">Discover More NFTs</h1>
          <p className="text-gray-300 mt-2">
          Explore new trending NFTs
          </p>
        </div>
        <button className="mt-6 lg:mt-0 px-6 py-3 border-2 border-[#a159ff] text-[#a159ff] font-semibold rounded-md flex items-center space-x-2 hover:bg-[#a159ff] hover:text-white transition duration-300">
          <i className="fa-regular fa-eye"></i>
          <span>See All</span>
        </button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newTrading.map((trade, index) => (
          <div
            key={index}
            className="group relative bg-[#3b3b3b] rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
          >
            {/* Background Image with Animation */}
            <Link to={"/marketplace"}  className="overflow-hidden" >
              <img
                src={trade.nt_bg_img}
                alt={trade.nt_title}
                className="w-full  object-cover group-hover:scale-110 transition-transform duration-500 ease-out cursor-pointer"
                onClick={(e) => {
                  e.target.classList.add("animate-pulse");
                  setTimeout(() => e.target.classList.remove("animate-pulse"), 300);
                }}
              />
            </Link>

            {/* Details Section */}
            <div className="p-4">
              <h1 className="text-lg font-semibold text-white">{trade.nt_title}</h1>
              <div className="flex items-center mt-4">
                <img
                  src={trade.nt_picture}
                  alt={trade.nt_name}
                  className="w-10 h-10 rounded-full"
                />
                <p className="ml-4 text-gray-300">{trade.nt_name}</p>
              </div>
              <div className="flex justify-between mt-6 text-gray-300">
                <div>
                  <p className="text-sm">Price</p>
                  <p className="font-semibold text-white">1.63 ETH</p>
                </div>
                <div>
                  <p className="text-sm">Highest Bid</p>
                  <p className="font-semibold text-white">0.33 wETH</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DIscoverMore;
