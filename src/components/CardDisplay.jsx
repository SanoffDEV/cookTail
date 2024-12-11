import React from "react";
import Card from "./Card";

const CardDisplay = ({ meal, selectedCategory }) => {
  return (
    <div className="flex justify-center text-center items-center flex-wrap mx-20 my-10">
      {meal.length > 0 ? (
        meal
          .filter(
            (meal) =>
              selectedCategory === "" || meal.strCategory === selectedCategory
          )
          .map((meal, index) => <Card key={index} meal={meal} />)
      ) : (
        <div className="no-meal">
          <h2 className="text-3xl font-bold">No meal found :(</h2>
        </div>
      )}
    </div>
  );
};

export default CardDisplay;
