import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = (props) => {
    return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/Profile" className = { navData => navData.isActive ? s.active : s.itemnav}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/Dialogs" className = { navData => navData.isActive ? s.active : s.itemnav }>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/News" className = { navData => navData.isActive ? s.active : s.itemnav }>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/Music" className = { navData => navData.isActive ? s.active : s.itemnav }>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/Setting" className = { navData => navData.isActive ? s.active : s.itemnav }>Settings</NavLink>
    </div>
        <div>
            <Friends friends={props.friends}/>
        </div>
  </nav>
}

export default Navbar