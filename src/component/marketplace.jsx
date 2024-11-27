import React from "react";
import { NFTS } from "./Database";

function Marketplace() {
  return (
    <body className="pt-[5%]">
      <div className="bg-[#2B2B2B]">
        <header className="ml-[10%] pt-10">
          <h1 className="font-serif lg:text-5xl text-4xl  text-white">
            Browse Marketplace
          </h1>
          <p className="lg:text-xl sm:text-[15px] text-white mt-6">
            Browse through more than 50k NFTs on the NFT Marketplace.
          </p>
        </header>
        <div className="flex items-center bg-[#3b3b3b] rounded-xl px-10 py-4 max-w-[80%] w-full mx-auto h-[30%] mt-10">
          <input
            type="text"
            placeholder="Search your favourite NFTs"
            className="flex-grow bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
          />
          <i className="fa-solid fa-magnifying-glass text-white"></i>
        </div>
        <hr className="text-gray-400 mt-[5%]" />
        <span className="flex sm:mx-[15%] sm:min-mx-[10%] grid-mx-[10%] lg:w-[40%] lg:mx-auto justify-between mt-5 pb-4">
          <a href="" className="text-white text-xl ">
            NTFs{" "}
            <span className="bg-gray-400 rounded-xl w-[20px] h-[20px]">
              320
            </span>
          </a>
          <a href="" className="text-white text-xl">
            Collection <span className="bg-gray-400 rounded-xl ">67</span>
          </a>
        </span>
      </div>
      <a
        href=""
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 py-4 bg-[#3b3b3b] "
      >
        {NFTS.map((rank, index) => (
          <div key={index}>
            <div className="bg-[#2b2b2b] rounded-lg overflow-hidden shadow-lg pb-10 hover:scale-105 transition-transform">
              <img
                src={rank.image}
                alt=""
                className="w-full h-50   object-cover"
              />
              <div className="mx-[5%]">
                <h1 className="text-[25px] text-white mt-5">{rank.name}</h1>
                <div className="flex mt-2 hover:scale-105 transition-transform">
                  <img src={rank.logo} alt="" className=" w-9 h-9" />
                  <p className="text-white font-thin text-[20px]">
                    {rank.logoName}
                  </p>
                </div>
                <div className="flex justify-between mt-4">
                  <p className="text-gray-400">Price</p>
                  <p className="text-gray-400">Highest Bid</p>
                </div>
                <div className="flex justify-between mt-1">
                  <p className="text-white">{rank.price}</p>
                  <p className="text-white ">0.33 wETH</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </a>
    </body>
  );
}

export default Marketplace;
