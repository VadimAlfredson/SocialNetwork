import './App.css';
import React, {useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route, Navigate} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {InitializeAppTC} from "./Redux/reducers/app_reducers";
import Preloader from "./components/common/Preloader/Preloader";
import {useAppDispatch, useAppSelector} from "./Redux/reduxStore";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const Login = React.lazy(() => import('./components/login/login'))
const SettingContainer = React.lazy(() => import('./components/Setting/SettingContainer'))
const Chat = React.lazy(() => import('./components/Chat/Chat'))


const App = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const dispatch = useAppDispatch()
    useEffect(() => {dispatch(InitializeAppTC())}, [])
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='bodySide'>
                    <div className='navbar'>
                        <div className='navbarLevel2'>
                            <Navbar isAuth={isAuth}/>
                        </div>
                    </div>
                    <div className='app-wrapper-content'>
                        <div className='content'>
                            <React.Suspense fallback={<div><Preloader/></div>}>
                                <Routes>
                                    <Route path="/SocialNetwork" element={<Navigate to="/profile"/>}/>
                                    <Route path="/" element={<Navigate to="/profile"/>}/>
                                    <Route path="*" element={<div>404</div>}/>
                                    <Route path='/dialogs/*'
                                           element={<DialogsContainer/>}/>
                                    <Route path='/profile/:userId'
                                           element={<ProfileContainer/>}/>
                                    <Route path='/profile' element={<ProfileContainer/>}/>
                                    <Route path='/users'
                                           element={<UsersContainer/>}/>
                                    <Route path='/login'
                                           element={<Login/>}/>
                                    <Route path='setting'
                                           element={<SettingContainer/>}
                                    />
                                    <Route path='chat'
                                           element={<Chat/>}
                                    />
                                </Routes>
                            </React.Suspense>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default App