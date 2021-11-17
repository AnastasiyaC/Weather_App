import React, { useState } from 'react';
import classes from "./search.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { setWeather, updateSearchValue } from "../../redux/reducer";
import { setCoordinates } from "../../redux/reducer";
import { getWeather, searchCity } from "../../api/commonService";
import { languages } from "../../constants/languages";
import Message from "../common/message/Message";


function Search() {
    const language = useSelector( state => state.control.language);
    const searchValue = useSelector(state => state.control.searchValue);
    const units = useSelector( (state) => state.control.units);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const updateWeather = () => {
        if (!searchValue) {
            return;
        } else {
            searchCity(searchValue).then( (res) => {
                const coord = res.data.coord;

                dispatch(setCoordinates(coord));
                return coord;

            }).then( (coord) => {
                getWeather(units, coord, language)
                    .then( (res) => {
                        dispatch(setWeather(res.data));
                    })
            }).catch( (err) => {
                console.log('city not found:', err.message);
                setMessage( 'city not found' );
            });
            dispatch(updateSearchValue(''));
        }
    }

    const updateSearch = (event) => {
        dispatch(updateSearchValue(event.target.value));
        if (message) {
            setMessage('');
        }
    }

    const onEnterPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.target.blur();
            updateWeather();
        }
    };

    const onBtnSearchClick = () => {
        updateWeather();
    }

    return (
        <form className={ classes.form }>
            <input type="text"
                   placeholder={ languages[language].searchCity }
                   className={ classes.form__inputSearch }
                   onChange={ updateSearch }
                   onKeyPress={ onEnterPress }
                   value={ searchValue } />
            <input type="button"
                   value={ languages[language].search }
                   className={ classes.form__buttonSearch }
                   onClick={ onBtnSearchClick }/>
            <div className={ classes.form__message }>
                <Message message={ message }/>
            </div>
        </form>
    )
}

export default Search;




