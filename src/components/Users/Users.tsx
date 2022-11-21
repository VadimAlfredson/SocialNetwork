import React, {FC} from "react";
import {UserType} from "../../Redux/users_reducers";
import s from "../Users/users.module.css"
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    followingInProgress: Array<number>
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    onFollowChange: (id: number, followed: boolean) => void
}

let Users: FC<PropsType> = (props) => {
    return (
        <div>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChange={props.onPageChange}
            />
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
                        disabled={props.followingInProgress.includes(u.id)}
                        onClick={() => (props.onFollowChange(u.id, u.followed))
                        }>{u.followed ? 'Unfollow' : 'Follow'}
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
    )
}

export default Users