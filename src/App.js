import './App.css';
import ThemeContextProvider from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Filter from './components/Filter';
import Countries from './components/Countries';
import Country from './components/Country';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import datas from './data/data.json'
import { useState } from 'react';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = datas.filter(
    (val) => {
      if(this.state.searchTerm === ''){
        return val;
      } 
      else if (val.name.toLowerCase().includes(this.state.toLowerCase())){
        return val;
      }
    }
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(datas, selected, query){
    let filData = datas;

    if (query){
      filData = filteredItems;
    }

    if (selected) {
      filData = filData.filter(
        ({ region }) =>
          region === selected
      );
    }

    return filData.map(({region}) => (<Country region={region}/>))
  }

  const result = filteredData(datas, selectedCategory, query);

  return (
    <div>
      <ThemeContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route 
              exact path="/" 
              element={<Home handleInputChange={handleInputChange} handleChange={handleChange} result={result}/>}
            />
            
          </Routes>
        </BrowserRouter>
        
      </ThemeContextProvider>
    </div>
  );
}

export default App;
