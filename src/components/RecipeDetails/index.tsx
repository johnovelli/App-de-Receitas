import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import AppContext from '../../context/AppContext';
import './recipe-details.css';

  type RecipeDetailsType = {
    recipeType: 'Meals' | 'Drinks';
    recipe: any[];
  };

function RecipeDetails({ recipeType, recipe }: RecipeDetailsType) {
  const { theme, favoriteList, setFavoriteList } = useContext(AppContext);
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [checkedList, setCheckedList] = useState<any[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const totalIngredients = recipeType === 'Meals' ? 20 : 15;
  const favId = recipeType === 'Meals'
    ? 'strMeal'
    : 'strDrink';

  const thisRecipe = recipe[0];
  const navigate = useNavigate();

  useEffect(() => {
    function getIngredients() {
      if (recipe.length > 0) {
        const tempIngredients = [];
        for (let index = 1; index <= totalIngredients; index += 1) {
          const ingredient = `strIngredient${index}`;
          const measure = `strMeasure${index}`;
          if (thisRecipe[ingredient] !== '' && thisRecipe[ingredient] !== null) {
            tempIngredients.push({
              ingredient: thisRecipe[ingredient],
              measure: thisRecipe[measure],
            });
          }
        }
        setIngredients(tempIngredients);
      }
    }
    getIngredients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipe]);

  function handleCheckboxChange(ingredient: string) {
    if (checkedList.includes(ingredient)) {
      const uncheck = checkedList.filter((ing) => ing !== ingredient);
      setCheckedList(uncheck);
    } else {
      setCheckedList((prev) => [...prev, ingredient]);
    }
  }

  function handleFavoriteList() {
    const favo = favoriteList.filter((fav: any) => fav[favId] === thisRecipe[favId]);
    if (favo.length > 0) {
      const newFavo = favoriteList.filter((fav: any) => fav[favId] !== thisRecipe[favId]);
      localStorage.setItem('favoriteList', JSON.stringify(newFavo));
      setFavoriteList(newFavo);
    } else {
      const newFavo = [...favoriteList, thisRecipe];
      localStorage.setItem('favoriteList', JSON.stringify(newFavo));
      setFavoriteList((prev) => [...prev, thisRecipe]);
    }
  }

  useEffect(() => {
    const isInFav = favoriteList.some((fav: any) => fav[favId] === thisRecipe[favId]);
    setIsFavorite(isInFav);
    console.log(favoriteList);
  }, [favoriteList, thisRecipe, favId]);

  return (
    <div>
      {recipe.length > 0 && (
        <div className={ `recipe-details-main recipe-details-main${theme}` }>
          <div className={ `details-l details-l-${theme}` }>
            <h2>{recipeType === 'Meals' ? thisRecipe.strMeal : thisRecipe.strDrink}</h2>
            <p className="instructions">{ thisRecipe.strInstructions }</p>
            {ingredients.length < totalIngredients && ingredients.length > 0 && (
              <div className="ingredients">
                {ingredients.map((ingredient, index) => (
                  <div
                    key={ index }
                    className="ingredient"
                  >
                    <input
                      type="checkbox"
                      onChange={ () => handleCheckboxChange(ingredient.ingredient) }
                      checked={ checkedList.includes(ingredient.ingredient) }
                    />
                    <p
                      className={ checkedList.includes(ingredient.ingredient)
                        ? 'checked'
                        : '' }
                    >
                      {`${ingredient.ingredient}
                    ${'-'}
                    ${ingredient.measure}`}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div>
              <button
                className="finish-btn"
                disabled={ checkedList.length !== ingredients.length }
              >
                Finish Recipe
              </button>
            </div>
            <div className="storage-btns">
              <button onClick={ handleFavoriteList }>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
          </div>
          <div className={ `details-r details-r-${theme}` }>
            {recipeType === 'Meals' ? (
              <ReactPlayer
                url={ thisRecipe.strYoutube }
                controls
                height="265px"
                width="auto"
              />
            ) : (
              <div className="drink-thumb-div">
                <img
                  src={ thisRecipe.strDrinkThumb }
                  alt={ thisRecipe.strDrink }
                  className="drink-thumb"
                />
              </div>
            )}
            {recipeType === 'Meals' && (
              <p className="source">
                Recipe source:
                {' '}
                <a
                  href={ thisRecipe.strSource }
                  target="_blank"
                  rel="noreferrer"
                >
                  {thisRecipe.strSource}
                </a>
              </p>
            )}
            <button
              className="all-recipes-btn"
              onClick={ recipeType === 'Meals'
                ? () => navigate('/App-de-Receitas/meals/')
                : () => navigate('/App-de-Receitas/drinks/') }
            >
              All Recipes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
