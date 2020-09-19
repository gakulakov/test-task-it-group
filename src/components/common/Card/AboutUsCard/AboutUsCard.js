import React from "react";
import classes from './AboutUsCard.module.css';


const AboutUsCard = ({item}) => {
    return (
        <div className={classes.card}>
            <div className={classes.cardInner}>
                <p className={classes.title}>{item?.value}</p>
                <p className={classes.value}>{item?.title}</p>
                <a href={item?.linkUrl}>{item?.linkText}</a>
            </div>
        </div>
    )
}

export default AboutUsCard
