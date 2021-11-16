import React from 'react';
import classes from "./coordinates.module.scss";
import { useSelector } from "react-redux";
import { languages } from "../../../constants/languages";

function Coordinates() {
    const language = useSelector( state => state.control.language);
    const lat = useSelector( (state) => state.location.lat)
    const lon = useSelector( (state) => state.location.lon)

    function transformCoord(num) {
        if (!num) {
            return
        } else {
            const arr = String(num).split('.');

            arr[1] = arr.length > 1 ? arr[1].substring(0, 2) : '0';
            return `${arr.join('°')}'`;
        }
    }

    const transformedLat = transformCoord(lat);
    const transformedLon = transformCoord(lon);

    return (
        <div className={classes.coordinates}>
            <span className={classes.coordinates__coord}>
                { languages[language].latitude }: { transformedLat }
            </span>
            <span className={classes.coordinates__coord}>
                { languages[language].longitude }: { transformedLon }
            </span>
        </div>
    )
}
export default Coordinates;