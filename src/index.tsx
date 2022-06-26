import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {AddStateType} from "./Redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider value={store}>
            <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(
    () => {
    let state: AddStateType = store.getState();
        rerenderEntireTree(state);
    }
)

reportWebVitals();



