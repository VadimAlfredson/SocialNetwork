import React, {FC, useEffect, useState} from "react";
import {UserType} from "../../Redux/users_reducers";
import s from "../Users/users.module.css"
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";
import {putDialogUserThunkCreator} from "../../Redux/dialogs_reducer";
import FormSearchUsers from "./formSearchUsers";

type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    followingInProgress: Array<number>
    pageSize: number
    currentPage: number
    onUsersChange: (pageNumber: number, pageSize: number, term: string, friend?: boolean) => void
    onFollowChange: (id: number, followed: boolean) => void
    isFetching: boolean
    isAuth: boolean
    onDialogUserChange: (userId: number) => void
    term: string
    friend: boolean
}

let Users: FC<PropsType> = (props) => {
    const [state, setState] = useState(false)
    useEffect(() => {
        state != props.isAuth ? setState(props.isAuth) : console.log('useEffect')
    }, [props.isAuth])
    return (
        <div className={s.usersComponent}>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChange={props.onUsersChange}
                term={props.term}
                friend={props.friend}
            />
            <FormSearchUsers
                onUsersChange={props.onUsersChange}
                pageSize={props.pageSize}
            />
            {props.isFetching ? <Preloader/> :
                <div>
                    {
                        props.users.map((u: UserType) => <div className={s.itemUser} key={u.id}>
                            <div className={s.avatar}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small !== null ? u.photos.small :
                                        'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
                                    } alt={'картинка'}/>
                                </NavLink>
                            </div>
                            <div className={s.followButton}>
                                {props.isAuth ?
                                    <button className={s.buttonStyle}
                                            disabled={props.followingInProgress.includes(u.id)}
                                            onClick={() => (props.onFollowChange(u.id, u.followed))
                                            }>{u.followed ? 'Unfollow' : 'Follow'}
                                    </button> : <NavLink className={s.navLinkToLogin} to={"../login"}>
                                        Register to subscribe
                                    </NavLink>}
                            </div>
                            <div className={s.massageButton}>
                                {props.isAuth &&
                                    <button className={s.buttonStyle}
                                            onClick={() => {
                                                props.onDialogUserChange(u.id)
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