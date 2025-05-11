import React from "react";

const MealCard = ({ title, price, image, calories, time, onAdd }) => {
  return (
    <div className="w-40 sm:w-56 md:w-72 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-4 md:p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300 hover:translate-y-[-5px] transform transition-transform">
      {/* Title and Price */}
      <div className="mb-1 sm:mb-3 md:mb-6 text-center">
        <h3 className="text-base sm:text-xl md:text-3xl font-bold text-gray-800 line-clamp-1">
          {title}
        </h3>
        <p className="text-lg sm:text-2xl md:text-4xl font-semibold text-gray-500 mt-0.5 sm:mt-2">
          ${price}
        </p>
      </div>

      {/* Meal Image */}
      <div className="flex-grow flex justify-center mb-2 md:mb-6 transition-transform duration-300 hover:scale-105">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full object-cover"
        />
      </div>

      {/* Footer with calories, time, and add button */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5 sm:gap-1 md:gap-2">
          {/* Calories */}
          <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2">
            <span className="text-orange-500 text-xs sm:text-sm md:text-base">
              🔥
            </span>
            <span className="text-[10px] sm:text-sm md:text-xl font-semibold text-gray-700">
              {calories} Cal
            </span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            <span className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2.5 w-2.5 sm:h-4 sm:w-4 md:h-5 md:w-5"
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
            <span className="text-[10px] sm:text-sm md:text-xl text-gray-400">
              {time}m
            </span>
          </div>
        </div>

        {/* Add Button */}
        <button
          onClick={onAdd}
          className="bg-green-500 hover:bg-green-600 text-white w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded sm:rounded-lg md:rounded-xl flex items-center justify-center transition-colors duration-300 hover:shadow-lg active:scale-95 transform transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 sm:h-5 sm:w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MealCard;
