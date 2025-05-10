import React from 'react';

const QuantityButton = ({ onClick, children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-8 h-8 flex items-center justify-center bg-green-100 hover:bg-green-200 active:bg-green-300 text-green-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
    >
      {children}
    </button>
  );
};

export const PlusButton = ({ onClick, disabled }) => (
  <QuantityButton onClick={onClick} disabled={disabled}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  </QuantityButton>
);

export const MinusButton = ({ onClick, disabled }) => (
  <QuantityButton onClick={onClick} disabled={disabled}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
  </QuantityButton>
); 