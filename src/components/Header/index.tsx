import { Link } from 'react-router-dom';
import MealImg from '../../images/mealIcon.svg';
import DrinkImg from '../../images/drinkIcon.svg';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h2>App de Receitas</h2>
        <Link to="/App-de-Receitas/meals/">
          <img src={ MealImg } alt="" />
        </Link>
        <Link to="/App-de-Receitas/drinks/">
          <img src={ DrinkImg } alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
