import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";
import {friendsType} from "../../Redux/friends_reducer";
import StoreContext from "../../StoreContext";
import {AddStateType} from "../../Redux/reduxStore";

const Navbar = () => {
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
            <StoreContext.Consumer>
                {(store) => {
                    return (
                        <Friends friends={store.friendsList.friends}/>
                    )
                }
                }
            </StoreContext.Consumer>
        </div>
  </nav>
}

export default Navbar