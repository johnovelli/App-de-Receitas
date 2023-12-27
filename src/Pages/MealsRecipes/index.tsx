import { useContext } from 'react';
import Recipes from '../../components/Recipes';
import AppContext from '../../context/AppContext';
import './meals-recipes.css';

function MealsRecipes() {
  const { mealsList } = useContext(AppContext);

  console.log(mealsList);

  return (
    <div>
      <Recipes recipeType="Meals" recipeList={ mealsList } />
    </div>
  );
}

export default MealsRecipes;
