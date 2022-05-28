import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./rerender";
import state from "./Redux/state";

rerenderEntireTree(state)

reportWebVitals();

