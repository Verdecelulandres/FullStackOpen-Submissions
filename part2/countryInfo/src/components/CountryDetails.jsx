import weather from "../services/weather";
import { useState } from "react";

const CountryDetails = ({filteredCountries}) =>{
    if(filteredCountries.length - 1 !== 0){
        return;
    }
    const [temperature, setTemperature] = useState('');
    const [weatherIcon, setWeatherIcon] = useState('');
    const [windSpeed, setWindSpeed]= useState('');

    const countryName = filteredCountries[0].name.common;
    const capitalCity = filteredCountries[0].capital[0];
    const area = filteredCountries[0].area;
    const languages = Object.values(filteredCountries[0].languages);
    const flag = filteredCountries[0].flag;
    const lat = filteredCountries[0].latlng[0];
    const lon = filteredCountries[0].latlng[1];
   

    weather.getWeather(lat, lon).then(response =>{
        // console.log(response.data);
       setTemperature(response.data.main.temp); 
       setWindSpeed(response.data.wind.speed);
       setWeatherIcon(response.data.weather[0].icon);
    });

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
            <div>
                <h3>Weather in {capitalCity}</h3>
                <p>Temperature: {temperature} Celcius</p>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} />
                </div>
                <p>wind {windSpeed} m/s</p>

            </div>

        </div>    
    )
}

export default CountryDetails;