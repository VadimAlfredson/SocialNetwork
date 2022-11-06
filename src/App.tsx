import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
/*import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";*/
import HeaderContainer from "./components/Header/HeaderContainer";
/*import Login from "./components/login/login";*/
import {connect} from "react-redux";
import { loginAuthThunkCreator } from './Redux/auth_reducers';
import {InitializeAppTC} from "./Redux/app_reducers";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const Login = React.lazy(() => import('./components/login/login'))


class App extends React.Component {
    componentDidMount() {
        // исправь потом
        // @ts-ignore
        this.props.InitializeAppTC()
    }
    render() {
       /* if (!this.props.initialized){
            return <Preloader />
        }*/
        return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <React.Suspense fallback={<div><Preloader /></div>}>
                        <Routes>
                            <Route path='/dialogs/*'
                                   element={<DialogsContainer/>}/>
                            <Route path='/profile/:userId'
                                   element={<ProfileContainer/>}/>
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path='/users'
                                   element={<UsersContainer/>}/>
                            <Route path='/login'
                                   element={<Login/>}/>
                        </Routes>
                            </React.Suspense>
                    </div>

                </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized as boolean
})

export default connect(mapStateToProps, {InitializeAppTC})(App);