import React from "react";
import { nftData } from "./Database";

const Animakid = () => {
  return (
    <div className="bg-[#32b2b2b] text-white min-h-screen px-6 md:px-[7%]">
      {/* Header Section */}
      <header className="relative w-full">
        {/* Banner Image */}
        <img
            src="public/image/d79c0afb936279fe8427b823bc6218b6.png"
            alt="Profile Avatar"
            className="w-24 h-24 absolute md:w-32 md:h-32 rounded-3xl border-white top-60  left-6 md:left-20 shadow-lg border-4"
          />
        <img
          src="public/image/7d032bf6bdce767947a59acb6afb7b99.png"
          alt="Banner"
          className="w-full h-64 md:h-80 object-cover"
        />
        

        {/* Profile Info */}
        <div className=" mt-16">
          <div className=" md:mt-6">
            <div className="lg:flex md:flex justify-between items-center">
              <h1 className="text-2xl md:text-4xl font-bold">Animakid</h1>
              <div className="flex gap-4 mr-4 md:mr-[10%]">
                <img src="public/image/Button.png" alt="Button 1" className="h-8 md:h-15 " />
                <img src="public/image/Button (1).png" alt="Button 2" className="h-8 md:h-15" />
              </div>
            </div>

            <div className=" flex-col md:flex-row md:items-center justify-between mt-4 space-y-4 md:space-y-0">
              <div className="flex justify-between w-full md:w-[30%]">
                <p className="text-lg md:text-xl">250k+</p>
                <p className="text-lg md:text-xl">56+</p>
                <p className="text-lg md:text-xl">3600+</p>
              </div>
              <div className="flex justify-between w-full md:w-[30%] text-sm md:text-lg text-gray-400">
                <p>Volume</p>
                <p>NFTs Sold</p>
                <p>Followers</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-600 text-lg md:text-xl font-bold">Bio</p>
              <p className="text-white mt-2 text-base md:text-lg">
                The Internet's Friendliest Designer Kid.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-lg md:text-xl">Links</p>
              <div className="flex gap-3 mt-2">
                <a href="#"><img src="public/image/Globe.png" alt="Website" className="h-6 md:h-8" /></a>
                <a href="#"><img src="public/image/Storefront.png" alt="Storefront" className="h-6 md:h-8" /></a>
                <a href="#"><img src="public/image/YoutubeLogo.png" alt="YouTube" className="h-6 md:h-8" /></a>
                <a href="#"><img src="public/image/TwitterLogo.png" alt="Twitter" className="h-6 md:h-8" /></a>
                <a href="#"><img src="public/image/InstagramLogo.png" alt="Instagram" className="h-6 md:h-8" /></a>
              </div>
            </div>
            
          </div>
        </div>
        <hr className="mt-4"/>
        <span className='flex sm:mx-[15%] sm:min-mx-[10%] grid-mx-[10%] lg:w-[60%] lg:mx-auto justify-between py-5'>
                <a href='' className='text-white text-xl '>NTFs <span className='bg-gray-400 rounded-xl w-[20px] h-[20px]'>320</span></a>
                <a href='' className='text-white text-xl'>Collection <span className='bg-gray-400 rounded-xl '>67</span></a>
                <a href='' className='text-white text-xl'>Collection <span className='bg-gray-400 rounded-xl '>67</span></a>
            </span>
      </header>

      {/* NFT Cards Section */}
      <main className=" ">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Created</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {nftData.map((nft, index) => (
            <div
              key={index}
              className="bg-[#3b3b3b] rounded-lg overflow-hidden shadow hover:scale-105 transition-transform"
            >
              <img
                src={nft.image}
                alt={nft.title}
                className="w-full h-40 md:h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{nft.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{nft.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-purple-500 font-semibold">{nft.price} ETH</span>
                  <span className="text-gray-500 text-sm">{nft.likes} Likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Animakid;
