import React from "react";
import {AddMessageIDialogsActionCreator, UpdateMessageInDialogsActionCreator} from "../../../Redux/dialogs_reduser.ts";
import {AddMessage} from "./AddMessage.tsx";
import {AddPostActionCreator, UpdatePostTextActionCreator} from "../../../Redux/profile_reducer";
import MyPosts from "../../Profile/MyPosts/MyPosts";

export const AddMessageContainer: React.FC = (props) => {

    let onMessageChange: React.FC = (text) => {
        let action = UpdateMessageInDialogsActionCreator(text);
        props.dispatch(action)
    };

    let addMessageElement: React.FC = () => {
        props.dispatch(AddMessageIDialogsActionCreator());
    }

    return <AddMessage UpdateMessageInDialogs={onMessageChange}
                       addMessageElement={addMessageElement}
                       addNewMessage={props.addNewMessage}
    />
}

/*
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
}*/
