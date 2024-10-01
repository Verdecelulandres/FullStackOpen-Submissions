const CountryList = ({filteredCountries}) => {
    if(filteredCountries.length <= 1) {
        console.log(`lenght is: ${filteredCountries.length}. No need to return anything here`);
        return;
    }
    return (
        <ul>
            {filteredCountries.length >10 ? <li>Too many matches. Please continue typing the country name</li> : filteredCountries.map(c=> <li key={c.cca2}>{c.name.common}</li>)}
       </ul>
    )
}

export default CountryList;