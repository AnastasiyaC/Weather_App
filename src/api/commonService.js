import * as axios from "axios";

const BASE_URL_V1 = 'http://api.openweathermap.org/geo/1.0';
const BASE_URL_V2 = 'https://api.openweathermap.org/data/2.5/';
// const API_KEY = 'b72a2ca0e06c97b9fdcaa9bdcd66b6bc';
const API_KEY = 'c487374f07c062b5214ed35f57e15349';
const GET_COUNTRY_URL = 'https://api.geonames.org/countrySubdivisionJSON?username=aminp&';

function getLongAndLat(lat, lon) {
    if (lat || lon) {
        const coords = {latitude: lat, longitude: lon}
        return Promise.resolve({coords})
    }
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
}

export const getWeather = async (units, location, language) => {
    try {
        let position = await getLongAndLat(location.lat, location.lon);
        const { coords } = position;
        return await axios.get(`${BASE_URL_V2}onecall?lat=${coords.latitude}&lon=${coords.longitude}&units=${units}&lang=${language}&exclude=minutely,hourly,alerts&appid=${API_KEY}`)
    } catch(e) {
        alert(`Error: ${e.message}`);
    }
}

export const searchCity = (cityName) => {
    return axios.get(`${BASE_URL_V2}weather?q=${cityName}&appid=${API_KEY}`)
}

export const searchCountryByCoords = (lat, lon, lang) => {
    return axios.get(`${GET_COUNTRY_URL}lang=${lang}&lat=${lat}&lng=${lon}`)
}

export const getCityNameByCoordinates = async (lat, lon) => {
    if ( !lat || !lon ) {
        return '';
    }
    return await axios.get(`${BASE_URL_V1}/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
}
