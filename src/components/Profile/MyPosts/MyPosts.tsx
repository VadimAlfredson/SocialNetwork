import React, {Dispatch, FC, useEffect} from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import {postsType} from "../../../Redux/reducers/profile_reducer";
import {MyPostsForm} from "./MyPostsForm";
import {Box} from "@mui/material";

type PropsType = {
    posts: Array<postsType>,
    createNewPost: (NewPost: string) => void,
}

const MyPosts: FC<PropsType> = (props) => {
    let postElements = props.posts.map(
        (p) => <Post message={p.message} likeCount={p.likeCount}
                     key={p.id} ownerLike={p.ownerLike} id={p.id}/>
    );
    console.log('Rerender')
    return (
        <Box display={'flex'} flexDirection={'column'} mt={3}>
            <MyPostsForm
                createNewPost={props.createNewPost}
            />
            <div className={s.post}>
                {postElements}
            </div>
        </Box>
    )
}

export default MyPosts