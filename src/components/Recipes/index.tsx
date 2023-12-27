import { useState } from 'react';
import SearchImg from '../../images/searchIcon.svg';
import './recipes.css';

type RecipesType = {
  recipeType: 'Meals' | 'Drinks';
  recipeList: any[];
};

function Recipes({ recipeType, recipeList }: RecipesType) {
  const [showSearch, setShowSearch] = useState(true);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="recipes">
      <div className="recipes-top">
        <div className="recipes-title">
          <h2>{`${recipeType} Recipes`}</h2>
          <img src={ SearchImg } alt="" />
        </div>
      </div>
      {recipeList.length ? (
        <>
          {recipeList.slice(0, 12).map((recipe: any) => (
            <div key={ recipeType === 'Meals' ? recipe.idMeal : recipe.idDrink }>
              <h2>{recipeType === 'Meals' ? recipe.strMeal : recipe.strDrink}</h2>
            </div>
          ))}
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Recipes;
