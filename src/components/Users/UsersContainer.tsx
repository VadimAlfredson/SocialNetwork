import React, {Dispatch} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AddStateType} from "../../Redux/reduxStore";
import {
    followed,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleIsFollowing,
    getUsersThunkCreator,
    onPageChangeThunkCreator,
    onFollowChangeThunkCreator,
} from "../../Redux/users_reducers";
import Preloader from "../common/Preloader/Preloader";
import {withAuthNavigate} from "../hoc/witAuthNavigate";
import {Navigate} from "react-router-dom"


export class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //         this.props.toggleIsFetching(false)
        //     })
    }

    onPageChange = (pageNumber) => {
        this.props.onPageChangeThunkCreator(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        // usersApi.getUsers2(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //         this.props.toggleIsFetching(false)
        //     })
    }

    onFollowChange = (userId: number, follow: boolean) => {
        this.props.onFollowChangeThunkCreator(userId, follow)
        /*this.props.toggleIsFollowing(true, userId)
        if (follow == true) {
            usersApi.unfollowUser(userId)
                .then(data => {
                    if (data.resultCode == 0) {
                        this.props.followed(userId)
                    }
                    this.props.toggleIsFollowing(false, userId)
                })
        } else {
            usersApi.followedUser(userId)
                .then(data => {
                    if (data.resultCode == 0) {
                        this.props.followed(userId)
                    }
                    this.props.toggleIsFollowing(false, userId)
                })
        }*/
    }

    render(): React.ReactNode {
        if (!this.props.auth) {return <Navigate to={'/login'}/>}
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
                toggleIsFollowing={this.props.toggleIsFollowing}
                followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
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

export default withAuthNavigate(connect(mapStateToProps,
    {
        followed,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleIsFollowing,
        getUsersThunkCreator,
        onPageChangeThunkCreator,
        onFollowChangeThunkCreator,
    }
)(UsersContainer))