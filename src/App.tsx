import { AppProvider } from './context/AppProvider';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div>
        <h2>App</h2>
      </div>
    </AppProvider>
  );
}

export default App;
