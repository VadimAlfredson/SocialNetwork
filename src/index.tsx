import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {AddStateType} from "./Redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {postsType} from "./Redux/profile_reducer";
import {dialogsType, messagesType} from "./Redux/dialogs_reducer";
import {friendsType} from "./Redux/friends_reducer";

type PropsType = {
    posts: postsType[]
    dialogs: dialogsType[]
    messages: messagesType[]
    friends: friendsType[]
    addNewMessage: string
    newPostText: string
    dispatch: (store: AddStateType) => void
}

export let rerenderEntireTree:React.FC = (state: AddStateType, dispatch: (store: AddStateType) => void) => {
    ReactDOM.render(
        <React.StrictMode>
            <App posts={state.profilePage.posts}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 friends={state.friendsList.friends}
                 dispatch={store.dispatch.bind(store)}
                 addNewMessage={state.dialogsPage.addNewMessage}
                 newPostText={state.profilePage.newPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
        let state: AddStateType = store.getState();
        rerenderEntireTree(state);
    }
);

reportWebVitals();



