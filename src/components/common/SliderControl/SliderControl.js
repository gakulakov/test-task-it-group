import classes from './SliderControl.module.css';
import React from "react";
import Left from './images/Left.svg';
import Right from './images/Right.svg'

export const SliderControl = ({color}) => {
    const leftArrow = Left
    const rightArrow = Right

    const dotsColor = color === 'blue' ? classes.dotsColorBlue : classes.dotsColorGray;
    const buttonColor = color === 'blue' ? classes.buttonColorBlue : classes.buttonColorGray;



    return (
        <div className={classes.navElements}>
            <div className={`${classes.pages} ${dotsColor}`}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className={classes.navButtons}>
            <span className={`${classes.leftButton} ${buttonColor}`}>
                <img src={leftArrow} alt="leftArrow"/>
            </span>
                <span className={`${classes.rightButton} ${buttonColor}`}>
                <img src={rightArrow} alt="rightArrow"/>
            </span>
            </div>
        </div>
    )
}
