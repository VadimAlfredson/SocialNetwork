import React, {useEffect, useState} from 'react';
import s from './Post.module.css';

const Post = (props: { message: string, likeCount: number }) => {
    let [likeActive, setLikeActive] = useState<boolean>(false)
    let [likeCount, setLikeCount] = useState<number>(props.likeCount)
    let onClickChange = () => {
        setLikeActive(!likeActive)
        setLikeCount(!likeActive ? likeCount + 1 : likeCount - 1)
    }

    return (
        <div className={s.post}>
            <img className={s.img}
                 src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'/>
            <div className={s.messageBlock}>
                <div className={s.message}>{props.message}</div>
            </div>
            <div className={likeActive ? s.likeActive : s.like}>{likeCount}<img
                className={s.likeIcon}
                src={likeActive ? process.env.PUBLIC_URL + '/likeActive.png' : process.env.PUBLIC_URL + '/like.png'}
                onClick={() => onClickChange()}
                alt={'like'}/>
            </div>
        </div>
    )
}

export default Post