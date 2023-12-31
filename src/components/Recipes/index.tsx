import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import SearchImg from '../../images/searchIcon.svg';
import SearchInput from '../SearchInput';
import Categories from '../Categories';
import './recipes.css';

type RecipesType = {
  recipeType: 'Meals' | 'Drinks';
  recipeList: any[];
};

function Recipes({ recipeType, recipeList }: RecipesType) {
  const navigate = useNavigate();
  const { theme } = useContext(AppContext);
  const [renderedList, setRenderedList] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    async function getRenderedList() {
      const list: any[] = recipeList;
      setRenderedList(list);
    }
    getRenderedList();
  }, [recipeList]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  return (
    <div className="recipes">
      <div className={ `recipes-top recipes-top-${theme}` }>
        <div className="recipes-title">
          <h2>{`${recipeType} Recipes`}</h2>
          <img src={ SearchImg } alt="" />
          <SearchInput
            recipeType={ recipeType }
            searchInput={ searchInput }
            setRenderedList={ setRenderedList }
            // eslint-disable-next-line react/jsx-no-bind
            handleInputChange={ handleInputChange }
          />
        </div>
      </div>
      <div className={ `recipes-div recipes-div-${theme}` }>
        <Categories
          recipeType={ recipeType === 'Meals' ? 'Meals' : 'Drinks' }
          setRenderedList={ setRenderedList }
        />
        {renderedList.length && (
          renderedList.map((recipe: any) => (
            <div
              className={ `recipe recipe-${theme}` }
              key={ recipeType === 'Meals' ? recipe.idMeal : recipe.idDrink }
            >
              <h2>
                {recipeType === 'Meals' ? recipe.strMeal : recipe.strDrink}
              </h2>
              <img
                src={
                    recipeType === 'Meals'
                      ? recipe.strMealThumb
                      : recipe.strDrinkThumb
                  }
                alt=""
              />
              <button
                onClick={ () => (recipeType === 'Meals'
                  ? navigate(`/App-de-Receitas/meals/${recipe.idMeal}`)
                  : navigate(`/App-de-Receitas/drinks/${recipe.idDrink}`)) }
              >
                Full Recipe
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Recipes;
