import React from 'react'
import {
    AddPostActionCreator,
    postsType,
    UpdatePostTextActionCreator,
    ProfileReducerAction
} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
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
}

export default MyPostsContainer