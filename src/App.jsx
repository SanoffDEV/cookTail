import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";

const App = () => {
  const [mealData, setMealData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("chicken"); // Recherche par défaut

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
        );
        setMealData(res.data.meals || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des données ! :", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <Home mealData={mealData} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default App;
