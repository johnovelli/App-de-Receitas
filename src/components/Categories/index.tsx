import { useContext, useState, useEffect } from 'react';
import { GetMealsCategory, GetDrinksCategory } from '../../providers/meal_drink_api';
import AppContext from '../../context/AppContext';
import './categories.css';

type CategoriesType = {
  recipeType: 'Meals' | 'Drinks';
  setRenderedList: React.Dispatch<React.SetStateAction<any[]>>;
};

type CategorieType = {
  strCategory: string;
};

function Categories({ recipeType, setRenderedList }: CategoriesType) {
  const { mealsList,
    drinksList,
    theme,
    categoryList,
    setCategoryList } = useContext(AppContext);
  const [categories, setCategories] = useState<CategorieType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    async function getCategories() {
      if (recipeType === 'Meals') {
        const MealsCategories = await GetMealsCategory();
        setCategories(MealsCategories);
      }
      if (recipeType === 'Drinks') {
        const DrinksCategories = await GetDrinksCategory();
        setCategories(DrinksCategories);
      }
    }
    getCategories();
  }, [recipeType]);

  async function getCategoryRecipes(strCategory: string) {
    if (strCategory === selectedCategory) {
      setSelectedCategory('');
      setCategoryList([]);
      const recipeList = recipeType === 'Meals' ? mealsList : drinksList;
      setRenderedList(recipeList);
      setCategoryList([]);
    } else {
      const url = recipeType === 'Meals'
        ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
        : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`;
      const response = await fetch(url);
      const data = await response.json();
      const recipeList = recipeType === 'Meals' ? data.meals : data.drinks;
      setCategoryList(recipeList);
      setSelectedCategory(strCategory);
      setRenderedList(recipeList);
    }
  }

  function getRecommended() {
    setSelectedCategory('');
    setCategoryList([]);
    setRenderedList(recipeType === 'Meals' ? mealsList : drinksList);
  }

  return (
    <div>
      {categories && (
        <div className={ `categories categories${theme}` }>
          <button
            onClick={ getRecommended }
            className={ categoryList.length > 0 ? '' : 'selected' }
          >
            Recommended
          </button>
          {categories.map((ctg) => (
            <button
              key={ ctg.strCategory }
              onClick={ () => getCategoryRecipes(ctg.strCategory) }
              className={ ctg.strCategory === selectedCategory
                ? 'selected' : '' }
            >
              {ctg.strCategory}
            </button>
          ))}
          <button>
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default Categories;
