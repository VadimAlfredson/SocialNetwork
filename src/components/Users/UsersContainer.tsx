import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AddStateType} from "../../Redux/reduxStore";
import {DispatchType} from "../../Redux/Types";
import {
    FollowedActionCreator,
    SetCurrentPageAC,
    SetTotalUsersCountAC,
    SetUsersActionCreator,
    UserType
} from "../../Redux/users_reducers";

let mapStateToProps = (state: AddStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        followed: (userId: number) => {dispatch(FollowedActionCreator(userId))},
        setUsers: (users: UserType[]) => {dispatch(SetUsersActionCreator(users))},
        setCurrentPage: (pageNumber: number) => {dispatch(SetCurrentPageAC(pageNumber))},
        setTotalUsersCount: (totalCount: number) => {dispatch(SetTotalUsersCountAC(totalCount))},
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer