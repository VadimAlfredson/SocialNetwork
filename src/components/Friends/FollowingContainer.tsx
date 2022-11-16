import React, {FC, useEffect} from 'react';
import Following from "./Following";
import {connect} from "react-redux";
import {AddStateType} from "../../Redux/reduxStore";
import {
    UserType,
    getFollowingThunkCreator,
} from "../../Redux/users_reducers";
import Preloader from "../common/Preloader/Preloader";
import {
    getFollowing,
    getIsAuth, getIsFetching,
} from "../../Redux/users_selectors";

type PropsType = {
    isFetching: boolean
    following: Array<UserType>
    getFollowingThunkCreator: (friend: boolean) => void
    isAuth: boolean
}


const FollowingContainer: FC<PropsType> = (props) => {
    useEffect(() => {
        props.getFollowingThunkCreator(true)
    }, [])
        return <>
            {props.isFetching ? <Preloader/> : null}
            <Following
                following={props.following}
            />;
        </>
    }


let mapStateToProps = (state: AddStateType) => {
    return {
        following: getFollowing(state),
        isAuth: getIsAuth(state),
        isFetching: getIsFetching(state)
    }
}

export default connect(mapStateToProps, {getFollowingThunkCreator,})(FollowingContainer);