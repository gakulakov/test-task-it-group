import React from "react";
import classes from './Reviwers.module.css'
import TitleFont from "../common/TitleFont/TitleFont";
import SecondFont from "../common/SecondFont/SecondFont";
import {SliderControl} from "../common/SliderControl/SliderControl";
import UserData from './image/UserData.png';

const Reviews = () => {
    return (
        <div className={classes.reviews}>
            <SecondFont>Отзывы</SecondFont>
            <TitleFont>Ваши благодарности</TitleFont>
            <div className={classes.commentContainer}>
                <div className={classes.commentValue}>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                    создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                </div>
                <div className={classes.userData}>
                    <img src={UserData} alt="avatar"/>
                    <div>
                    <p className={classes.userName}>Екатерина Иванова</p>
                    <p className={classes.userWork}>Директор ООО “Раз-два”</p>
                    </div>
                </div>
            </div>
            <SliderControl color={'blue'}/>
        </div>
    )
}

export default Reviews;
