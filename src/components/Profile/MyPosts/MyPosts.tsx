import React, {Dispatch, FC, useEffect} from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import {postsType} from "../../../Redux/profile_reducer";
import {MyPostsForm} from "./MyPostsForm";

type PropsType = {
    posts: Array<postsType>,
    createNewPost: (NewPost: string) => void,
}

const MyPosts: FC<PropsType> = (props) => {
    useEffect(() => {console.log(props.posts)}, [props.posts])
    let postElements = props.posts.map(
        (p) => <Post message={p.message} likeCount={p.likeCount}  key={p.id} ownerLike={p.ownerLike} id={p.id}/>
    );
    console.log('Rerender')
    return (
        <div>
            <MyPostsForm
                createNewPost={props.createNewPost}
            />
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts