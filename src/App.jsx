import FoodCard from "./Components/FoodCard";
import Header from "./Layout/Header";
import pizzaImage from "./assets/images/pizza.jpg";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <FoodCard
        title="Melting Cheese Pizza"
        price={10.99}
        image={pizzaImage}
        calories={44}
        time={20}
        onAdd={() => alert("Item added to cart!")}
      />
    </div>
  );
};

export default App;
