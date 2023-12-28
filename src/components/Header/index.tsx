import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MealImg from '../../images/mealIcon.svg';
import DrinkImg from '../../images/drinkIcon.svg';
import AppContext from '../../context/AppContext';
import './header.css';

function Header() {
  const { theme, setTheme } = useContext(AppContext);

  const toggleThemeLight = () => {
    setTheme('Light');
  };

  const toggleThemeDark = () => {
    setTheme('Dark');
  };

  return (
    <div className={ `header header-${theme}` }>
      <div className="header-content">
        <h2>App de Receitas</h2>
        <Link to="/App-de-Receitas/meals/">
          <img src={ MealImg } alt="" />
        </Link>
        <Link to="/App-de-Receitas/drinks/">
          <img src={ DrinkImg } alt="" />
        </Link>
        <button onClick={ toggleThemeLight }>
          Light
        </button>
        <button onClick={ toggleThemeDark }>
          Dark
        </button>
      </div>
    </div>
  );
}

export default Header;
