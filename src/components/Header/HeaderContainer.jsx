import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {SetUserData} from "../../Redux/auth_reducers";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    let {id, email, login} = responce.data.data;
                    this.props.SetUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps, {SetUserData}) (HeaderContainer)