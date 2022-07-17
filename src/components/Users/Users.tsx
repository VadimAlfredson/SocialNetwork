import React, {Dispatch} from "react";
import {UserType} from "../../Redux/users_reducers";
import {DispatchType} from "../../Redux/Types";
import s from "../Users/users.module.css"
import * as axios from "axios";

let Users = (props: {
    users: UserType[],
    followed: Dispatch<number>,
    setUsers: any
}) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => { props.setUsers(responce.data.items) }) }
    return <div>
        {
            props.users.map((u: UserType) => <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small !== 0 ? u.photos.small :
                    'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg'
                } className={s.avatar}/>{
                <button onClick={() => (props.followed(u.id))}>{u.followed === true ? 'Unfollew' : 'Follow'}</button>
            }</div>
<span>
    <div>{u.name}</div>
    <div>{u.status}</div>
</span>
        </span>
            </div>)}
    </div>
}

export default Users