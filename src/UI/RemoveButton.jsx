import React from "react";

const RemoveButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-600
                w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
                rounded-lg sm:rounded-xl md:rounded-2xl
                flex items-center justify-center
                transition-all duration-100
                hover:shadow-sm active:shadow-inner active:scale-95
                transform touch-manipulation cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12H4"
        />
      </svg>
    </button>
  );
};

export default RemoveButton; 