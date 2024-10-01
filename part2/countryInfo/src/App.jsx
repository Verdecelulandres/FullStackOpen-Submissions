//This app shows info abput all the countries in the world.
//Since the info is not too large, I decided to start the app by loading everything into the state and then filtering accordingly 

import { useState, useEffect } from "react";
const App = () => {
  //Array to hold the API response
  const [countries, setCountries] = useState([]);
  //Value to keep track of the country to search for in the input element
  const [countrySearch, setCountrySearch] = useState('');

  useEffect(() => {
    
  }, []);
  return(
    <div>
      <p>Find Countries: <input /></p>
    </div>
  )
}

export default App;