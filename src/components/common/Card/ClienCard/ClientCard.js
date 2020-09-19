import React from "react";
import classes from './ClientCard.module.css';

const ClientCard = ({item}) => {
    return (
        <div className={classes.card}>
            <img src={item.logo} alt={item.name}/>
        </div>
    )
}

export default ClientCard
