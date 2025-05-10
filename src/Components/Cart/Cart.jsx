import React from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import BackButton from "../../UI/BackButton";
import TrashButton from "../../UI/TrashButton";
import CloseButton from "../../UI/CloseButton";

const Cart = ({ onClose }) => {
  const { items, totalAmount, clearCart } = useCart();
  const hasItems = items.length > 0;

  const formattedTotalAmount = `$${totalAmount.toFixed(2)}`;

  const handleOrder = () => {
    console.log("Order placed for", formattedTotalAmount);
    clearCart();
    onClose();
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <Modal onClose={onClose} className="w-full max-w-md sm:max-h-[85vh] h-full sm:h-auto flex flex-col bg-gray-50 sm:bg-white">
      {/* Mobile Header (visible on small screens) */}
      <div className="sm:hidden p-4 flex justify-between items-center sticky top-0 bg-gray-50 z-10 border-b border-gray-200">
        <BackButton onClick={onClose} />
        <h2 className="text-lg font-bold text-gray-800">Cart</h2>
        <TrashButton onClick={handleClearCart} />
      </div>

      {/* Desktop Header (visible on sm screens and up) */}
      <div className="hidden sm:flex p-4 border-b border-gray-200 justify-between items-center sticky top-0 bg-white rounded-t-2xl z-10">
        <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
        <CloseButton onClick={onClose} />
      </div>

      {/* Cart items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 sm:space-y-3">
        {hasItems ? (
          items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.title}
              price={item.price}
              quantity={item.quantity}
              image={item.image}
            />
          ))
        ) : (
          <div className="text-center py-16 sm:py-8 text-gray-500">
            <p className="text-xl mb-2">🛒</p>
            Your cart is empty.
          </div>
        )}
      </div>

      {/* Footer (common part for total, different layout for buttons) */}
      {hasItems && (
        <div className="p-4 border-t border-gray-200 sticky bottom-0 bg-gray-50 sm:bg-white sm:rounded-b-2xl">
          {/* Mobile Footer (Subtotal and Total are combined in the new design) */}
          <div className="sm:hidden space-y-2 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800 font-medium">{formattedTotalAmount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-bold text-lg">Total</span>
              <span className="text-green-600 font-bold text-xl">{formattedTotalAmount}</span>
            </div>
          </div>

          {/* Desktop Footer Total */}
          <div className="hidden sm:flex justify-between items-center mb-4">
            <span className="font-bold text-gray-800">Total Amount</span>
            <span className="font-bold text-xl text-gray-800">{formattedTotalAmount}</span>
          </div>
          
          {/* Mobile Checkout Button */}
          <div className="sm:hidden">
            <Button 
              onClick={handleOrder}
              fullWidth
              className="py-3 text-lg"
            >
              Checkout &nbsp;&middot;&nbsp; {formattedTotalAmount}
            </Button>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex gap-3">
            <Button 
              onClick={onClose} 
              variant="secondary"
              fullWidth
            >
              Close
            </Button>
            <Button 
              onClick={handleOrder}
              fullWidth
            >
              Order
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Cart; 