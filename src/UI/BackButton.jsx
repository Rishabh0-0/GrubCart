import React from 'react';

const BackButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

export default BackButton; 