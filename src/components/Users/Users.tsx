import React, {Dispatch} from "react";
import {UserType} from "../../Redux/users_reducers";
import {DispatchType} from "../../Redux/Types";
import s from "../Users/users.module.css"

let Users = (props: {
    users: UserType[],
    followed: Dispatch<number>,
    setUsers: any
}) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                status: 'Hi',
                firstName: 'Dmitry',
                lastName: 'K',
                photo: 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg',
                location: {country: 'Belorus', city: 'Minsk'}
            },
            {
                id: 2,
                followed: true,
                status: 'Hello',
                firstName: 'Masha',
                lastName: 'A',
                photo: 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg',
                location: {country: 'Russia', city: 'Ufa'}
            },
            {
                id: 3,
                followed: false,
                status: 'Hi',
                firstName: 'Kamilla',
                lastName: 'F',
                photo: 'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg',
                location: {country: 'Belorus', city: 'Ufa'}
            }
        ])
    }
    return <div>
        {
            props.users.map((u: UserType) => <div key={u.id}>
        <span>
            <div>
                <img src={u.photo} className={s.avatar}/>{
                <button onClick={() => (props.followed(u.id))}>{u.followed ? 'Unfollew' : 'Follow'}</button>
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