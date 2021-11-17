import * as axios from "axios";

const BASE_URL_V1 = 'http://api.openweathermap.org/geo/1.0';
const BASE_URL_V2 = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'c487374f07c062b5214ed35f57e15349';

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
    } catch(err) {
        console.log(`Error: ${err.message}`);
    }
}

export const searchCity = (cityName) => {
    return axios.get(`${BASE_URL_V2}weather?q=${cityName}&appid=${API_KEY}`)
}

export const getCityNameByCoordinates = async (lat, lon) => {
    if ( !lat || !lon ) {
        return '';
    }
    return await axios.get(`${BASE_URL_V1}/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
}

export const updateImage = () => {
    const api = {
        key: "7z_4tWeTFZAYdD7CPoFq2RIGPi7HjkTbnprpDB9sK0k",
        base: "https://api.unsplash.com/photos/"
    }

    return axios.get(`${api.base}random?orientation=landscape&per_page=1&query=nature&client_id=${api.key}`);
}
