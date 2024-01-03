import { createContext } from 'react';

type AppContextType = {
  mealsList: any,
  drinksList: any,
  categoryList: any,
  setCategoryList: React.Dispatch<React.SetStateAction<any[]>>,
  favoriteList: any,
  setFavoriteList: React.Dispatch<React.SetStateAction<any[]>>,
  finishedList: any,
  setFinishedList: React.Dispatch<React.SetStateAction<any[]>>,
  theme: 'Light' | 'Dark',
  setTheme: React.Dispatch<React.SetStateAction<'Light' | 'Dark'>>,
};

const AppContext = createContext({} as AppContextType);

export default AppContext;
