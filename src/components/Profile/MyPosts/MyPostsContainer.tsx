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
import {DispatchType} from "../../../Redux/Types";

let mapStateToProps = (state: AddStateType) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch: DispatchType) => {
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