import { createContext } from 'react';

type AppContextType = {
  mealsList: any,
  drinksList: any,
  theme: 'Light' | 'Dark',
  setTheme: React.Dispatch<React.SetStateAction<'Light' | 'Dark'>>,
};

const AppContext = createContext({} as AppContextType);

export default AppContext;
