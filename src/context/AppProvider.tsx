import { useState, useEffect } from 'react';
import { GetMeals, GetDrinks } from '../providers/meal_drink_api';
import AppContext from './AppContext';

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const [mealsList, setMealsList] = useState([]);
  const [drinksList, setDrinksList] = useState([]);

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
      } }
    >
      {children}
    </AppContext.Provider>
  );
}