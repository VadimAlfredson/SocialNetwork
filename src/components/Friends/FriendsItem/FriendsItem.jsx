import React from 'react';
import {NavLink} from "react-router-dom";
import s from '../Friends.module.css';

export const FriendItem = (props) => {
    return <div>
        <NavLink to={'/friend/'+props.id}>
            <img className={s.iconFriend} src={props.photo} />
               <div className={s.name}>{props.name}</div>
        </NavLink>
    </div>
}

