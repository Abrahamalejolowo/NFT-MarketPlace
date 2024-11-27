import React, { useState } from "react";
import { navLinks } from "./Database";
import { Link } from "react-router-dom";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-white px-8 py-4 shadow-md fixed top-0 right-0 left-0 z-20 bg-blend-color-dodge bg-[#2b2b2b]">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <Link to={"/"}>
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-shop text-[#a159ff] text-2xl"></i>
            <h1 className="text-xl font-bold font-sans tracking-wide">
              NFT Marketplace
            </h1>
          </div>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6 font-semibold text-sm">
            {navLinks.map((item, index) => {
              const { label, path } = item;
              return (
                <Link
                  to={path}
                  key={index}
                  className="hover:text-[#a159ff] cursor-pointer transition ease-out duration-300"
                >
                  {label}
                </Link>
              );
            })}
          </ul>
          <Link to="/signup">
            <button className="flex items-center space-x-2 bg-[#a159ff] text-white px-4 py-2 rounded-md hover:bg-[#8e4be2] transition duration-300">
              <i className="fa-regular fa-user text-lg"></i>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <i
            className={menuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}
          ></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden mt-4 space-y-2 text-sm font-semibold transition-all duration-300 ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        {navLinks.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="hover:text-[#a159ff] cursor-pointer transition ease-out duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
