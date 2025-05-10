import React from "react";
import AddButton from "../UI/AddButton";

const FoodCard = ({ title, price, image, calories, time, onAdd }) => {
  return (
    <div className="w-40 sm:w-56 md:w-60 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-4 md:p-5 shadow-sm flex flex-col transition-all duration-300 active:shadow-md active:translate-y-[-2px] hover:shadow-md hover:translate-y-[-5px] transform">
      {/* Title and Price */}
      <div className="mb-1 sm:mb-2 md:mb-3 text-center">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 line-clamp-1">
          {title}
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mt-0.5 sm:mt-1">
          ${price}
        </p>
      </div>

      {/* Food Image */}
      <div className="flex-grow flex justify-center mb-2 md:mb-3 transition-all duration-300 hover:scale-105 active:scale-105">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover"
        />
      </div>

      {/* Footer with calories, time, and add button */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5 sm:gap-1">
          {/* Calories */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            <span className="text-orange-500 text-xs sm:text-sm">
              🔥
            </span>
            <span className="text-[10px] sm:text-sm md:text-base font-semibold text-gray-700">
              {calories} Cal
            </span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            <span className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-[10px] sm:text-sm md:text-base text-gray-400">
              {time}m
            </span>
          </div>
        </div>

        {/* Add Button */}
        <AddButton onClick={onAdd} />
      </div>
    </div>
  );
};

export default FoodCard;
