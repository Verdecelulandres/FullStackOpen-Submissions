const CountryList = ({filteredCountries, showCountry}) => {
    if(filteredCountries.length <= 1) {
        console.log(`lenght is: ${filteredCountries.length}. No need to return anything here`);
        return;
    }
    return (
        <ul>
            {filteredCountries.length >10 ? <li>Too many matches. Please continue typing the country name</li> : filteredCountries.map((c, index)=> {
                   return( <li key={c.cca3}>
                        <span key={c.cca2}>{c.name.common}</span> <button onClick={() => showCountry(c.name.common)} key={index}>show</button>
                    </li>)
                })}
       </ul>
    )
}

export default CountryList;