import React from 'react';
import s from './Friends.module.css';
import {FriendItem} from "./FriendsItem/FriendsItem.tsx";
import {friendsType} from "../../Redux/friends_reducer";

const Friends: React.FC<friendsType> = (props) => {
    let friendsItem: friendsType = props.friends.map(
        f => <FriendItem name={f.name} id={f.id} photo={f.photo}/>
    )
    return <div className={s.friends}>
        <h4>Friends</h4>
        <div className={s.friendsList}>
            {friendsItem}
        </div>
    </div>
}

export default Friends;