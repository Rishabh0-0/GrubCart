import React from "react";
import FoodCard from "./FoodCard";
import { useCart } from "../context/CartContext";

const Meals = ({ meals = [] }) => {
  const { addItem } = useCart();

  const handleAddToCart = (meal) => {
    addItem({
      id: meal.id,
      title: meal.title,
      price: meal.price,
      image: meal.image
    });
  };

  return (
    <div className="container mx-auto px-4 py-4 md:py-6 max-w-[1100px]">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-800">Our Menu</h2>
      
      {/* Grid container with responsive columns and proper centering */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 justify-items-center">
        {meals.map((meal) => (
          <div key={meal.id} className="w-full flex justify-center">
            <FoodCard
              title={meal.title}
              price={meal.price}
              image={meal.image}
              calories={meal.calories}
              time={meal.time}
              onAdd={() => handleAddToCart(meal)}
            />
          </div>
        ))}
        
        {/* Display placeholder message if no meals */}
        {meals.length === 0 && (
          <div className="col-span-2 md:col-span-3 lg:col-span-4 py-10 text-center text-gray-500">
            No meals available at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default Meals; 