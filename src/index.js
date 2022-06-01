import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {AddMessageInDialogs, AddPost, subscribe, updateMessageInDialogs, updatePostText} from "./Redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                posts={state.profilePage.posts}
                AddPost={AddPost}
                AddMessageInDialogs={AddMessageInDialogs}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                addNewMessage={state.dialogsPage.addNewMessage}
                newPostText={state.profilePage.newPostText}
                updatePostText={updatePostText}
                updateMessageInDialogs={updateMessageInDialogs}
                friends={state.friendsList.friends}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();

