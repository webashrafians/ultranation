import React, { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';
import Selectcountry from './components/Slectcountry/Selectcountry';

function App() {
   const [countries, setCountries] = useState([]);
   const [selectcountry, setSelectcountry] = useState([]);

   useEffect(()=>{
     fetch('https://restcountries.eu/rest/v2/all')
     .then(res => res.json())
     .then(data=>setCountries(data))
     .catch(error => console.log(error))
   }, [])
   
   const handleAddCountry = (country) => {
     const newCountry = [...selectcountry, country];
     setSelectcountry(newCountry);
    }

  return (
    <div className="App">
      <h1>country loaded: {countries.length}</h1>
      <h4>Country added: {selectcountry.length}</h4>
      <Selectcountry selectcountry={selectcountry}></Selectcountry>
      <div className="country">
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
      }
      </div>
      
    </div>
  );
}

export default App;
