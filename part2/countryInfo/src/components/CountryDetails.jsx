const CountryDetails = ({filteredCountries}) =>{
    if(filteredCountries.length - 1 !== 0){
        return;
    }
    const countryName = filteredCountries[0].name.common;
    const capitalCity = filteredCountries[0].capital[0];
    const area = filteredCountries[0].area;
    const languages = Object.values(filteredCountries[0].languages);
    const flag = filteredCountries[0].flag;


    return(
        <div>
            <h2>{countryName}</h2>
            <p>Capital City: {capitalCity}</p>
            <p>Land area: {area}</p>
            <h4>Languages</h4>
            <ul>
                {languages.map((l, index)=> <li key={index}>{l}</li>)}
            </ul>
            <div style={{fontSize: 200}}>
                {flag}
            </div>
            

        </div>    
    )
}

export default CountryDetails;