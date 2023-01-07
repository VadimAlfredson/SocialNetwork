import React, {FC} from 'react';
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
import {AddStateType} from "../../Redux/reduxStore";
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

class ProfileContainer extends React.Component<any, any> {

    refreshProfile(): void {
        let userId: number = this.props.router.params.userId
        if (!userId) {userId = this.props.authorizedUserId}
        this.props.userProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
        this.props.getFollowThunkCreator(userId)
    }

    componentDidMount(): void {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if (this.props.router.params.userId != prevProps.router.params.userId ||
            this.props.router.params.follow != prevProps.router.params.follow) {this.refreshProfile()}
    }

    onFollowProfileChange = (userId: number, follow: boolean) => {
        this.props.onFollowProfileChangeThunkCreator(userId, follow)
        this.props.getSubscriptionsThunkCreator(true)
    }

    onPutDialogOnProfileChange = (userId: number) => {
        this.props.putDialogUserThunkCreator(userId)
    }


    render(): React.ReactNode {
        return <Profile {...this.props}
                        isOwner={!!this.props.router.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        putStatusThunkCreator={this.props.putStatusThunkCreator}
                        savePhotoTC={this.props.savePhotoTC}
                        follow={this.props.follow}
                        onFollowProfileChange={this.onFollowProfileChange}
                        onPutDialogOnProfileChange={this.onPutDialogOnProfileChange}
        />
    }
}

let mapStateToProps = (state: AddStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        follow: state.profilePage.follow,
        /*followingInProgress: getFollowingInProgress(state),*/
    }
}

export default compose(
    withRouter,
    connect (mapStateToProps, {setUserProfile,
        userProfileThunkCreator,
        getStatusThunkCreator,
        putStatusThunkCreator,
        savePhotoTC,
        getFollowThunkCreator,
        onFollowProfileChangeThunkCreator,
        getSubscriptionsThunkCreator,
        putDialogUserThunkCreator
    }),
    withAuthNavigate
)(ProfileContainer)