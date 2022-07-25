import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../Redux/profile_reducer";
import {AddStateType} from "../../Redux/reduxStore";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(responce => {
                this.props.setUserProfile(responce.data)
            })
    }

    render(): React.ReactNode {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state: AddStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer)