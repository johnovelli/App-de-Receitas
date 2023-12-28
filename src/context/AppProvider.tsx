import { useState, useEffect } from 'react';
import { GetMeals, GetDrinks } from '../providers/meal_drink_api';
import AppContext from './AppContext';

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const [mealsList, setMealsList] = useState([]);
  const [drinksList, setDrinksList] = useState([]);
  const [theme, setTheme] = useState<'Light' | 'Dark'>('Light');

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
        theme,
        setTheme,
      } }
    >
      {children}
    </AppContext.Provider>
  );
}
