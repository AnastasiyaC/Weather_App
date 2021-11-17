import React from 'react';
import classes from "./header.module.scss";

function Header(props) {

    return (
        <header className={classes.header}>
            <h1 className={classes.header__title}>weather</h1>
            <div className={classes.header__controll}>
                { props.children }
            </div>
        </header>
    )
}

export default Header;