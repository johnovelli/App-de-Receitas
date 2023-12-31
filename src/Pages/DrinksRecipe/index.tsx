import { useContext } from 'react';
import Recipes from '../../components/Recipes';
import AppContext from '../../context/AppContext';

function DrinksRecipes() {
  const { drinksList } = useContext(AppContext);

  return (
    <div>
      <Recipes recipeType="Drinks" recipeList={ drinksList } />
    </div>
  );
}

export default DrinksRecipes;
