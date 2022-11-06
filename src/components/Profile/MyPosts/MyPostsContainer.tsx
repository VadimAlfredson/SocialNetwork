import React from 'react'
import {
    AddPostActionCreator,
} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AddStateType} from "../../../Redux/reduxStore";
import {DispatchType} from "../../../Redux/Types";

let mapStateToProps = (state: AddStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        createNewPost: (newPost: string) => {
            dispatch(AddPostActionCreator(newPost))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer