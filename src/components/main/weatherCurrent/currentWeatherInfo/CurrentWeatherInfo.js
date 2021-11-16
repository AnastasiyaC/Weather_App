import React from 'react';
import classes from "./currentWeatherInfo.module.scss";
import { useSelector } from "react-redux";
import { weatherIcons } from "../../../../constants/wetherIcons";
import { languages } from "../../../../constants/languages";

function CurrentWeatherInfo() {
    const language = useSelector( state => state.control.language);
    const current = useSelector( state => state.current);
    const icon = current.icon;

    return (
        <div className={ classes.weather }>
            <div className={ classes.weather__temperature }>
                <span className={ classes.weather__temperature__number }>
                    { current.temperature }
                </span>
                <span className={ classes.weather__temperature__degree }>&deg;</span>
            </div>
            <div className={ classes.weather__iconContainer }>
                <img src={ weatherIcons[icon] } className={ classes.weather__icon } alt='icon' />
            </div>
            <div className={ classes.weather__description }>
                <span>
                    { current.description.main }
                </span>
                <span>
                    { languages[language].feelsLike }: { current.description.feels_like }&deg;
                </span>
                <span>
                    { languages[language].wind }: { current.description.wind_speed } <span className={ classes.weather__description__lowercase }>m/s</span>
                </span>
                <span>
                    { languages[language].humidity }: { current.description.humidity } %
                </span>
            </div>
        </div>
    )
}

export default CurrentWeatherInfo;