import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/reduxStore.ts";
import ReactDOM from "react-dom";
import App from "./App.tsx";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                posts={state.profilePage.posts}
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

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
}
);

reportWebVitals();



