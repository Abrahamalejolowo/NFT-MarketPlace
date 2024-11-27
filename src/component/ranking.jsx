import React from "react";
import { TodayRanking } from "./Database";
import { Time } from "./Database";

function Ranking() {
  return (
    <section className="bg-[#2b2b2b] py-10 pt-[5%]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-[32px] md:text-[40px] text-white font-bold text-center md:text-left">
          Top Creators
        </h1>
        <p className="text-[18px] md:text-[20px] text-white text-center md:text-left mt-2">
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center md:justify-between items-center gap-6 mt-8">
          {Time.map((label, index) => (
            <a
              key={index}
              href="#"
              className={`text-[20px] font-medium ${
                index === 0 ? "text-white" : "text-[#858584]"
              }`}
            >
              <span className="block sm:hidden">{label.short}</span>
              <span className="hidden sm:block">{label.date}</span>
            </a>
          ))}
        </div>

        {/* Table Header */}
        <div className="text-white bg-[#3b3b3b] rounded-lg flex justify-between items-center px-4 py-3 mt-10 shadow-lg">
          <span className="font-medium text-gray-400 text-center w-[10%]">#</span>
          <span className="font-medium flex-1">Artist</span>
          <span className="font-medium text-gray-400 text-center hidden sm:block w-[20%]">
            Change
          </span>
          <span className="font-medium text-gray-400 text-center hidden sm:block w-[20%]">
            NFTs Sold
          </span>
          <span className="font-medium text-gray-400 text-center w-[20%]">
            Volume
          </span>
        </div>

        {/* Ranking List */}
        {TodayRanking.length > 0 ? (
          TodayRanking.map((rank, index) => (
            <div
              key={index}
              className="bg-[#3b3b3b] rounded-lg flex items-center px-4 py-4 mt-4 shadow-lg"
            >
              {/* Rank */}
              <div className="flex-1 flex items-center gap-4 ml-4">
                <img
                  src={rank.image}
                  alt={`${rank.name}'s avatar`}
                  className="w-12 h-12 rounded-full"
                />
                <span className="text-white font-bold text-[16px] md:text-[20px]">
                  {rank.name}
                </span>
              </div>
              {/* Stats */}
              <span className="hidden sm:block text-[#00AC4F] text-center w-[20%]">
                {rank.change || "+1.40%"}
              </span>
              <span className="hidden sm:block text-white text-center w-[20%]">
                {rank.nftsSold || "602"}
              </span>
              <span className="text-white text-center w-[20%]">
                {rank.volume || "12.4 ETH"}
              </span>
            </div>
          ))
        ) : (
          <p className="text-white text-center mt-10">No rankings available.</p>
        )}
      </div>
    </section>
  );
}

export default Ranking;
