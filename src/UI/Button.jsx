import React from "react";

const Button = ({ 
  onClick, 
  children, 
  type = "button", 
  variant = "primary", 
  className = "",
  fullWidth = false
}) => {
  // Variant styles
  const variantClasses = {
    primary: "bg-green-500 text-white hover:bg-green-600 active:bg-green-700",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
  };

  // Base classes for all buttons
  const baseClasses = "py-2 px-4 rounded-lg font-medium transition-colors";
  
  // Get variant classes
  const variantClass = variantClasses[variant] || variantClasses.primary;
  
  // Width class
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClass} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 