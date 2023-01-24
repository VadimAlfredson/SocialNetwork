import React, {FC, useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    putStatusThunkCreator,
    setUserProfile,
    userProfileThunkCreator,
    savePhotoTC,
    getFollowThunkCreator,
    onFollowProfileChangeThunkCreator,
} from "../../Redux/profile_reducer";
import {RootState, useAppDispatch, useAppSelector} from "../../Redux/reduxStore";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {compose} from "redux";
import {withAuthNavigate} from "../hoc/witAuthNavigate";
import {getSubscriptionsThunkCreator} from "../../Redux/subscriptions_reducers";
import {putDialogUserThunkCreator} from "../../Redux/dialogs_reducer";

function withRouter(Component: FC) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

type PropsType = {
    router: any
}

const ProfileContainer = (props: PropsType) => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector(state => state.profile.profile)
    const status = useAppSelector(state => state.profile.status)
    const follow = useAppSelector(state => state.profile.follow)
    const authorizedUserId = useAppSelector((state => state.auth.userId))


    useEffect(() => {
        let userId: number = props.router.params.userId
        if (!userId) {userId = authorizedUserId}
        dispatch(userProfileThunkCreator(userId))
        dispatch(getStatusThunkCreator(userId))
        dispatch(getFollowThunkCreator(userId))
    }, [props.router.params.userId])

    useEffect(() => {

    }, [])

    let onFollowProfileChange = (userId: number, follow: boolean) => {
        dispatch(onFollowProfileChangeThunkCreator(userId, follow))
        dispatch(getSubscriptionsThunkCreator(true))
    }

    let onPutDialogOnProfileChange = (userId: number) => {
        dispatch(putDialogUserThunkCreator(userId))
    }

        return <Profile {...props}
                        isOwner={!!props.router.params.userId}
                        profile={profile}
                        status={status}
                        follow={follow}
                        onFollowProfileChange={onFollowProfileChange}
                        onPutDialogOnProfileChange={onPutDialogOnProfileChange}
        />

}

export default compose(
    withRouter,
    withAuthNavigate
)(ProfileContainer)