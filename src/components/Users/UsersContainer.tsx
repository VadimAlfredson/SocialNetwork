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
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";


export class UsersContainer extends React.Component {

    componentDidMount(): void {
        this.props.ToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(responce => {
                this.props.setUsers(responce.data.items)
                this.props.setTotalUsersCount(responce.data.totalCount)
                this.props.ToggleIsFetching(false)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber),
            this.props.ToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(responce => {
                this.props.setUsers(responce.data.items)
                this.props.setTotalUsersCount(responce.data.totalCount)
                this.props.ToggleIsFetching(false)
            })
    }

    onFollowChange = (userId) => {
        if (this.props.users.followed === true) {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "тут ключ, когда зарегестрируешься"
                }
            })
                .then(responce => {
                    if (this.props.responce.data.resultCode == 0) {
                        followed(userId)
                    }
                })
        } else {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
                withCredentials: true,
                headers: {
                    "API-KEY": "тут ключ, когда зарегестрируешься"
                }
            })
                .then(responce => {
                    if (this.props.responce.data.resultCode == 0) {
                        followed(userId)
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