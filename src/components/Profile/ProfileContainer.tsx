import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    putStatusThunkCreator,
    setUserProfile,
    userProfileThunkCreator
} from "../../Redux/profile_reducer";
import {AddStateType} from "../../Redux/reduxStore";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {compose} from "redux";
import {withAuthNavigate} from "../hoc/witAuthNavigate";
import set = Reflect.set;

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
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

    componentDidMount(): void {
        let userId: number = this.props.router.params.userId
        if (!userId) {userId = 25265}
        this.props.userProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render(): React.ReactNode {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} putStatusThunkCreator={this.props.putStatusThunkCreator}/>
    }
}

let mapStateToProps = (state: AddStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    withRouter,
    connect (mapStateToProps, {setUserProfile, userProfileThunkCreator, getStatusThunkCreator, putStatusThunkCreator}),
    withAuthNavigate
)(ProfileContainer)