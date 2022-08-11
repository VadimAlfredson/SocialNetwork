import React, {Dispatch} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AddStateType} from "../../Redux/reduxStore";
import {
    followed,
    setCurrentPage,
    ToggleIsFetching,
    setTotalUsersCount,
    setUsers,
} from "../../Redux/users_reducers";
import Preloader from "../common/Preloader/Preloader";
import {usersApi} from "../api/api";


export class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.ToggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.ToggleIsFetching(false)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.ToggleIsFetching(true)
        usersApi.getUsers2(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.ToggleIsFetching(false)
            })
    }

    onFollowChange = (userId: number, follow: boolean) => {
        if (follow == true) {
            usersApi.unfollowUser(userId)
                .then(data => {
                    if (data.resultCode == 0) {
                        this.props.followed(userId)
                    }
                })
        } else {
            usersApi.followedUser(userId)
                .then(data => {
                    if (data.resultCode == 0) {
                        this.props.followed(userId)
                    }
                })
        }
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
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                followed={this.props.followed}
                totalUsersCount={this.props.totalUsersCount}
                onPageChange={this.onPageChange}
                onFollowChange={this.onFollowChange}
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

/*let mapDispatchToProps = (dispatch: DispatchType) => {
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
*/

export default connect(mapStateToProps,
    {
        followed,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        ToggleIsFetching,
    }
)(UsersContainer)