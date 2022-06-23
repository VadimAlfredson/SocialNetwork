import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {AddStateType} from "./Redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import StoreContext from "./StoreContext";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            <App />
            </StoreContext.Provider>
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



