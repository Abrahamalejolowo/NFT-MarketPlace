import React from "react";
import { artist } from "./Database";

function Collection() {
    return (
      <body className="bg-[#2B2B2B] px-[10%] pb-10 justify-between">
        {/* Image Section */}
        <img src="src/image/Image PlaceHolder (11).png" alt="" className="w-full h-[20rem] md:h-[34rem] object-cover"/>
  
        {/* Content Section */}
        <div className="lg:flex  mt-10">
          <div className="w-full lg:w-[60%]">
            <h1 className="text-2xl md:text-[40px] lg:text-[50px] font-semibold text-white">
              The Orbitians
            </h1>
            <p className="text-[#858584] text-2xl  mt-5 font-semibold">
              Minted on Sep 30, 2022
            </p>
            <p className="text-[#858584] font-bold lg:mt-8 md:mt-5 text-sm md:text-xl">
              Created By
            </p>
            <span className="flex items-center mt-2">
              <img src="src/image/pic.png" alt="" className="w-8 h-8 md:w-10 md:h-10 rounded-full"/>
              <p className="text-white text-2xl md:text-xl font-normal ml-2">
                Orbitian
              </p>
            </span>
  
            {/* Description Section */}
            <p className="text-[#858584] text-2xl lg:mt-7 md:mt-[10px] font-bold">
              Description
            </p>
            <p className="text-white text-sm md:text-xl mt-3 font-normal">
              The Orbitians <br /> is a collection of 10,000 unique NFTs on the Ethereum
              blockchain.
            </p>
            <p className="mt-4 md:mt-5 text-white text-sm md:text-xl font-normal">
              There are all sorts of beings in the NFT Universe. The most
              advanced and friendly of the bunch are Orbitians.
            </p>
            <p className="mt-4 md:mt-5 text-white text-sm md:text-xl">
              They live in metal space machines, high up in the sky and only have
              one foot on Earth.
            </p>
            <p className="mt-4 md:mt-5 text-white text-sm md:text-xl font-normal">
              These Orbitians are a peaceful race, but they have been at war with
              a group of invaders for many generations.
            </p>
          {/* details */}
        
            <div className="mt-5">
            <p className="text-[#858584] text-3xl">Details</p>
            <span className="flex mt-6">
                <img src="src/image/Globe.png" alt="" />
                <p  className="text-white text-2xl ml-3">View on Etherscan</p>
            </span>
            <span className="flex mt-4">
                <img src="src/image/Globe.png" alt="" />
                <p className="text-white text-2xl ml-3">View Original</p>
            </span>
          </div>
          </div>

         
  
          {/* Auction Section time*/}
          <div className="bg-[#3b3b3b] h-full py-10 lh:px-20 sm:px-10        rounded-3xl mt-10 ">
            <p className="text-white text-xl md:text-3xl">Auction ends in:</p>
            <div className="flex text-white gap-5 md:gap-5 mt-5 md:mt-10 text-lg md:text-3xl">
              <span>
                <p className="text-[30px] md:text-[40px]">00</p>
                <p className="text-sm md:text-xl">Hours</p>
              </span>
              <p>:</p>
              <span>
                <p className="text-[30px] md:text-[40px]">00</p>
                <p className="text-sm md:text-xl">Minutes</p>
              </span>
              <p>:</p>
              <span>
                <p className="text-[30px] md:text-[40px]">00</p>
                <p className="text-sm md:text-xl">Seconds</p>
              </span>
            </div>
            <button className="bg-[#a259ff] text-white py-2 px-16 md:py-4 md:px- mt-6 md:mt-8 mx-auto lg:text-3xl  md:text-2xl font-semibold rounded-3xl">
              Place bid
            </button>
          </div>
        </div>
  
        {/* Artist Section */}
        <div>
          <h1 className="text-xl md:text-4xl font-semibold mt-10 md:mt-16 text-white">
            More from this artist
          </h1>
          <a href="" className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 px-4 md:px-8 py-4 ">
            {artist.map((box, index) => (
              <div key={index}>
                <div className="bg-[#3b3b3b] rounded-3xl overflow-hidden shadow-lg pb-6  hover:scale-105 transition-transform">
                  <img src={box.image} alt=""  className="w-full h-50 md:h-50 object-cover"
                  />
                  <div className="mx-4 md:mx-[5%]">
                    <h1 className="lg:text-3xl md:text-[25px] text-white mt-4">
                      {box.name}
                    </h1>
                    <div className="flex items-center mt-2">
                      <img
                        src={box.logo}
                        alt=""
                        className="w-5 h-5 md:w-7 md:h-7 rounded-full"
                      />
                      <p className="text-white font-thin text-sm md:text-[20px] ml-2">
                        {box.logoName}
                      </p>
                    </div>
                    <div className="flex justify-between mt-3">
                      <p className="text-gray-400 text-xl">Price</p>
                      <p className="text-gray-400 text-xl">Highest Bid</p>
                    </div>
                    <div className="flex justify-between mt-1">
                      <p className="text-white text-sm">{box.price}</p>
                      <p className="text-white text-sm">0.33 wETH</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </a>
        </div>
      </body>
    );
  }
  export default Collection
  