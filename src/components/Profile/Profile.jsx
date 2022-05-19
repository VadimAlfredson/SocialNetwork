import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
    return <div>
    <div>
      <img src='https://s1.1zoom.ru/big0/821/Austria_Mountains_Lake_Scenery_Panorama_Tyrol_Alps_600571_1280x435.jpg' />
    </div>
    <div className={s.avatarImg}>
      <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' />
      discription
    </div>
    Main Content;
    <MyPosts />
  </div>
}

export default Profile