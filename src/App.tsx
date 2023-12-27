import { Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppProvider';
import Main from './Pages/Main';
import MealsRecipes from './Pages/MealsRecipes';
import DrinksRecipes from './Pages/DrinksRecipe';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/App-de-Receitas/" element={ <Main /> }>
          <Route path="/App-de-Receitas/" element={ <MealsRecipes /> } />
          <Route path="/App-de-Receitas/meals/" element={ <MealsRecipes /> } />
          <Route path="/App-de-Receitas/drinks/" element={ <DrinksRecipes /> } />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
