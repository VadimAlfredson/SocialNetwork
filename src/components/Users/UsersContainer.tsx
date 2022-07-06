import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AddStateType} from "../../Redux/reduxStore";
import {DispatchType} from "../../Redux/Types";

let mapStateToProps = (state: AddStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        userId: () => {dispatch()},
        users: () => {dispatch()}
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer