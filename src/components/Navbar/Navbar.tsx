import React, {FC} from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FollowingContainer from "../Friends/FollowingContainer";

const Navbar  = () => {
    return <nav className={s.nav}>
            <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.itemnav}>
                <div className={s.item}>
                Profile
                </div>
                </NavLink>
            <NavLink to="/Dialogs" className={navData => navData.isActive ? s.active : s.itemnav}>
                <div className={s.item}>
                Messages
                </div>
            </NavLink>
            <NavLink to="/Users" className={navData => navData.isActive ? s.active : s.itemnav}>
                <div className={s.item}>
                    Users
                </div>
            </NavLink>
            <NavLink to="/News" className={navData => navData.isActive ? s.active : s.itemnav}>
                <div className={s.item}>
                News
                </div>
                </NavLink>
            <NavLink to="/Music" className={navData => navData.isActive ? s.active : s.itemnav}>
                <div className={s.item}>
                Music
                </div>
                </NavLink>
            <NavLink to="/Setting" className={navData => navData.isActive ? s.active : s.itemnav}>
                <div className={s.item}>
                Settings
                </div>
                </NavLink>
        <div className={s.following}>
            <FollowingContainer />
        </div>
    </nav>
}

export default Navbar