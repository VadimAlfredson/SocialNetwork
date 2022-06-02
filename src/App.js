import './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Profile from './components/Profile/Profile.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = (props) => {
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
                                                 AddMessageInDialogs={props.AddMessageInDialogs}
                                                 addNewMessage={props.addNewMessage}
                                                 updateMessageInDialogs={props.updateMessageInDialogs}
                               />}/>
                        <Route path='/profile'
                               element={<Profile posts={props.posts}
                                                 AddPost={props.AddPost}
                                                 newPostText={props.newPostText}
                                                 updatePostText={props.updatePostText}
                               />}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;