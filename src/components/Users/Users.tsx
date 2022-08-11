import React from "react";
import {UserType} from "../../Redux/users_reducers";
import s from "../Users/users.module.css"
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    ;
    return (
        <div>
            <div>
                {pages.map(p => {
                        return <span className={props.currentPage === p ? s.activePage : null}
                                     onClick={() => {
                                         props.onPageChange(p)
                                     }} key={p}
                        >{p}</span>
                    }
                )}
            </div>
            <div>
                {
                    props.users.map((u: UserType) => <div key={u.id}>
        <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small !== null ? u.photos.small :
                    'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg'
                } className={s.avatar}/>
                </NavLink>
                {
                    <button
                        onClick={() => (props.onFollowChange(u.id, u.followed))}>{u.followed ? 'Unfollow' : 'Follow'}
                    </button>
                }
            </div>
<span>
    <div>{u.name}</div>
    <div>{u.status}</div>
</span>
        </span>
                    </div>)}
            </div>
        </div>
    )
};

export default Users