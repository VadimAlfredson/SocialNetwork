import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {AddStateType} from "./Redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );


reportWebVitals();



// <App posts={state.profilePage.posts}
//      dialogsPage={state.dialogsPage}
//      friends={state.friendsList.friends}
//      dispatch={store.dispatch.bind(store)}
//      addNewMessage={state.dialogsPage.addNewMessage}
//      newPostText={state.profilePage.newPostText}
// />