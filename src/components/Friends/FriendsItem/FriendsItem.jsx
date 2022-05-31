import React from 'react';
import {NavLink} from "react-router-dom";
import s from '../Friends.module.css';

export const FriendItem = (props) => {
    return <div>
        <NavLink to={'/friend/'+props.id} className={s.name}>
            <img className={s.iconFriend} src={props.photo} />
               <div>{props.name}</div>
        </NavLink>
    </div>
}

