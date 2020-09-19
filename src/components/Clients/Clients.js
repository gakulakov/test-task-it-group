import React from "react";
import classes from './Clients.module.css';
import SecondFont from "../common/SecondFont/SecondFont";
import TitleFont from "../common/TitleFont/TitleFont";
import ClientCard from "../common/Card/ClienCard/ClientCard";
import ClientImg from './image/Clients.svg'
import {SliderControl} from "../common/SliderControl/SliderControl";

const Client = () => {
    const listItem = [
        {logo: ClientImg, name: 'Microsoft', id: 1},
        {logo: ClientImg, name: 'Microsoft', id: 2},
        {logo: ClientImg, name: 'Microsoft', id: 3},
        {logo: ClientImg, name: 'Microsoft', id: 4},
    ]

    const renderCardClient = listItem.map(item => <ClientCard item={item} key={item.id} /> )

    return (
        <div className={classes.client}>
            <div>
                <SecondFont>Наши Клиенты</SecondFont>
                <TitleFont>С нами работают</TitleFont>
            </div>
            <div className={classes.container}>
                {renderCardClient}
            </div>
            <SliderControl color={'blue'} />
        </div>
    )
}

export default Client;
