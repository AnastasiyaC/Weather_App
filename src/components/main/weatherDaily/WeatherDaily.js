import React from "react";
import classes from "./weatherDaily.module.scss";
import WeatherDailyCard from "./weatherDailyCard/WeatherDailyCard";
import { useSelector } from "react-redux";

function WeatherDaily() {
    const daily = useSelector( (state) => state.daily)

    const weatherDailyCardElem = daily.map( (el) => <WeatherDailyCard weekDay={ el.weekDay } temperature={ el.temperature } icon={ el.icon } key={ el.id }/>);

    return (
        <div className={ classes.weatherDaily }>
            { weatherDailyCardElem }
        </div>
    )
}

export default WeatherDaily;