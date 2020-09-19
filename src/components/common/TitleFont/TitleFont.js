import React from "react";
import classes from './TitleFont.module.css'

const TitleFont = ({children, ...props}) => {
    return(
        <h1 className={classes.titleFont} {...props}>
            { children }
        </h1>
    )
}

export default TitleFont
