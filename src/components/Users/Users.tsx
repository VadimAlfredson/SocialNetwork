import React from "react";
import {UserType} from "../../Redux/users_reducers";
import {DispatchType} from "../../Redux/Types";
import s from "../Users/users.module.css"

let Users = (props: {users: UserType[],
    followed: DispatchType}) => {
    if (props.users.length === 0) {
    props.setusers(props.users) }
    return <div>
            {
            props.users.map((u: UserType) => <div key={u.id}>
        <span>
            <div>
                <img src={u.photo} className={s.avatar}/>{
                <button onClick={ () => ( props.followed(u.id)) }>{u.followed ? 'Unfollew' : 'Follow'}</button>
            }</div>
<span>
    <div>{u.firstName}</div>
    <div>{u.lastName}</div>
    <div>{u.location.country}</div>
    <div>{u.location.city}</div>
</span>
        </span>
    </div>)}
    </div>
}

export default Users