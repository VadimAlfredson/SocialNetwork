import React, {FC, useEffect, useState} from "react";
import {UserType} from "../../Redux/users_reducers";
import s from "../Users/users.module.css"
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";
import {putDialogUserThunkCreator} from "../../Redux/dialogs_reducer";
import FormSearchUsers from "./formSearchUsers";
import {useAppSelector} from "../../Redux/reduxStore";

type PropsType = {
    onUsersChange: (pageNumber: number, pageSize: number, term: string, friend?: boolean) => void
    onFollowChange: (id: number, followed: boolean) => void
    onDialogUserChange: (userId: number) => void
}

let Users: FC<PropsType> = (props) => {
    const users = useAppSelector(state => state.usersPage.users)
    const pageSize =  useAppSelector(state => state.usersPage.pageSize)
    const followingInProgress = useAppSelector(state => state.usersPage.followingInProgress)
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const isFetching = useAppSelector(state => state.usersPage.isFetching)
    const [state, setState] = useState(false)
    useEffect(() => {
        state != isAuth ? setState(isAuth) : console.log('useEffect')
    }, [isAuth])
    return (
        <div className={s.usersComponent}>
            <Paginator
                pageSize={pageSize}
                onPageChange={props.onUsersChange}
            />
            <FormSearchUsers
                onUsersChange={props.onUsersChange}
                pageSize={pageSize}
            />
            {isFetching ? <Preloader/> :
                <div>
                    {
                        users.map((u: UserType) => <div className={s.itemUser} key={u.id}>
                            <div className={s.avatar}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small !== null ? u.photos.small :
                                        'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
                                    } alt={'картинка'}/>
                                </NavLink>
                            </div>
                            <div className={s.followButton}>
                                {isAuth ?
                                    <button className={s.buttonStyle}
                                            disabled={followingInProgress.includes(u.id)}
                                            onClick={() => (props.onFollowChange(u.id, u.followed))
                                            }>{u.followed ? 'Unfollow' : 'Follow'}
                                    </button> : <NavLink className={s.navLinkToLogin} to={"../login"}>
                                        Register to subscribe
                                    </NavLink>}
                            </div>
                            <div className={s.massageButton}>
                                {isAuth &&
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