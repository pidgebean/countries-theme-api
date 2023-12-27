import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import data from './data/data.json'
import Countries from './components/Countries/Countries';

function App() {

  const [darkMode, setDarkMode] = useState(true);
  // const {countries} = data;

  return (
    <div className={darkMode ? 'app app-dark' : 'app app-light'}>
      <Navbar darkMode={darkMode}/>

      <div className={darkMode? 'filters filters-dark' : 'filters filters-light'}>
        <button className={darkMode ? 'search-btn dark' : 'search-btn light'}>
          <ion-icon name="search-outline" id={darkMode ? 'search-icon dark' : 'search-icon light'}></ion-icon>
        </button>
        <input 
          className={darkMode ? 'search-bar search-dark' : "search-bar search-light"}
          type="text" 
          placeholder='        Search for a country...' />
        <div className='drop-menu'>Filter by Region</div>
      </div>
      <Countries country={data}/>

      
    </div>
  );
}

export default App;
