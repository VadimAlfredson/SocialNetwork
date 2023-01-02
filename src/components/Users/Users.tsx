import React, {FC} from "react";
import {UserType} from "../../Redux/users_reducers";
import s from "../Users/users.module.css"
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";

type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    followingInProgress: Array<number>
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    onFollowChange: (id: number, followed: boolean) => void
    isFetching: boolean
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
            {props.isFetching ? <Preloader/> :
            <div>
            {
                props.users.map((u: UserType) => <div key={u.id}>
        <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small !== null ? u.photos.small :
                    'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
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
            </div>}
        </div>
    )
}

export default Users