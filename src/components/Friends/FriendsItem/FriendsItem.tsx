import React from 'react';
import {NavLink} from "react-router-dom";
import s from '../Friends.module.css';
import {friendsType} from "../../../Redux/friends_reducer";

export const FriendItem = (props: friendsType) => {
    return <div>
        <NavLink to={'/friend/'+props.id} className={s.name}>
            <img className={s.iconFriend} src={props.photo} />
               <div>{props.name}</div>
        </NavLink>
    </div>
}

