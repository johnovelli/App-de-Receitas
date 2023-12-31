import { useContext } from 'react';
import Recipes from '../../components/Recipes';
import AppContext from '../../context/AppContext';

function MealsRecipes() {
  const { mealsList } = useContext(AppContext);

  return (
    <div>
      <Recipes recipeType="Meals" recipeList={ mealsList } />
    </div>
  );
}

export default MealsRecipes;
