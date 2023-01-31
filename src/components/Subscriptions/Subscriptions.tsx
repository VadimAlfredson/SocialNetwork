import React, {FC} from 'react';
import s from './Subscriptions.module.css';
import {setSearchFriends, UserType} from "../../Redux/users_reducers";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/reduxStore";



let Subscriptions: FC<{}> = (props) => {
    const dispatch = useAppDispatch()

    let onClickSearchSubscriptions = () => {
        return dispatch(setSearchFriends(true))
    }

    const subscriptions = useAppSelector(state => state.subscriptions.subscriptions)
    const totalCountSubscriptions = useAppSelector(state => state.subscriptions.totalCountSubscriptions)


    return <div className={s.friends}>
        <div className={s.h4}>Subscriptions (<NavLink to={"/users?pageNumber=1&friend=true"} onClick={onClickSearchSubscriptions}>{totalCountSubscriptions})</NavLink></div>
            <div className={s.friendsList}>
                {
                    subscriptions.map((u: UserType) => <div key={u.id}>
        <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small !== null ? u.photos.small :
                    'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
                } className={s.iconFriend}/>
                </NavLink>
            </div>
            {/*<span>
    <div className={s.name}>{u.name}</div>
</span>*/}
        </span>
                    </div>)}
            </div>
        </div>
}

export default Subscriptions;