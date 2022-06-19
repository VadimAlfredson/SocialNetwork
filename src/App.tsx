import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App: React.FC = (props) => {
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