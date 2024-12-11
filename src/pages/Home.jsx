import React from "react";
import { useState } from "react";
import InputCategory from "../components/InputCategory";
import CardDisplay from "../components/CardDisplay";

const Home = ({ mealData, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState(1); // Nombre de repas visibles
  const [selectedCategory, setSelectedCategory] = useState("");

  // Vérification et filtrage des données
  const filteredMeals = Array.isArray(mealData)
    ? mealData.slice(0, inputValue)
    : [];
  return (
    <div className="home-container">
      {/* Section des entrées utilisateur */}
      <InputCategory
        meal={mealData}
        setSearchQuery={setSearchQuery}
        inputValue={inputValue}
        setInputValue={setInputValue}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Affichage des cartes */}
      <CardDisplay meal={filteredMeals} selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
