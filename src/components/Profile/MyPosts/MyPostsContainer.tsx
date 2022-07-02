import React from 'react'
import {
    AddPostActionCreator,
    postsType,
    UpdatePostTextActionCreator,
    ProfileReducerAction
} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AddStateType} from "../../../Redux/reduxStore";

/*const MyPostsContainer = (props: {
    posts: postsType[],
    dispatch: (props: { type: string }) => void,
    newPostText: string
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
}*/

let mapStateToProps = (state: AddStateType) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch: any) => {
    return {
        createNewPost: () => {
            dispatch(AddPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(UpdatePostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer