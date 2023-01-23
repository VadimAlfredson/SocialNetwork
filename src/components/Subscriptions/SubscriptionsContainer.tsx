import React, {FC, useEffect} from 'react';
import Subscriptions from "./Subscriptions";
import {connect} from "react-redux";
import {RootState, useAppSelector} from "../../Redux/reduxStore";
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
    /*subscriptions: getSubscriptions(state),
        isAuth: getIsAuth(state),
        updateSubscriptions: getUpdateSubscriptions(state),
        totalCountSubscriptions: getTotalCountSubscriptions(state)*/

    const updateSubscriptions = useAppSelector(state => state.subscriptionsPage.updateSubscriptions)
    useEffect(() => {
        props.getSubscriptionsThunkCreator(true)
    }, [])
        return <>
            {updateSubscriptions ? <Preloader/> :
                <Subscriptions
                />
            }
        </>
    }


let mapStateToProps = (state: RootState) => {
    return {
    }
}

export default connect(mapStateToProps, {getSubscriptionsThunkCreator,})(SubscriptionsContainer);