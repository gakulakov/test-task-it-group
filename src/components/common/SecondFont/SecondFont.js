import React from "react";
import classes from './SecondFont.module.css'

const SecondFont = ({children}) => {
    return(
        <h2 className={classes.secondFont}>
            { children }
        </h2>
    )
}

export default SecondFont
