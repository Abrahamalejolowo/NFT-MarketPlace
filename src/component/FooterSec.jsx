import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#3b3b3b] py-6 flex flex-col items-center text-white">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-6 py-6 lg:px-12 border-b-2 border-gray-600 w-[90%] space-y-8 lg:space-y-0">
        {/* Logo & Social Section */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-shop text-[#a159ff] text-2xl"></i>
            <h1 className="text-xl font-bold font-sans tracking-wide">
              NFT Marketplace
            </h1>
          </div>
          <p className="text-sm">NFT marketplace</p>
         
          {/* Social Logos */}
          <div className="flex space-x-4 text-lg">
            <i className="fa-brands fa-linkedin hover:text-[#a159ff]"></i>
            <i className="fa-brands fa-youtube hover:text-[#a159ff]"></i>
            <i className="fa-brands fa-twitter hover:text-[#a159ff]"></i>
            <i className="fa-brands fa-instagram hover:text-[#a159ff]"></i>
          </div>
        </div>
        {/* Explore Section */}
        <div>
          <ul className="space-y-2">
            <li className="text-xl font-bold font-sans tracking-wide">
              <a href="#">Explore</a>
            </li>
            <li>
              <Link to={"/marketplace"} className="hover:text-[#a159ff]">Marketplace</Link>
            </li>
            <li>
              <Link to={"/rankings"} className="hover:text-[#a159ff]">Rankings</Link>
            </li>
            
          </ul>
        </div>
        {/* Subscribe Section */}
        <div className="w-full lg:w-[40%] space-y-3">
          <h1 className="text-xl font-bold font-sans tracking-wide">
            Join our weekly digest
          </h1>
          <h3 className="text-sm">
            Get exclusive promotions & updates straight to your inbox.
          </h3>
            <div className="flex flex-col space-y-4 w-full sm:flex-col sm:space-y-4 lg:flex-row lg:items-center lg:space-x-2 ">
          <div className="flex rounded-full bg-white p-1 lg:w-[64%] ">
        <input
          type="email"
          placeholder="Enter your email here"
          className="lg:px-8 sm:px-3 md:px-7 py-2 px-5 w-full  text-sm text-gray-700 outline-none rounded-2xl"
        />
        <button className="px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-full hover:bg-purple-600 " onClick={{prompt:"Thank for subscribe"}}>
          Subscribe
        </button>
      </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <p className="mt-4 text-center text-sm text-gray-400 " >
        Ⓒ NFT Market. Use this template freely.
      </p>
      
    </footer>
  );
}

export default Footer;
