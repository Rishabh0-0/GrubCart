import { useState } from "react";
import Meals from "./Components/Meals";
import Header from "./Layout/Header";
import Cart from "./Components/Cart/Cart";
import Footer from "./Layout/Footer";
import sampleMeals from "./data/sampleMeals";
import { CartProvider } from "./context/CartContext";

const App = () => {
  const [meals] = useState(sampleMeals);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <div className="flex-1 flex flex-col min-h-0">
          <Meals meals={meals} />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
