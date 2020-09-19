import React from "react";
import classes from './Section.module.css';

const Section = ({color, children}) => {
    return (
        <section style={{
            background: color
        }}>
            <div className={classes.content}>
                {children}
            </div>
        </section>
    )
}

export default Section
