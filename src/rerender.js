import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AddPost} from "./Redux/state";
import {AddMessageInDialogs} from "./Redax/state.js"

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                AddPost={AddPost}
                AddMessageInDialogs={AddMessageInDialogs}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                posts={state.profilePage.posts}
                friends={state.friendsList.friends}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}