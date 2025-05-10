import React, { createContext, useContext, useReducer } from "react";

// Initial cart state
const initialCartState = {
  items: [],
  totalAmount: 0,
};

// Create context
const CartContext = createContext();

// Cart reducer function to handle different actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      let updatedItems;
      if (existingItemIndex !== -1) {
        // Item already exists, update quantity
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
      } else {
        // Add new item with quantity 1
        updatedItems = [...state.items, { ...action.item, quantity: 1 }];
      }

      // Calculate new total amount
      const newTotalAmount = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
    }

    case "REMOVE_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      if (existingItemIndex === -1) return state;

      const existingItem = state.items[existingItemIndex];
      let updatedItems;

      if (existingItem.quantity === 1) {
        // Remove item if quantity becomes 0
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        // Decrease quantity by 1
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
      }

      // Calculate new total amount
      const newTotalAmount = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
    }

    case "CLEAR_CART":
      return initialCartState;

    default:
      return state;
  }
};

// Cart context provider component
export const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  // Cart actions
  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const clearCart = () => {
    dispatchCartAction({ type: "CLEAR_CART" });
  };

  // Context value
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    clearCart: clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartContext; 