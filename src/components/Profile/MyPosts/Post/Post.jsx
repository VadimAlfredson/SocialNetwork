import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}><img className={s.img}
                                     src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'/>
            <div className={s.post}>{props.message}</div>
            <div className={s.post}>{props.like} like</div>
        </div>
    )
}

export default Post