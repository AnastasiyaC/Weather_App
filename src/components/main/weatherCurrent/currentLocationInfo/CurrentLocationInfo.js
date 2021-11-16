import React, { useState, useEffect } from 'react';
import classes from "./currentLocationInfo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCityNameByCoordinates } from "../../../../api/commonService";
import { showDate, showTime } from "../../../../utils/showDateAndTime";
import { setWeekDays } from "../../../../redux/reducer";

function CurrentLocationInfo() {
    const timeZoneOffset = useSelector( state => state.current.timezone_offset);
    const cityLocation = useSelector( state => state.location);
    const language = useSelector( (state) => state.control.language);
    const [currentTime, setCurrentTime] = useState(null);
    const [currentDate, setCurrentDate] = useState(null);
    const [cityInfo, setCityInfo] = useState(null);
    const dispatch = useDispatch();

    useEffect( () => {
        setTimeout( () => {
            setCurrentTime(showTime(timeZoneOffset));
            setCurrentDate(showDate(timeZoneOffset, language));
            dispatch(setWeekDays());
        }
        , 1000);
    })

    useEffect( () => {
        getCityNameByCoordinates(cityLocation.lat, cityLocation.lon)
            .then((cityInfo) => {
                if(cityInfo.data && cityInfo.data.length > 0){
                    const city = cityInfo.data[0];
                    setCityInfo(city);
                }
            })
            .catch(err => console.log('get city name error:', err));
    }, [cityLocation]);

    return (
        <div className={ classes.currentLocation }>
            <div className={ classes.currentLocation__place }>
                { cityInfo && (cityInfo.local_names[language] || cityInfo.name) }
            </div>
            <div className={ classes.currentLocation__dateInfo }>
                <span className={ classes.currentLocation__dateInfo__date }>
                    { currentDate }
                </span>
                <span className={ classes.currentLocation__dateInfo__time }>
                    { currentTime }
                </span>
            </div>
        </div>
    )
}

export default CurrentLocationInfo;