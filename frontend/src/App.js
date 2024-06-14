import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { useState } from 'react';
import { Home } from './components/Home';
import data from './dummydata/data.json'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
      <NavBar darkMode={darkMode} setDark={setDarkMode} />
      <div className="content-container">
        <Home darkMode={darkMode} data={data} />
      </div>
    </div>
  );
};

export default App;
