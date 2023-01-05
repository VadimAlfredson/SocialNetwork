import React, {FC, useEffect} from 'react';
import Following from "./Following";
import {connect} from "react-redux";
import {AddStateType} from "../../Redux/reduxStore";
import {
    UserType,
} from "../../Redux/users_reducers";
import Preloader from "../common/Preloader/Preloader";
import {
    getIsAuth,
} from "../../Redux/users_selectors";
import {getSubscriptionsThunkCreator} from "../../Redux/subscriptions_reducers";
import {getSubscriptions, getUpdateSubscriptions} from "../../Redux/subscriptions_selectors";

type PropsType = {
    updateSubscriptions: boolean
    subscriptions: Array<UserType>
    getSubscriptionsThunkCreator: (friend: boolean) => void
    isAuth: boolean
}


const FollowingContainer: FC<PropsType> = (props) => {
    useEffect(() => {
        props.getSubscriptionsThunkCreator(true)
    }, [])
        return <>
            {props.updateSubscriptions ? <Preloader/> :
                <Following
                    subscriptions={props.subscriptions}
                />
            }
        </>
    }


let mapStateToProps = (state: AddStateType) => {
    return {
        subscriptions: getSubscriptions(state),
        isAuth: getIsAuth(state),
        updateSubscriptions: getUpdateSubscriptions(state)
    }
}

export default connect(mapStateToProps, {getSubscriptionsThunkCreator,})(FollowingContainer);