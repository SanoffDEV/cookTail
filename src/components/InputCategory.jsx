import React, { useEffect } from "react";

const InputCategory = ({
  meal,
  setSearchQuery,
  inputValue,
  setInputValue,
  selectedCategory,
  setSelectedCategory,
}) => {
  useEffect(() => {
    setInputValue(meal.length > 0 ? meal.length : 1);
  }, [meal]);

  const mealCategories = [
    { idCategory: 1, strCategory: "Beef" },
    { idCategory: 2, strCategory: "Chicken" },
    { idCategory: 3, strCategory: "Dessert" },
    { idCategory: 4, strCategory: "Lamb" },
    { idCategory: 5, strCategory: "Miscellaneous" },
    { idCategory: 6, strCategory: "Pasta" },
    { idCategory: 7, strCategory: "Pork" },
    { idCategory: 8, strCategory: "Seafood" },
    { idCategory: 9, strCategory: "Side" },
    { idCategory: 10, strCategory: "Starter" },
    { idCategory: 11, strCategory: "Vegan" },
    { idCategory: 12, strCategory: "Vegetarian" },
    { idCategory: 13, strCategory: "Breakfast" },
    { idCategory: 14, strCategory: "Goat" },
  ];

  return (
    <div className="inputs-part">
      <h1
        className="text-center font-serif font-extrabold text-4xl md:text-5xl text-blue-500 pt-3
            "
      >
        The Meal Finder
      </h1>

      <div className="flex flex-col justify-center items-center pt-10">
        <input
          className="h-12 border-2 border-pink-300 rounded-lg text-lg text-black font-semibold px-3 focus:outline outline-2 outline-pink-200 placeholder-blue-500"
          type="search"
          placeholder="Search for a meal"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex flex-col items-center space-y-4 p-6">
          <input
            className="w-64 h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer 
           accent-pink-300 focus:outline-none  hover:accent-pink-200"
            type="range"
            min="1"
            value={inputValue}
            max={meal.length > 0 ? meal.length : 1}
            onChange={(e) => setInputValue(Number(e.target.value))}
          />
          <span className="text-gray-700 font-medium text-lg">
            {inputValue} Meals
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputCategory;

{
  /* <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All categories</option>
          {mealCategories.map((category) => (
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select> */
}
