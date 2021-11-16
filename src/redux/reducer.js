import { showWeekDay } from "../utils/showDateAndTime";
import { convertCelsiusToFahrenheit, convertFahrenheitToCelsius } from "../utils/convertDegree";

const FAHRENHEIT_TO_CELSIUS = 'FAHRENHEIT_TO_CELSIUS';
const CELSIUS_TO_FAHRENHEIT ='CELSIUS_TO_FAHRENHEIT';
const SET_WEATHER = 'SET-WEATHER';
const SET_WEEK_DAYS = 'SET_WEEK_DAYS';
const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';
const SET_COORDINATES = 'SET_COORDINATES';
const SET_LANGUAGE = 'SET_LANGUAGE';
const UPDATE_BACKGROUND_IMAGE = 'UPDATE_BACKGROUND_IMAGE';
const SET_CITY_NAME = 'SET_CITY_NAME';
const SET_COUNTRY_NAME = 'SET_COUNTRY_NAME';

let initialState = {
    current: {
        timezone: null,
        timezone_offset: null,
        currentCity: null,
        currentCountry: null,
        currentDate: null,
        currentTime: null,
        temperature: null,
        icon: null,
        description: {
            main: null,
            feels_like: null,
            wind_speed: null,
            humidity: null,
        }
    },
    daily: [
        {weekDay: null, temperature: null, id: 1, icon: ''},
        {weekDay: null, temperature: null, id: 2, icon: ''},
        {weekDay: null, temperature: null, id: 3, icon: ''}
    ],
    location: {
        lat: 0,
        lon: 0,
    },
    control: {
        searchValue: '',
        language: 'en',
        units: 'metric',
        isFetching: false,
        backgroundImage: '',
    }
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WEATHER:
            return {
                ...state,
                current: {
                    ...state.current,
                    timezone: action.data.timezone,
                    timezone_offset: action.data.timezone_offset,
                    // dt: action.data.current.dt,
                    // currentDate: showDate(action.data.timezone_offset, state.control.language),
                    // currentTime: null,
                    temperature: Math.round(action.data.current.temp),
                    icon: action.data.current.weather[0].icon,
                    description: {
                        ...state.current.description,
                        main: action.data.current.weather[0].description,
                        feels_like: Math.round(action.data.current.feels_like),
                        wind_speed: Math.round(action.data.current.wind_speed),
                        humidity: action.data.current.humidity,
                    },
                },
                daily: state.daily.map((el, i) => {
                        return {
                            ...el,
                            // weekDay: showWeekDay(action.data.timezone_offset, i + 1, state.control.language),
                            temperature: Math.round((action.data.daily[i + 1].temp.min + action.data.daily[i + 1].temp.max) / 2),
                            icon: action.data.daily[i + 1].weather[0].icon,
                        }
                 }),
                location: {
                        ...state.location,
                        lat: action.data.lat,
                        lon: action.data.lon,
                }
            }

        case SET_CITY_NAME:
            return {
                ...state,
                current: {
                    ...state.current,
                    currentCity: action.name,
                }
            }

        case SET_COUNTRY_NAME:
            return {
                ...state,
                current: {
                    ...state.current,
                    currentCountry: action.name,
                }
            }

        case SET_WEEK_DAYS:
            return {
                ...state,
                daily: state.daily.map((el, i) => {
                    return {
                        ...el,
                        weekDay: showWeekDay(state.current.timezone_offset, i + 1, state.control.language),
                    }
                }),
            }

        case SET_COORDINATES:
            return {
                ...state,
                location: {
                    ...state.location,
                    lat: action.coord.lat,
                    lon: action.coord.lon,
                }
            }

        case CELSIUS_TO_FAHRENHEIT:
            return {
                ...state,
                current: {
                    ...state.current,
                    temperature: convertCelsiusToFahrenheit(state.current.temperature),
                    description: {
                        ...state.current.description,
                        feels_like: convertCelsiusToFahrenheit(state.current.description.feels_like),
                    },
                },
                daily: state.daily.map((el, i) => {
                    return {
                        ...el,
                        temperature: convertCelsiusToFahrenheit(state.daily[i].temperature)
                    }
                }),
                control: {
                    ...state.control,
                    units: action.units,
                }
            }

        case FAHRENHEIT_TO_CELSIUS:
            return {
                ...state,
                current: {
                    ...state.current,
                    temperature: convertFahrenheitToCelsius(state.current.temperature),
                    description: {
                        ...state.current.description,
                        feels_like: convertFahrenheitToCelsius(state.current.description.feels_like),
                    },
                },
                daily: state.daily.map((el, i) => {
                    return {
                        ...el,
                        temperature: convertFahrenheitToCelsius(state.daily[i].temperature)
                    }
                }),
                control: {
                    ...state.control,
                    units: action.units,
                }
            }

        case UPDATE_SEARCH_VALUE:
            return {
                ...state,
                control: {
                    ...state.control,
                    searchValue: action.value,
                }
            }

        case SET_LANGUAGE:
            return {
                ...state,
                control: {
                    ...state.control,
                    language: action.language,
                }
            }

        case UPDATE_BACKGROUND_IMAGE:
            return {
                ...state,
                control: {
                    ...state.control,
                    backgroundImage: action.image,
                }
            }

        default: return state;
    }
}

export const changeFahrenheitToCelsius = (units) => ({type: FAHRENHEIT_TO_CELSIUS, units});
export const changeCelsiusToFahrenheit = (units) => ({type: CELSIUS_TO_FAHRENHEIT, units});
export const setWeather = (data) => ({type: SET_WEATHER, data});
export const updateSearchValue = (value) => ({type: UPDATE_SEARCH_VALUE, value});
export const setCoordinates = (coord) => ({type: SET_COORDINATES, coord});
export const setLanguage = (language) => ({type: SET_LANGUAGE, language});
export const updateBackgroundImage = (image) => ({type: UPDATE_BACKGROUND_IMAGE, image});
export const setWeekDays = () => ({type: SET_WEEK_DAYS});
export const setCityName = (name) => ({type: SET_CITY_NAME}, name);
export const setCountryName = (name) => ({type: SET_COUNTRY_NAME}, name);


