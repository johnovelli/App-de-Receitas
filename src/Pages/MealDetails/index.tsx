import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import RecipeDetails from '../../components/RecipeDetails';

function MealDetails() {
  const { mealsList } = useContext(AppContext);
  const { id } = useParams();
  const [recipe, setRecipe] = useState([{}]);

  useEffect(() => {
    async function getRecipe() {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipe(data.meals);
    }
    getRecipe();
  }, [id, mealsList]);

  return <RecipeDetails recipeType="Meals" recipe={ recipe } />;
}

export default MealDetails;
