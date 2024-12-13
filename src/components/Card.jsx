import React, { useState, useEffect, useRef } from "react";

const Card = ({ meal }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef(null);

  // Fonction pour désactiver l'état actif lorsqu'on clique en dehors de la carte
  const delIsActive = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (isActive) {
      document.body.addEventListener("click", delIsActive);
    }
    return () => {
      document.body.removeEventListener("click", delIsActive);
    };
  }, [isActive]);

  // Fonction pour activer/désactiver l'état actif
  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div
      ref={cardRef}
      className={`max-h-[470px] flex-1 basis-1/5  mx-5 my-3 bg-white border border-black rounded-xl py-8 px-16 shadow-xl ${
        isActive
          ? "max-h-[85vh] max-w-3xl w-96 sm:w-3/4 lg:w-full scrollbar-hide overflow-scroll bg-gray-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-110 z-10 shadow-lg "
          : ""
      }`}
    >
      <div>
        {/* Bouton pour fermer les détails */}
        <span
          className={
            isActive
              ? "absolute top-4.5 right-5 text-pink-400 cursor-pointer hover:scale-110 transform transition duration-300 bg-gray-200 p-2 rounded-full shadow hover:bg-pink-200"
              : "flex-none"
          }
          onClick={() => setIsActive(false)}
        >
          {isActive ? "✖" : ""}
        </span>

        {/* Nom et origine du repas */}
        <h2 className="font-semibold text-3xl mb-2 text-pink-400">
          {meal.strMeal}
        </h2>
        <h3 className="text-lg font-thin mb-4">
          Origin:{" "}
          <span className=" font-semibold text-blue-400">{meal.strArea}</span>
        </h3>
        <img
          className={"size-56 mb-5 bg-cover m-auto"}
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />

        {/* Bouton pour afficher plus d'informations */}
        <h4
          className=" font-semibold text-lg hover:cursor-pointer hover:scale-105 ease-in-out duration-300 "
          onClick={handleClick}
        >
          {isActive ? "" : "More Info"}
        </h4>

        {/* Section des ingrédients */}
        {isActive && (
          <div className="flex flex-col space-y-2 pb-5 bg-gray-50 border border-pink-200 rounded-xl shadow-lg px-4 items-center justify-center mb-4 pt-5">
            <h3 className="text-lg font-bold mb-2">Ingredients</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              {Array.from({ length: 20 }, (_, i) => {
                const ingredient = meal[`strIngredient${i + 1}`];
                const measure = meal[`strMeasure${i + 1}`];

                return ingredient ? (
                  <span
                    key={i}
                    className="flex items-center px-3 py-1 bg-gray-100 border border-pink-200 rounded-md shadow-sm"
                  >
                    {`${i + 1}. ${ingredient} ${measure ? `: ${measure}` : ""}`}
                  </span>
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* Section de la recette */}
        {isActive && (
          <div className="space-y-6 p-6 bg-gray-50 border border-pink-200 rounded-xl shadow-lg ">
            {/* Titre de la recette */}
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">
              Recipe
            </h3>

            {/* Instructions */}
            <div className="recipe text-gray-700 leading-relaxed text-base">
              {meal.strInstructions}
            </div>

            {/* Lien vers la vidéo */}
          </div>
        )}
        {isActive && (
          <div className="text-center mt-5">
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-pink-300 text-white font-semibold rounded-lg shadow-md hover:bg-pink-400 transition duration-300"
            >
              Learn in Video!
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
