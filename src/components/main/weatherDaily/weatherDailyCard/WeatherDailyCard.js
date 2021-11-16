import React from "react";
import classes from "./weatherDailyCard.module.scss";
import { weatherIcons } from "../../../../constants/wetherIcons";

function WeatherDailyCard(props) {
    return (
        <div className={ classes.weatherCard }>
                        <span className={ classes.weatherCard__weekDay }>
                                { props.weekDay }
                        </span>
            <span className={ classes.weatherCard__temperature }>
                                { props.temperature }&deg;
                        </span>
            <div className={ classes.weatherCard__iconContainer }>
                <img src={ weatherIcons[props.icon] } className={ classes.weatherCard__icon } alt='weather-icon' />
            </div>
        </div>
    )
}

export default WeatherDailyCard;