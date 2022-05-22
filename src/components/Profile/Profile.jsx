import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import App from "../../App";

const Profile = (props) => {
    return <div>
        <div  className={s.topImgDiv}>
            <img className={s.topImg}
                 src='https://tech-touch.ru/wp-content/uploads/2013/06/skachat-panoramnye-oboi-dlya-ios-7-gory-1.jpg'/>
        </div>
        <div>
            <img className={s.avatarImg}
                 src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'/>
            discription
        </div>
        Main Content;
        <MyPosts postData={props.postData} />
    </div>
}

export default Profile