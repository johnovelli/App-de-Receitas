import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import './main.css';

function Main() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Main;
