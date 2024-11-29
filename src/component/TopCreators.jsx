import React from "react";
import { TopCreatorsCard } from "./Database";
import { Link } from "react-router-dom";

function TopCreators() {
  return (
    <section className="px-6 py-12 lg:px-16 max-w-7xl mx-auto">
      {/* Top Creators Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-white">Top Creators</h1>
          <p className="text-gray-300 mt-2">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <Link to="/rankings" >
          <button className="mt-6 lg:mt-0 px-6 py-3 border-2 border-[#a159ff] text-[#a159ff] font-semibold rounded-md flex items-center space-x-2 hover:bg-[#a159ff] hover:text-white transition duration-300">
            <i className="fa-solid fa-rocket"></i>
            <span>View Rankings</span>
          </button>
        </Link>
      </div>

      {/* Top Creators Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TopCreatorsCard.length > 0 ? (
          TopCreatorsCard.map((creator, index) => (
            <div
              key={index}
              className="bg-[#3b3b3b] flex flex-col items-center p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 ease-out"
            >
              {/* Creator Image */}
              <div className="relative group">
                <img
                  src={creator.creator_picture}
                  alt={`Profile picture of ${creator.creator_name}`}
                  className="rounded-lg transition-transform duration-500 group-hover:scale-110 ease-out"
                />
              </div>
              {/* Creator Info */}
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-white">
                  {creator.creator_name}
                </h4>
                <p className="text-gray-400 mt-2 text-sm">
                  Total sales:{" "}
                  <span className="text-[#a159ff] font-bold">{creator.total_sales} ETH</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">
            No creators available.
          </p>
        )}
      </div>
    </section>
  );
}

export default TopCreators;
