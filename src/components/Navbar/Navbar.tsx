import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SubscriptionsContainer from "../Subscriptions/SubscriptionsContainer";

type propsType = {
    isAuth: boolean
}
const Navbar = (props: propsType) => {
    return <nav className={s.nav}>
        <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                Profile
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-user-2089773.png'} alt={'Profile'}/>
        </NavLink>
        <NavLink to="/Dialogs" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                Messages
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-speech-bubble-2496514.png'}
                 alt={'Dialogs'}/>
        </NavLink>
        <NavLink to="/Chat" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                Chat
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-chat-bubble-2089142.png'}
                 alt={'Dialogs'}/>
        </NavLink>
        <NavLink to="/Users" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                Users
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-group-2089672.png'} alt={'Users'}/>
        </NavLink>
        <NavLink to="/News" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                News
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-newspaper-2089343.png'} alt={'News'}/>
        </NavLink>
        {/*<NavLink to="/Music" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                Music
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-music-note-482046.png'}
                 alt={'Music'}/>
        </NavLink>*/}
        <NavLink to="/Setting" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                Settings
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-settings-2089734.png'}
                 alt={'Setting'}/>
        </NavLink>
        {props.isAuth &&
            <div className={s.following}>
                <SubscriptionsContainer/>
            </div>}
    </nav>
}

export default Navbar