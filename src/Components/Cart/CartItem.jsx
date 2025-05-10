import React from "react";
import { useCart } from "../../context/CartContext";
import AddButton from "../../UI/AddButton";
import RemoveButton from "../../UI/RemoveButton";

const CartItem = ({ id, name, price, quantity, image }) => {
  const { addItem, removeItem } = useCart();

  const formattedPrice = `$${price.toFixed(2)}`;
  const itemTotalDesktop = `$${(price * quantity).toFixed(2)}`;

  const handleAddItem = () => {
    addItem({ id, title: name, price, image });
  };

  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
    <div className="flex items-center p-3 bg-white rounded-xl shadow-sm sm:p-2 sm:border sm:border-gray-100">
      {/* Item image */}
      <div className="w-20 h-20 sm:w-16 sm:h-16 rounded-lg sm:rounded-full overflow-hidden mr-4 sm:mr-3 flex-shrink-0">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Item details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-gray-800 font-semibold text-md sm:font-medium sm:text-base truncate">{name}</h3>
        <span className="text-gray-700 font-bold text-lg sm:text-gray-600 sm:text-sm sm:font-normal block sm:hidden">{formattedPrice}</span>
        <div className="hidden sm:flex justify-between items-center mt-1">
          <span className="text-gray-600 text-sm">{formattedPrice}</span>
          <span className="text-gray-500 text-sm">×{quantity}</span>
          <span className="font-medium text-gray-800">{itemTotalDesktop}</span>
        </div>
      </div>

      {/* Quantity controls - unified for all screens */}
      <div className="flex items-center ml-3 space-x-2">
        <RemoveButton onClick={handleRemoveItem} />
        <span className="text-lg font-medium text-gray-800 w-5 text-center">{quantity}</span>
        <AddButton onClick={handleAddItem} />
      </div>
    </div>
  );
};

export default CartItem; 