import React, {FC} from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FollowingContainer from "../Friends/FollowingContainer";

const Navbar  = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.itemnav}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Dialogs" className={navData => navData.isActive ? s.active : s.itemnav}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Users" className={navData => navData.isActive ? s.active : s.itemnav}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/News" className={navData => navData.isActive ? s.active : s.itemnav}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Music" className={navData => navData.isActive ? s.active : s.itemnav}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Setting" className={navData => navData.isActive ? s.active : s.itemnav}>Settings</NavLink>
        </div>
        <div className={s.following}>
            <FollowingContainer />
        </div>
    </nav>
}

export default Navbar