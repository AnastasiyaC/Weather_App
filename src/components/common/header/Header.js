import React from 'react';
import classes from "./header.module.scss";
import Buttons from "../../buttons/Buttons";
import Search from "../../search/Search";

function Header({ children }) {

    return (
        <header className={classes.header}>
            <h1 className={classes.header__title}>weather</h1>
            <div className={classes.header__controll}>
                { children }
            </div>
        </header>
    )
}

export default Header;