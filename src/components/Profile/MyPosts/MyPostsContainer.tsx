import React from 'react'
import {
    AddPostActionCreator,
    postsType,
    UpdatePostTextActionCreator,
    ProfileReducerAction
} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

/*const MyPostsContainer = () => {
    return (
    <StoreContext.Consumer>
        {(store) => {

            let createNewPost = () => {
                store.dispatch(AddPostActionCreator());
            }

            let onPostChange = (text: string) => {
                let action = UpdatePostTextActionCreator(text);
                store.dispatch(action);
            }
            return <MyPosts
                posts={store.profilePage.posts}
                createNewPost={createNewPost}
                updateNewPostText={onPostChange}
                newPostText={store.profilePage.newPostText}
            />
        }
        }
    </StoreContext.Consumer>
    )
}*/

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    /*    createNewPost: createNewPost
        updateNewPostText: onPostChange*/
        newPostText: state.profilePage.newPostText
    }
}

    let mapDispatchToProps = (dispatch) => {
    return {
        createNewPost: () => {
            dispatch(AddPostActionCreator());
        },

        onPostChange: (text: string) => {
            let action = UpdatePostTextActionCreator(text);
            dispatch(action);
        }
    }
    }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer