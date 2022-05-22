import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsUsersData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Danil'},
    {id: 3, name: 'Rail'},
    {id: 4, name: 'Artur'},
    {id: 5, name: 'Nikita'}
];

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'message'},
    {id: 4, message: 'message'},
];

let postData = [
    {id: 1, message: 'Hi, how are you?', likeCount: 23},
    {id: 2, message: 'Yo', likeCount: 12},
    {id: 3, message: 'My first post!', likeCount: 32},
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsUsersData={dialogsUsersData} messagesData={messagesData} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

