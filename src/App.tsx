import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*'
                               element={<DialogsContainer />}/>
                        <Route path='/profile/:userId'
                               element={<ProfileContainer />}/>
                        <Route path='/profile' element={<ProfileContainer />} />
                        <Route path='/users'
                               element={<UsersContainer />}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;