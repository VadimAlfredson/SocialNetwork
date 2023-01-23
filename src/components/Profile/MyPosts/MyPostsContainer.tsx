import React, {Dispatch} from 'react'
import {
    AddPostActionCreator,
} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../Redux/reduxStore";

let mapStateToProps = (state: RootState) => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
};

let mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        createNewPost: (newPost: string) => {
            dispatch(AddPostActionCreator(newPost))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer