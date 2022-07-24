import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AddStateType} from "../../Redux/reduxStore";
import {DispatchType} from "../../Redux/Types";
import {
    FollowedActionCreator,
    SetCurrentPageAC,
    ToggleIsFetchingAC,
    SetTotalUsersCountAC,
    SetUsersActionCreator,
    UserType
} from "../../Redux/users_reducers";
import * as axios from "axios";
import s from "./users.module.css";
import Preloader from "../common/Preloader/Preloader";


export class UsersContainer extends React.Component {

    componentDidMount(): void {
        this.props.ToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items)
                this.props.setTotalUsersCount(responce.data.totalCount)
                this.props.ToggleIsFetching(false)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber),
            this.props.ToggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(responce => {
                    this.props.setUsers(responce.data.items)
                    this.props.setTotalUsersCount(responce.data.totalCount)
                    this.props.ToggleIsFetching(false)
                })
    }

    render(): React.ReactNode {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return <>
            {this.props.isFitching ? <Preloader/> : null}
        <Users
            users={this.props.users}
            // setUsers={this.props.setUsers}
            // setTotalUsersCount={this.props.setTotalUsersCount}
            // setCurrentPage={this.props.setCurrentPage}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            followed={this.props.followed}
            totalUsersCount={this.props.totalUsersCount}
            onPageChange={this.onPageChange}
        />;
            </>
    }

}

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
        followed: (userId: number) => {
            dispatch(FollowedActionCreator(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(SetUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(SetCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(SetTotalUsersCountAC(totalCount))
        },
        ToggleIsFetching: (isFetching: boolean) => {
            dispatch(ToggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)