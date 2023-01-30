import React, {FC, useEffect, useState} from "react";
import {onChangeUsersThunkCreator, onFollowChangeThunkCreator, UserType} from "../../Redux/users_reducers";
import s from "../Users/users.module.css"
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";
import {putDialogUserThunkCreator} from "../../Redux/dialogs_reducer";
import FormSearchUsers from "./formSearchUsers";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";

type paramsType = {
    key: string
    value: string
}


let Users: FC = (props) => {
    const users = useAppSelector(state => state.users.users)
    const followingInProgress = useAppSelector(state => state.users.followingInProgress)
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const isFetching = useAppSelector(state => state.users.isFetching)
    const term = useAppSelector(state => state.users.term)
    const friends = useAppSelector(state => state.users.friends)
    const pageSize = useAppSelector(state => state.users.pageSize)
    let [pageNumber, setPageNumber] = useState(1)


    const [state, setState] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    let location = useLocation()


    let onUsersChange = (pageNumber: number, pageSize: number, term: string, friend?: boolean) => {
        /*dispatch(onChangeUsersThunkCreator(pageNumber, pageSize, term, friend))*/
        console.log(navigate)
        navigate({
            pathname: '/users',
            search: term || friend || pageNumber ? "?" +
                (pageNumber ? `pageNumber=${pageNumber}${term || friend ? '&' : ''}` : '') +
                (term ? `term=${term}${friend ? '&' : ''}` : '') +
                (friend === true ? `friend=${friend}` : '')
                : ''
        })
        /*setPageNumber(pageNumber)*/
    }

    let onFollowChange = (userId: number, follow: boolean) => {
        dispatch(onFollowChangeThunkCreator(userId, follow))
    }

    let onDialogUserChange = (userId: number) => {
        dispatch(putDialogUserThunkCreator(userId))
    }

    useEffect(() => {
        navigate({
            pathname: '/users',
            search: term || friends || pageNumber ? "?" +
                (pageNumber ? `pageNumber=${pageNumber}${term || friends ? '&' : ''}` : '') +
                (term ? `term=${term}${friends ? '&' : ''}` : '') +
                (friends === true ? `friend=${friends}` : '')
                : ''
        })
    }, [])

    useEffect(() => {
        let {search} = location
        console.log(location)
        let arr = search.substring(1).split('&').reduce((params: any, param) => {
            let [key, value] = param.split('=');
            console.log(params)
            params[key] = value ? decodeURIComponent(value.replace(/\+/g, '')) : "";
            return params;
        }, {})
        console.log(arr)
        let friendValue = arr.friend === 'true' ? true : undefined
        console.log(friendValue)
        if (pageNumber != +arr.pageNumber ||
            term != arr.term ||
            friends != friendValue) {
            dispatch(onChangeUsersThunkCreator(+arr.pageNumber, pageSize, arr.term || '', friendValue))
        }
    }, [location.search])

    useEffect(() => {
        state != isAuth ? setState(isAuth) : console.log('useEffect')
    }, [isAuth])
    return (
        <div className={s.usersComponent}>
            <Paginator
                onPageChange={onUsersChange}
            />
            <FormSearchUsers
                onUsersChange={onUsersChange}
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
                                            onClick={() => (onFollowChange(u.id, u.followed))
                                            }>{u.followed ? 'Unfollow' : 'Follow'}
                                    </button> : <NavLink className={s.navLinkToLogin} to={"../login"}>
                                        Register to subscribe
                                    </NavLink>}
                            </div>
                            <div className={s.massageButton}>
                                {isAuth &&
                                    <NavLink to={`/dialogs/${u.id}`}>
                                        <button className={s.buttonStyle}
                                                onClick={() => {
                                                    onDialogUserChange(u.id)
                                                }}>Message
                                        </button>
                                    </NavLink>}
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