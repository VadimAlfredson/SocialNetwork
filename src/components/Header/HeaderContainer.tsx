import React, {FC} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunkCreator} from "../../Redux/auth_reducers";
import {RootState} from "../../Redux/reduxStore";

type PropsType = {
    isAuth: boolean
    login: string
    photo: string
    logoutThunkCreator: () => void
}

const HeaderContainer: FC<PropsType> = (props) => {
        return <Header
            isAuth={props.isAuth}
            login={props.login}
            photo={props.photo}
            logoutThunkCreator={props.logoutThunkCreator}
        />
}

let mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo: state.auth.ownerPhoto
})

export default connect(mapStateToProps, {logoutThunkCreator})(HeaderContainer)