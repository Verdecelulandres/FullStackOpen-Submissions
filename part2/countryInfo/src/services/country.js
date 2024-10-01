import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/';

const getAllCountries = () => axios.get(`${baseUrl}all`);
const getSelectedCountry =(countryName)=> axios.get(`${baseUrl}name/${countryName}`);

export default {getAllCountries, getSelectedCountry}