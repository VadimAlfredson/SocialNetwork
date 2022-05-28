import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./rerender";
import state from "./Redux/state";

/*AddPost('asdfag');*/

rerenderEntireTree(state)

reportWebVitals();

