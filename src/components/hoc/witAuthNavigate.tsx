import React, {FC} from 'react'
import {connect} from "react-redux";
import {Navigate} from 'react-router-dom';
import {RootState} from "../../Redux/reduxStore";

let mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthNavigate = (Component: FC<any>) => {

    class NavigateComponent extends React.Component<{isAuth: boolean}> {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={'/login'}/>
            }
            return <Component {...this.props} />
        }
    }

    let ConnectWithAuthNavigate = connect(mapStateToProps)(NavigateComponent)

    return ConnectWithAuthNavigate
}
