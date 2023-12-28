import { useContext, useState, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import SearchImg from '../../images/searchIcon.svg';
import './recipes.css';

type RecipesType = {
  recipeType: 'Meals' | 'Drinks';
  recipeList: any[];
};

function Recipes({ recipeType, recipeList }: RecipesType) {
  const { theme, mealsList, drinksList } = useContext(AppContext);
  const [showSearch, setShowSearch] = useState(false);
  const [renderedList, setRenderedList] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    async function getRenderedList() {
      const list: any[] = recipeList;
      setRenderedList(list);
    }
    getRenderedList();
  }, [recipeList]);

  function toggleShowSearch() {
    setShowSearch(!showSearch);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  useEffect(() => {
    if (recipeType === 'Meals') {
      if (searchInput.length === 0) {
        setRenderedList(mealsList);
      }
      const list = mealsList.filter((recipe: any) => (
        recipe.strMeal.toLowerCase().includes(searchInput.toLocaleLowerCase())));
      setRenderedList(list);
    } if (recipeType === 'Drinks') {
      if (searchInput.length === 0) {
        setRenderedList(drinksList);
      }
      const list = drinksList.filter((recipe: any) => (
        recipe.strDrink.toLowerCase().includes(searchInput.toLocaleLowerCase())));
      setRenderedList(list);
    }
  }, [searchInput]);

  return (
    <div className="recipes">
      <div className={ `recipes-top recipes-top-${theme}` }>
        <div className="recipes-title">
          <h2>{`${recipeType} Recipes`}</h2>
          <button onClick={ toggleShowSearch } aria-label="Search Button">
            <img src={ SearchImg } alt="" />
          </button>
          {showSearch && (
            <input type="text" onChange={ (e) => handleInputChange(e) } />
          )}
        </div>
      </div>
      {renderedList.length ? (
        <div className={ `recipes-div recipes-div-${theme}` }>
          {renderedList.slice(0, 15).map((recipe: any) => (
            <div
              className={ `recipe recipe-${theme}` }
              key={ recipeType === 'Meals' ? recipe.idMeal : recipe.idDrink }
            >
              <h2>{recipeType === 'Meals' ? recipe.strMeal : recipe.strDrink}</h2>
              <img
                src={
                  recipeType === 'Meals'
                    ? recipe.strMealThumb
                    : recipe.strDrinkThumb
                }
                alt=""
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Recipes;
