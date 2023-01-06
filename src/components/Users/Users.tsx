import React, {FC} from "react";
import {UserType} from "../../Redux/users_reducers";
import s from "../Users/users.module.css"
import {Navigate, NavLink} from "react-router-dom";
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
    isAuth: boolean
}

let Users: FC<PropsType> = (props) => {
    return (
        <div className={s.usersComponent}>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChange={props.onPageChange}
            />
            {props.isFetching ? <Preloader/> :
                <div>
                    {
                        props.users.map((u: UserType) => <div className={s.itemUser} key={u.id}>
                            <div className={s.avatar}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small !== null ? u.photos.small :
                                        'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
                                    }/>
                                </NavLink>
                            </div>
                            <div className={s.followButton}>
                                {props.isAuth &&
                                    <button className={s.buttonStyle}
                                            disabled={props.followingInProgress.includes(u.id)}
                                            onClick={() => (props.onFollowChange(u.id, u.followed))
                                            }>{u.followed ? 'Unfollow' : 'Follow'}
                                    </button>}
                                {!props.isAuth &&
                                    <NavLink className={s.navLinkToLogin} to={"../login"}>
                                        Register to subscribe
                                    </NavLink>
                                }
                            </div>
                            <div className={s.massageButton}>
                                {props.isAuth &&
                                    <button className={s.buttonStyle}
                                            onClick={() => {
                                            }}>Message
                                    </button>}
                            </div>

                            <div className={s.infoUser}>
                                <div className={s.nameUser}>{u.name}</div>
                                <div className={s.statusUser}>{u.status}</div>
                            </div>
                        </div>)}
                </div>}
        </div>
    )
}

export default Users