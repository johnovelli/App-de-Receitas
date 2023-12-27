import { createContext } from 'react';

type AppContextType = {
  mealsList: any,
  drinksList: any,
};

const AppContext = createContext({} as AppContextType);

export default AppContext;
