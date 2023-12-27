import { Link } from 'react-router-dom';
import MealImg from '../../images/mealIcon.svg';
import DrinkImg from '../../images/drinkIcon.svg';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <Link to="/App-de-Receitas/meals/">
          <img src={ MealImg } alt="" />
        </Link>
        <Link to="/App-de-Receitas/drinks/">
          <img src={ DrinkImg } alt="" />
        </Link>
        <h2>App de Receitas</h2>
        <input type="text" />
      </div>
    </div>
  );
}

export default Header;
