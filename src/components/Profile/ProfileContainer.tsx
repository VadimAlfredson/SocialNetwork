import React, {FC} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    putStatusThunkCreator,
    setUserProfile,
    userProfileThunkCreator,
    savePhotoTC,
} from "../../Redux/profile_reducer";
import {AddStateType} from "../../Redux/reduxStore";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {compose} from "redux";
import {withAuthNavigate} from "../hoc/witAuthNavigate";
import {getFollowingInProgress} from "../../Redux/users_selectors";
import {onFollowChangeThunkCreator} from "../../Redux/users_reducers";

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
    }

    componentDidMount(): void {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if (this.props.router.params.userId != prevProps.router.params.userId) {this.refreshProfile()}
    }

    /*onFollowChange = (userId: number, follow: boolean) => {
        this.props.onFollowChangeThunkCreator(userId, follow)
    }*/

    render(): React.ReactNode {
        return <Profile {...this.props}
                        isOwner={!!this.props.router.params.userId}
                        profile={this.props.profile} status={this.props.status}
                        putStatusThunkCreator={this.props.putStatusThunkCreator}
                        savePhotoTC={this.props.savePhotoTC}
                        /*onFollowChange={this.onFollowChange}
                        followingInProgress={this.props.followingInProgress}*/
        />
    }
}

let mapStateToProps = (state: AddStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
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
        onFollowChangeThunkCreator
    }),
    withAuthNavigate
)(ProfileContainer)