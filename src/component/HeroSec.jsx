import React from "react";
import { Link } from "react-router-dom";

function HeroSec() {
  return (
    <section className="font-[work sans] text-white px-[10%] py-12 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between pt-20">
      {/* Hero Text Section */}
      <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0 lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">
          Discover Digital Art & Collect NFTs
        </h1>
        <p className="text-base sm:text-lg mt-4 text-gray-300">
          NFT marketplace UI created with Anima for Figma. Collect, buy, and sell art from more than 20k NFT artists.
        </p>
        <Link to="/signup">
          <button className="mt-6 px-6 py-3 bg-[#a159ff] text-white font-semibold rounded-md flex items-center justify-center space-x-2 hover:bg-[#8e4be2] mx-auto lg:mx-0 transition duration-300">
            <i className="fa-solid fa-rocket"></i>
            <span>Get Started</span>
          </button>
        </Link>
        {/* Stats Section */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold">240k+</p>
            <p className="text-gray-400">Total Sale</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold">100+</p>
            <p className="text-gray-400">Auctions</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold">240k+</p>
            <p className="text-gray-400">Artists</p>
          </div>
        </div>
      </div>

      {/* Featured NFT Section */}
      <div className="lg:w-1/2 flex flex-col items-center mx-auto lg:mx-0 group perspective">
        {/* NFT Image and Details Wrapper */}
        <div className="w-full max-w-lg transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:-rotate-y-12">
          {/* NFT Image */}
          <img
            src="/image/Image Placeholder (1).png"
            alt="NFT Art: Space Walking"
            loading="lazy"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
          {/* NFT Details */}
          <div className="w-full h-auto py-4 flex flex-col justify-center bg-[#3b3b3b] mt-[-5px] rounded-b-lg">
            <h3 className="text-base font-semibold ml-4">Space Walking</h3>
            <div className="flex items-center mt-2 ml-4">
              <img
                src="/image/Avatar (4).png"
                alt="Avatar of Animakid"
                className="w-8 h-8 rounded-full"
              />
              <p className="ml-2 font-medium text-sm text-white">Animakid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSec;
