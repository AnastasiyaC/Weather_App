import React, {useEffect} from 'react';
import classes from "./main.module.scss";
import {setWeather} from "../../redux/reducer";
import {useDispatch, useSelector} from "react-redux";
import Coordinates from "./coordinates/coordinates";
import WeatherCurrent from "./weatherCurrent/WeatherCurrent";
import WeatherDaily from "./weatherDaily/WeatherDaily";
import {getWeather} from "../../api/commonService";
import Map from "./map/Map";


function Main() {
    const units = useSelector( (state) => state.control.units);
    const cityLocation = useSelector( (state) => state.location);
    const language = useSelector( (state) => state.control.language);
    const dispatch = useDispatch();

useEffect(() => {
    getWeather(units, cityLocation, language).then( (res) => {
        dispatch(setWeather(res.data));
        console.log('response:', res.data);
    })
}, []);

    return (
        <main className={ classes.main }>
            <div className={ classes.main__weather }>
                <WeatherCurrent/>
                <WeatherDaily/>
            </div>
            <div className={ classes.main__location }>
                <Map/>
                <Coordinates/>
            </div>
        </main>
    )
}

export default Main;



