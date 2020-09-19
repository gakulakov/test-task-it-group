import React from "react";
import classes from './Service.module.css'
import SecondFont from "../common/SecondFont/SecondFont";
import TitleFont from "../common/TitleFont/TitleFont";
import ServiceCard from "../common/Card/ServiceCard/ServiceCard";
import * as mockItemList from '../../mock_JSON/serviceListItem.json'

const Service = () => {
    const itemList = mockItemList.dataSet;

    const renderCards = itemList.map(item => <ServiceCard key={item.id} item={item}/>)


    return (

        <div>
            <SecondFont>Наши услуги</SecondFont>
            <TitleFont>Мы специализируемся</TitleFont>
            <div className={classes.cardContainer}>
                {renderCards}
            </div>
        </div>
    )
}

export default Service;
