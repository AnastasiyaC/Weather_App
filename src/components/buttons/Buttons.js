import React from 'react';
import classes from "./buttons.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    changeCelsiusToFahrenheit,
    changeFahrenheitToCelsius, setLanguage, setWeather,
    updateBackgroundImage
} from "../../redux/reducer";
import * as axios from "axios";
import { getWeather } from "../../api/commonService";

function Buttons() {
    const control = useSelector( (state) => state.control);
    const coords = useSelector( state => state.location);
    const dispatch = useDispatch();

    const updateImage = () => {
        const api = {
            key: "7z_4tWeTFZAYdD7CPoFq2RIGPi7HjkTbnprpDB9sK0k",
            base: "https://api.unsplash.com/photos/"
        }

        axios.get(`${api.base}random?orientation=landscape&per_page=1&query=nature&client_id=${api.key}`)
            .then(res => {
                const img = res.data.urls.regular;

                dispatch(updateBackgroundImage(img));
                console.log('button')
            })
            .catch( () => {
                alert('image not found')
            })
    }

    const onUpdateClick = () => {
        updateImage()
    }

    const onChangeCelsiusToFahrenheitClick = () => {
        if ( control.units === 'metric') {
            dispatch(changeCelsiusToFahrenheit('imperial'))
        }
    }

    const onChangeFahrenheitToCelsiusClick = () => {
        if ( control.units === 'imperial') {
            dispatch(changeFahrenheitToCelsius('metric'))
        }
    }

    const onLanguageChange = (event) => {
        dispatch(setLanguage(event.target.value));
        getWeather(control.units, coords, event.target.value)
            .then( (res) => {
                dispatch(setWeather(res.data));
            }).catch( err => console.log(err.message))
    }

    return (
        <div className={classes.buttons}>
            <button className={ classes.buttons__buttonUpdate } onClick={ onUpdateClick }>
            </button>
            <select className={ classes.buttons__buttonLanguage } value={ control.language } onChange={ onLanguageChange }>
                <option value='en'>en</option>
                <option value="ru">ru</option>
            </select>
            <button className={ `${ classes.buttons__buttonDegree } ${ classes.buttons__buttonDegreeF }` }
                    onClick={ onChangeCelsiusToFahrenheitClick }>
                °F
            </button>
            <button className={ `${ classes.buttons__buttonDegree } ${ classes.buttons__buttonDegreeC } ${ classes.buttons__buttonDegreeActive }` }
                    onClick={ onChangeFahrenheitToCelsiusClick }>
                °С
            </button>
        </div>
    )
}

export default Buttons;