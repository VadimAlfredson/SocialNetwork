import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {friendsType} from "./Redux/friends_reducer";
import {dialogsType, messagesType} from "./Redux/dialogs_reducer";
import {postsType} from "./Redux/profile_reducer";

const App: (props: { friends: friendsType; messages: messagesType[]; dialogs: dialogsType[]; dispatch: () => void; addNewMessage: string; posts: postsType[]; newPostText: string }) => void = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*'
                               element={<Dialogs messages={props.messages}
                                                 dialogs={props.dialogs}
                                                 dispatch={props.dispatch}
                                                 addNewMessage={props.addNewMessage}
                               />}/>
                        <Route path='/profile'
                               element={<Profile posts={props.posts}
                                                 dispatch={props.dispatch}
                                                 newPostText={props.newPostText}
                               />}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;