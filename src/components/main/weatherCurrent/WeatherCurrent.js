import React from 'react';
import classes from "./weatherCurrent.module.scss";
import CurrentLocationInfo from "./currentLocationInfo/CurrentLocationInfo";
import CurrentWeatherInfo from "./currentWeatherInfo/CurrentWeatherInfo";

function WeatherCurrent() {
        return (
            <div className={ classes.weatherCurrent }>
                <CurrentLocationInfo/>
                <CurrentWeatherInfo/>
            </div>
        )
}

export default WeatherCurrent;