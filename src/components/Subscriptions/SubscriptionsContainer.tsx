import React, {FC, useEffect} from 'react';
import Subscriptions from "./Subscriptions";
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
import {getSubscriptions, getUpdateSubscriptions, getTotalCountSubscriptions} from "../../Redux/subscriptions_selectors";

type PropsType = {
    updateSubscriptions: boolean
    subscriptions: Array<UserType>
    getSubscriptionsThunkCreator: (friend: boolean) => void
    isAuth: boolean
    totalCountSubscriptions: number
}


const SubscriptionsContainer: FC<PropsType> = (props) => {
    useEffect(() => {
        props.getSubscriptionsThunkCreator(true)
    }, [])
        return <>
            {props.updateSubscriptions ? <Preloader/> :
                <Subscriptions
                    subscriptions={props.subscriptions}
                    totalCountSubscriptions={props.totalCountSubscriptions}
                />
            }
        </>
    }


let mapStateToProps = (state: AddStateType) => {
    return {
        subscriptions: getSubscriptions(state),
        isAuth: getIsAuth(state),
        updateSubscriptions: getUpdateSubscriptions(state),
        totalCountSubscriptions: getTotalCountSubscriptions(state)
    }
}

export default connect(mapStateToProps, {getSubscriptionsThunkCreator,})(SubscriptionsContainer);