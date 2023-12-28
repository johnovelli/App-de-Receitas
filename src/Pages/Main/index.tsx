import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Header from '../../components/Header';
import './main.css';

function Main() {
  const { theme } = useContext(AppContext);

  return (
    <div className="Main">
      <Header />
      <div className={ `content content-${theme}` }>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
