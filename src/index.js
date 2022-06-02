import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                posts={state.profilePage.posts}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                friends={state.friendsList.friends}
                AddPost={store.AddPost.bind(store)}
                AddMessageInDialogs={store.AddMessageInDialogs.bind(store)}
                updatePostText={store.updatePostText.bind(store)}
                updateMessageInDialogs={store.updateMessageInDialogs.bind(store)}
                addNewMessage={state.dialogsPage.addNewMessage}
                newPostText={state.profilePage.newPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();



