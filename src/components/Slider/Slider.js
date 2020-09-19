import React from "react";
import classes from './Slider.module.css'
import {SliderControl} from "../common/SliderControl/SliderControl";

const Slider = ({value}) => {


    const sliderValue = 'Бухгалтерские услуги в Санкт-Петербурге';

    //Сделать СЛАЙДЕР!

    return (
        <div className={classes.slider}>
            <div className={classes.innerContent}>
                <div className={classes.sliderValue}>
                    <div className={classes.label}>
                        {sliderValue}
                    </div>
                    <button>Наша презентация</button>
                </div>
                <SliderControl/>
            </div>
        </div>
    )
}

export default Slider
