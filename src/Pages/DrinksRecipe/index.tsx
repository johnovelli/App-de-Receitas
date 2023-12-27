import { useContext } from 'react';
import Recipes from '../../components/Recipes';
import AppContext from '../../context/AppContext';
import './drinks-recipes.css';

function DrinksRecipes() {
  const { drinksList } = useContext(AppContext);

  console.log(drinksList);

  return (
    <div>
      <Recipes recipeType="Drinks" recipeList={ drinksList } />
    </div>
  );
}

export default DrinksRecipes;
