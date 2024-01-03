import { useState, useEffect } from 'react';
import { GetMeals, GetDrinks } from '../providers/meal_drink_api';
import AppContext from './AppContext';

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const [mealsList, setMealsList] = useState([]);
  const [drinksList, setDrinksList] = useState([]);
  const [categoryList, setCategoryList] = useState<any[]>([]);
  const [favoriteList, setFavoriteList] = useState<any[]>([]);
  const [finishedList, setFinishedList] = useState<any[]>([]);
  const [theme, setTheme] = useState<'Light' | 'Dark'>('Light');

  useEffect(() => {
    // Carregar a lista de favoritos do localStorage ao inicializar
    const storedFavoriteList = localStorage.getItem('favoriteList');
    if (storedFavoriteList) {
      setFavoriteList(JSON.parse(storedFavoriteList));
    }
  }, []);

  useEffect(() => {
    async function getMealsAndDrinks() {
      const meals = await GetMeals();
      const drinks = await GetDrinks();
      setMealsList(meals);
      setDrinksList(drinks);
    }
    getMealsAndDrinks();
  }, []);

  return (
    <AppContext.Provider
      value={ {
        mealsList,
        drinksList,
        categoryList,
        setCategoryList,
        favoriteList,
        setFavoriteList,
        finishedList,
        setFinishedList,
        theme,
        setTheme,
      } }
    >
      {children}
    </AppContext.Provider>
  );
}
