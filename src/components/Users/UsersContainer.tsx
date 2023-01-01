import React from "react";
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
    onFollowChangeThunkCreator, UserType,
} from "../../Redux/users_reducers";
import Preloader from "../common/Preloader/Preloader";
import {withAuthNavigate} from "../hoc/witAuthNavigate";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsAuth, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users_selectors";

type PropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    users: Array<UserType>
    totalUsersCount: number

    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onPageChangeThunkCreator: (pageNumber: number, pageSize: number) => void
    onFollowChangeThunkCreator: (userId: number, follow: boolean) => void
    followingInProgress: Array<number>
}


class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.onPageChangeThunkCreator(pageNumber, this.props.pageSize)
    }

    onFollowChange = (userId: number, follow: boolean) => {
        this.props.onFollowChangeThunkCreator(userId, follow)
    }

    render(): React.ReactNode {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                onPageChange={this.onPageChange}
                onFollowChange={this.onFollowChange}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}

let mapStateToProps = (state: AddStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    withAuthNavigate,
    connect(mapStateToProps,
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
        })
)(UsersContainer)