//This app shows info abput all the countries in the world.
//Since the info is not too large, I decided to start the app by loading everything into the state and then filtering accordingly 
import { useState, useEffect } from "react";
import country from "./services/country";
import Filter from "./components/Filter";
import CountryList from "./components/CountryList.jsx";
import CountryDetails from "./components/CountryDetails.jsx";

const App = () => {
  //Array to hold the API response
  const [countries, setCountries] = useState([]);

  const [filteredCountries, setFilteredCountries] = useState ([]); 

  useEffect(() => {
    country.getAllCountries().then(response => {
      console.log('Got All countries');
      setCountries(response.data);
      // setTimeout(()=>console.log(`Number of countries: ${countries.length}`), 2000);
    })
    .catch(error => {
      console.log(error);
      alert('There was a problem, please refresh the page');
    });
  }, []);

  //Use only for debugging: See which countries are getting filtered
  // useEffect(()=>{
  //   console.log('inside filtered countries useeffect');
  //   filteredCountries.map( c => console.log(c.name.common));
  // }, [filteredCountries]);

  const handleFilterCountries = (event) =>{
    if(countries.lenght === 0) {
      return;
    }
    const searchInput = event.target.value.toLowerCase();  
    if(searchInput === '') {
      console.log('Search input is empty, resetting the filtered array');
      setFilteredCountries([]);
    } else {
      console.log(`search input: ${searchInput}`);
    setFilteredCountries(countries.filter(c => c.name.common.toLowerCase().includes(searchInput)));  
    }
    
  }

  return(
    <div>
     <Filter filterCountries={handleFilterCountries}/>
     <CountryList filteredCountries={filteredCountries} />
     <CountryDetails filteredCountries={filteredCountries}/>
    </div>
  )
}

export default App;