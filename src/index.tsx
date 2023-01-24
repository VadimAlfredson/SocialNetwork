import React from 'react';
import './index.css';
import store from "./Redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";


ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <HashRouter>
                    <App />
                </HashRouter>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
