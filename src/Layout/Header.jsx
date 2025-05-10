import React from "react";
import logo from "../assets/icons/fast-food_737967.png";
import cartIcon from "../assets/icons/shopping-cart_788812.png";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="GrubCart Logo"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            grubcart
          </h1>
        </div>

        {/* Cart Button */}
        <button className="p-2 relative rounded-full hover:bg-gray-100 transition-colors duration-300 active:scale-95 transform">
          <img
            src={cartIcon}
            alt="Shopping Cart"
            className="w-6 h-6 md:w-7 md:h-7"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
