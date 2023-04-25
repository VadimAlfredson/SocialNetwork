import './App.css';
import React, {useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route, Navigate} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {InitializeAppTC} from "./Redux/reducers/app_reducers";
import Preloader from "./components/common/Preloader/Preloader";
import {useAppDispatch, useAppSelector} from "./Redux/reduxStore";
import Footer from "./components/Footer/Footer";
import {Container, Stack} from "@mui/material";

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
            <Stack display={'flex'} flexDirection={'column'}>
                <HeaderContainer/>
                <Container sx={{mt: {xs: '0', md: '1rem'}, padding: {xs: '0 0 10px 0', md: '10px'}}}>
                    <Stack display={'flex'} flexDirection={{md: 'row', xs: 'column'}} gap={2}>
                            <Navbar isAuth={isAuth}/>
                        <Container sx={{p: '0', m: {xs: '1rem', md: '0'}}}>
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
                        </Container>
                    </Stack>
                </Container>
                <Footer />
            </Stack>
        );
}

export default App