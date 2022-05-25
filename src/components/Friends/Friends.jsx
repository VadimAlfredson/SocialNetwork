import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";
import {FriendItem} from "./FriendsItem/FriendsItem";

const Friends = (props) => {
    let friendsItem = props.friends.map(
        f => <FriendItem name={f.name} id={f.id} photo={f.photo}/>
    )
    return <div className={s.friends}>
        <h4>Friends</h4>
        <div className={s.friendsList}>
            {friendsItem};
        </div>
    </div>
}

export default Friends;