import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const allDishes = [
  {
    id: 1,
    name: "Pancakes",
    category: "breakfast",
    image: "https://via.placeholder.com/150",
    price: "$5.99",
  },
  {
    id: 2,
    name: "Burger",
    category: "lunch",
    image: "https://via.placeholder.com/150",
    price: "$8.99",
  },
  {
    id: 3,
    name: "Milkshake",
    category: "shakes",
    image: "https://via.placeholder.com/150",
    price: "$3.99",
  },
  {
    id: 4,
    name: "Omelette",
    category: "breakfast",
    image: "https://via.placeholder.com/150",
    price: "$4.99",
  },
  {
    id: 5,
    name: "Grilled Sandwich",
    category: "lunch",
    image: "https://via.placeholder.com/150",
    price: "$6.99",
  },
  {
    id: 6,
    name: "Strawberry Shake",
    category: "shakes",
    image: "https://via.placeholder.com/150",
    price: "$4.49",
  },
];

function App() {
  const [items, setItems] = useState(allDishes);
  const [category, setCategory] = useState("all");

  const handleFilter = (category) => {
    setCategory(category);
    if (category === "all") {
      setItems(allDishes);
    } else {
      setItems(allDishes.filter((item) => item.category === category));
    }
  };

  return (
    <div id="main">
      <h1>Menu Application</h1>
      <div className="button-container">
        <button id="filter-btn-1" onClick={() => handleFilter("breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => handleFilter("lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => handleFilter("shakes")}>
          Shakes
        </button>
      </div>
      <Menu items={items} />
    </div>
  );
}

export default App;
