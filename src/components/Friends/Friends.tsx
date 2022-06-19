import React from 'react';
import s from './Friends.module.css';
import {FriendItem} from "./FriendsItem/FriendsItem";
import {friendsType} from "../../Redux/friends_reducer";

const Friends: React.FC<friendsType> = (props: friendsType) => {
    let friendsItem: friendsType = props.friends.map<friendsType[]>(
        f => <FriendItem name={f.name} id={f.id} photo={f.photo} key={f.id}/>
    )
    return <div className={s.friends} key={props.id}>
        <h4>Friends</h4>
        <div className={s.friendsList}>
            <>{friendsItem}</>
        </div>
    </div>
}

export default Friends;