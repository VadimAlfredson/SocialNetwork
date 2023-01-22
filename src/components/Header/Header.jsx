import React, {useEffect, useState} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    let [ownerPhoto, setOwnerPhoto] = useState(props.photo)
    useEffect( () => {setOwnerPhoto(props.photo)}, [props.photo])
    return <header className={s.header}>
        <div className={s.logoBlock}>
        <h2 className={s.h2}>Social Network</h2>
        </div>
        <div className={s.log}>
            {props.isAuth ?
                <div className={s.loginBlock}><div className={s.ownerInfo}><div>{props.login}</div><img src={ownerPhoto}/></div>
                <button onClick={props.logoutThunkCreator}>Log out</button>
                </div> : <NavLink className={s.login} to={'/login'}>login</NavLink>}
        </div>
    </header>;
}

export default Header