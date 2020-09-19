import React from "react";
import classes from './Header.module.css'
import Contacts from './images/Contacts.svg'
import Clock from './images/Clock.svg'
import Mail from './images/Mail.svg'
import Adress from './images/Adress.svg'
import Logo from './images/Logo.svg'

const Header = () => {
    const header = {
        links: ['ГЛАВНАЯ', 'УСЛУГИ', 'КЕЙСЫ', 'О КОМПАНИИ', 'КОНТАКТЫ'],
        mainInfo: [
            {img: Contacts, value: '8 (111) 222-33-44'},
            {img: Clock, value: 'ПН-ПТ 10:00-18:00'},
            {img: Mail, value: '8 (111) 222-33-44'},
            {img: Adress, value: '8 (111) 222-33-44'},
        ]
    }

    // В дальнейшем можно будет подключить Route
    const renderLinks = header.links.map((link) => <li key={link}><a href={'#123123'}>{link}</a></li>)


    const renderMainInfo = header.mainInfo.map((info) => {
        return <li key={info.img}><img src={info.img} alt={info.value}/><a href={'#123123123'}>{info.value}</a></li>
    })

    return (
        <div>
            <div className={classes.innerContainer}>
                <div className={classes.logoContainer}>
                    <img className={classes.logoSvg} src={Logo} alt={'logo'}/>
                    <p>BuhOne</p>
                </div>
                <div className={classes.inner}>
                    <ul className={classes.mainInfo}> { renderMainInfo } </ul>
                    <ul className={classes.links}> { renderLinks } </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
