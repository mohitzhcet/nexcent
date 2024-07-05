import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png"; 
import { NavbarLinks } from "../data/navbar-links"; 

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
   //  toggle logic 
  };

  return (
    <nav className="bg-silver-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span className="text-[#263238] text-lg font-bold ">Nextcent</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-8">
          {NavbarLinks.map((link, index) => (
            <a key={index} href={link.path} className="text-black hover:text-gray-300">
              {link.title}
            </a>
          ))}
        </div>

        {/* Theme Toggle and Auth Buttons */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            className="text-white flex items-center focus:outline-none"
            onClick={toggleTheme}
          >
            {isDarkTheme ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>

          {/* Auth Buttons (Login / Sign Up) */}
          <div className="space-x-4">
            <button className="text-green-500 hover:text-green-700">Login</button>
            <button className="text-white bg-green-500 hover:bg-green-700 rounded-full py-2 px-6">Sign Up</button>
          </div>
        </div>

        {/* Mobile Menu Button (Hidden on Large Screens) */}
        <div className="flex lg:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
