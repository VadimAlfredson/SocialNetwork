import React from 'react';
import s from './../Profile.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return <div>
        <div className={s.topImgDiv}>
            <img className={s.topImg}
                 src='https://tech-touch.ru/wp-content/uploads/2013/06/skachat-panoramnye-oboi-dlya-ios-7-gory-1.jpg'/>
        </div>
        <div>
            <img className={s.avatarImg}
                 src={props.profile.photos.large} />
            discription
        </div>
        Main Content;
    </div>
}

export default ProfileInfo