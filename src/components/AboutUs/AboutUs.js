import React from "react";
import classes from './AboutUs.module.css';
import SecondFont from "../common/SecondFont/SecondFont";
import TitleFont from "../common/TitleFont/TitleFont";
import AboutUsCard from "../common/Card/AboutUsCard/AboutUsCard";

const AboutUs = () => {
    const itemList = [
        {value: 90, title: 'Завершено крупных сделок', linkText: 'Все кейсы', linkUrl: '#', id: 1},
        {value: 90, title: 'Завершено крупных сделок', linkText: 'Все кейсы', linkUrl: '#', id: 2},
        {value: 90, title: 'Завершено крупных сделок', linkText: 'Все кейсы', linkUrl: '#', id: 3},
        {value: 90, title: 'Завершено крупных сделок', linkText: 'Все кейсы', linkUrl: '#', id: 4},
    ];

    const renderAboutUsCard = itemList.map(item => <AboutUsCard item={item} key={item.id}/>)


    return (
        <div className={classes.aboutUs}>
            <div className={classes.mainText}>
                <SecondFont>О нас</SecondFont>
                <TitleFont style={{marginBottom: 0}}>Компания</TitleFont>
                <TitleFont style={{color: "#005FA3", marginTop: 0}}>ИвановПром</TitleFont>
                <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                    создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem
                    Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный
                    дизайн.
                </p>
            </div>
            <div className={classes.cardContainer}>
                {renderAboutUsCard}
            </div>
        </div>
    )
}

export default AboutUs
