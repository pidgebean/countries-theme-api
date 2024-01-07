import './App.css';
import ThemeContextProvider from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Countries from './components/Countries';
import ChosenCountry from './components/ChosenCountry';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Countries/>}/>
            
          </Routes>
        </BrowserRouter>
        
      </ThemeContextProvider>
    </div>
  );
}

export default App;
