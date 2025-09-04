import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#2874f0] px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between">
     
      <div className="flex flex-col leading-tight mb-2 sm:mb-0">
        <span className="text-white font-bold italic text-lg sm:text-xl">
          Flipkart
        </span>
        <span className="text-yellow-300 text-[10px] sm:text-xs flex items-center">
          Explore <span className="font-bold ml-1">Plus</span>
        </span>
      </div>

      
      <div className="flex items-center bg-white rounded-sm w-full sm:w-[300px] md:w-[500px] order-3 sm:order-2 mt-2 sm:mt-0">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="px-3 py-2 w-full text-sm outline-none"
        />
        <FaSearch className="text-[#2874f0] text-lg mx-3 cursor-pointer" />
      </div>

     
      <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 text-white text-xs sm:text-sm font-medium order-2 sm:order-3 mt-2 sm:mt-0">
        <button className="bg-white text-[#2874f0] px-3 sm:px-5 py-1 cursor-pointer rounded-sm font-semibold">
          Login
        </button>
        <span className="cursor-pointer">Become a Seller</span>
        <span className="cursor-pointer">More</span>
        <div className="flex items-center cursor-pointer">
          <FaShoppingCart className="mr-1 sm:mr-2" /> Cart
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
