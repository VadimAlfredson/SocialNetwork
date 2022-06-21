import React from 'react'
import {
    AddPostActionCreator,
    postsType,
    UpdatePostTextActionCreator,
    ProfileReducerAction
} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props: {
    posts: postsType[],
    dispatch: (AddPostActionCreator: ProfileReducerAction) => void,
    newPostText: string,
}) => {

    let createNewPost = () => {
        props.dispatch(AddPostActionCreator());
    }

    let onPostChange = (text: string) => {
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