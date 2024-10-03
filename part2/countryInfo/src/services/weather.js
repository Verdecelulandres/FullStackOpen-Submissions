import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const appid = `appid=${API_KEY}`;
const getWeather = (lat, lon) => axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&${appid}&units=metric`);

export default {getWeather};