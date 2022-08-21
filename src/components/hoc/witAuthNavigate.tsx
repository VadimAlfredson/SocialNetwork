import React from 'react'
import {connect} from "react-redux";
import {Navigate} from 'react-router-dom';
import {AddStateType} from "../../Redux/reduxStore";

let mapStateToProps = (state: AddStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthNavigate = (Component) => {

    class NavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={'/login'}/>
            }
            return <Component {...props} />
        }
    }

    let ConnectWithAuthNavigate = connect(mapStateToProps)(NavigateComponent)

    return ConnectWithAuthNavigate
}