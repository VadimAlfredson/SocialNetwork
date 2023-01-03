import React from 'react';
import s from './Post.module.css';

const Post = (props: {message: string, likeCount: number}) => {
    return (
        <div className={s.post} >
            <img className={s.img} src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'/>
            <div className={s.messageBlock}><div className={s.message}>{props.message}</div></div>
            <div className={s.like}>{props.likeCount} like</div>
        </div>
    )
}

export default Post