import React, {Dispatch} from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import {profilePageType} from "../../../Redux/profile_reducer";
import {MyPostsForm} from "./MyPostsForm";

const MyPosts = (props: {
    profilePage: profilePageType,
    createNewPost: Dispatch<string>,
    }) => {
    let postElements = props.profilePage.posts.map(
        (p) => <Post message={p.message} likeCount={p.likeCount}  key={p.id}/>
    );
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