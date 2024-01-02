import { useContext } from 'react';
import Recipes from '../../components/Recipes';
import AppContext from '../../context/AppContext';

function DrinksRecipes() {
  const { drinksList } = useContext(AppContext);

  return <Recipes recipeType="Drinks" recipeList={ drinksList } />;
}

export default DrinksRecipes;
