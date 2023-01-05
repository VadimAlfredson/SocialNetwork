import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logoBlock}>
        <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'/>
        <h2 className={s.h2}>Social Network</h2>
        </div>
        <div className={s.log}>
            {props.isAuth ?
                <div className={s.loginBlock}><div>{props.login}</div>
                <button onClick={props.logoutThunkCreator}>Log out</button>
                </div> : <NavLink className={s.login} to={'/login'}>login</NavLink>}
        </div>
    </header>;
}

export default Header