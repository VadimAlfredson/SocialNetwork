import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import {postsType} from "../../Redux/profile_reducer";

const Profile = (props: {
    posts: postsType[],
    dispatch: (props: { type: string }) => void,
    newPostText: string
}) => {
    return <div>
        <div className={s.topImgDiv}>
            <img className={s.topImg}
                 src='https://tech-touch.ru/wp-content/uploads/2013/06/skachat-panoramnye-oboi-dlya-ios-7-gory-1.jpg'/>
        </div>
        <div>
            <img className={s.avatarImg}
                 src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'/>
            discription
        </div>
        Main Content;
        <MyPostsContainer
            posts={props.posts}
            dispatch={props.dispatch}
            newPostText={props.newPostText}
        />
    </div>
}

export default Profile