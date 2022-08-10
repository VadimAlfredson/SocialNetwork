import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../Redux/profile_reducer";
import {AddStateType} from "../../Redux/reduxStore";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

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
        let userId = this.props.router.params.userId
        if (!userId) {userId = 2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(responce => {
                this.props.setUserProfile(responce.data)
            })
    }

    render(): React.ReactNode {
        debugger
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state: AddStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect (mapStateToProps, {setUserProfile}) (withRouter(ProfileContainer))