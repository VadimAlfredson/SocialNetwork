import React from 'react'
import {AddPostActionCreator, UpdatePostTextActionCreator} from "../../../Redux/profile_reducer.ts";
import MyPosts from "./MyPosts.tsx";

const MyPostsContainer = (props) => {

    let createNewPost = () =>
    {
        props.dispatch(AddPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = UpdatePostTextActionCreator(text);
        props.dispatch(action);
    }
    return <MyPosts
        posts={props.posts}
        createNewPost={createNewPost}
        updateNewPostText={onPostChange}
        newPostText={props.newPostText}
    />
}

export default MyPostsContainer