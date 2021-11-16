import React from "react";
import classes from "./backgroundRandomImage.module.scss";
import { useSelector } from "react-redux";
import defaultBackground from '../../../assets/bg_image.jpg'

function BackgroundRandomImage() {
    const image = useSelector( (state) => state.control.backgroundImage);

    return (
        <div className={ classes.background }>
            <img src={ image ? image : defaultBackground }
                 className={ classes.background__image } alt='background'/>
        </div>
    )
}

export default BackgroundRandomImage;