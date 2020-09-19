import React from "react";
import classes from './ServiceCard.module.css';

const ServiceCard = ({item}) => {
    return (
        <div className={classes.card}>
          <div className={classes.backBoard}>
                <img src={item.image} alt={item.title} className={classes.image}/>
                <span className={classes.title}>{item.title}</span>
          </div>
        </div>
    )
}

export default ServiceCard
