import React, {FC, useEffect, useState} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../Redux/reduxStore";
import {getDefaultPhoto} from "../../Redux/selectors/auth_selectors";

type PropsType = {
    photo: string
    isAuth: boolean
    login: string
    logoutThunkCreator: () => void
}

const Header: FC<PropsType> = (props) => {
    const defaultPhoto = useAppSelector(getDefaultPhoto)
    let [ownerPhoto, setOwnerPhoto] = useState(props.photo)
    useEffect( () => {
        if (props.photo) {
        setOwnerPhoto(props.photo)}
        else {setOwnerPhoto(defaultPhoto)}
    }, [props.photo])
    return <header className={s.header}>
        <div className={s.logoBlock}>
        <h2 className={s.h2}>Social Network</h2>
        </div>
        <div className={s.log}>
            {props.isAuth ?
                <div className={s.loginBlock}><div className={s.ownerInfo}><div>{props.login}</div>
                    <img src={ownerPhoto} alt={'logout'}/>
                </div>
                <button onClick={props.logoutThunkCreator}>
                    <img className={s.logoutIcon}  src={process.env.PUBLIC_URL + '/free-icon-exit-320140.png'}/>
                </button>
                </div> : <NavLink className={s.login} to={'/login'}>login</NavLink>}
        </div>
    </header>;
}

export default Header