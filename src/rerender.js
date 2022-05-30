import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AddPost} from "./Redux/state";
import {updatePostText} from "./Redux/state";
import {AddMessageInDialogs} from "./Redux/state"

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                posts={state.profilePage.posts}
                AddPost={AddPost}
                AddMessageInDialogs={AddMessageInDialogs}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                newPostText={state.profilePage.newPostText}
                updatePostText={updatePostText}
                friends={state.friendsList.friends}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
                posts={state.profilePage.posts}
                AddPost={AddPost}
                AddMessageInDialogs={AddMessageInDialogs}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                newPostText={state.profilePage.newPostText}
                updatePostText={updatePostText}
                friends={state.friendsList.friends}
            />
        </React.StrictMode>,
    );
}*/
