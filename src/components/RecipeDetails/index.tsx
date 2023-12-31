import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './recipe-details.css';

type RecipeDetailsType = {
  recipeType: 'Meals' | 'Drinks';
  recipe: any[];
};

function RecipeDetails({ recipeType, recipe }: RecipeDetailsType) {
  const { theme } = useContext(AppContext);

  const thisRecipe = recipe[0];

  return (
    <div>
      {recipe.length && (
        <div className={ `recipe-details-main recipe-details-main${theme}` }>
          <div className={ `details details-${theme}` }>
            <h2>{recipeType === 'Meals' ? thisRecipe.strMeal : thisRecipe.strDrink}</h2>
          </div>
          <div className={ `details details-${theme}` } />
        </div>
      )}

    </div>
  );
}

export default RecipeDetails;
