import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src=''/>
        <h2 className={s.h2}><em>Social Void</em></h2>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
            <NavLink to={'/login'}>login</NavLink>}
        </div>
    </header>;
}

export default Header