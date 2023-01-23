import React, {FC, useEffect} from 'react';
import Subscriptions from "./Subscriptions";
import {connect} from "react-redux";
import {RootState, useAppSelector} from "../../Redux/reduxStore";
import {
    UserType,
} from "../../Redux/users_reducers";
import Preloader from "../common/Preloader/Preloader";
import {getSubscriptionsThunkCreator} from "../../Redux/subscriptions_reducers";

type PropsType = {
    getSubscriptionsThunkCreator: (friend: boolean) => void

}


const SubscriptionsContainer: FC<PropsType> = (props) => {

    const updateSubscriptions = useAppSelector(state => state.subscriptions.updateSubscriptions)
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