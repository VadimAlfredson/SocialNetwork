import React, {useEffect, useState} from 'react';
import s from './Post.module.css';
import {useAppDispatch, useAppSelector} from "../../../../Redux/reduxStore";
import {setLikePostActionCreator} from "../../../../Redux/reducers/profile_reducer";
import {Avatar, Card, CardContent, CardMedia, Typography} from "@mui/material";

const Post = (props: { message: string, likeCount: number, ownerLike: boolean, id: number}) => {
    const avatar = useAppSelector(state => state.profile.profile.photos.small)
    const defaultPhoto = useAppSelector(state => state.auth.defaultPhoto)

    let [likeActive, setLikeActive] = useState<boolean>(props.ownerLike)
    let [likeCount, setLikeCount] = useState<number>(props.likeCount)
    const dispatch = useAppDispatch()
    useEffect(() => {
        setLikeActive(props.ownerLike)
        setLikeCount(props.likeCount)
        console.log(props.ownerLike)
    }, [props.ownerLike])
    let onClickChange = () => {
        dispatch(setLikePostActionCreator(props.id))
    }
    return (
        <Card sx={{display: 'flex', flexDirection: 'row', bgcolor: '#151515',
            alignItems: 'center', padding: '3px', gap: 2}}>
            <CardMedia >
                <Avatar src={avatar ? avatar : defaultPhoto} />
            </CardMedia>
            <CardContent sx={{p: '0'}}>
                <Typography color={'#D0D3D4'}>{props.message}</Typography>
                <div className={likeActive ? s.likeActive : s.like}>
                    <img
                    className={s.likeIcon}
                    src={likeActive ? process.env.PUBLIC_URL + '/likeActive.png' : process.env.PUBLIC_URL + '/like.png'}
                    onClick={() => onClickChange()}
                    alt={'like'}/>
                    {likeCount}
                </div>
            </CardContent>
        </Card>
    )
}

export default Post