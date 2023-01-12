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
    onChangeUsersThunkCreator,
    onFollowChangeThunkCreator, UserType,
} from "../../Redux/users_reducers";
import Preloader from "../common/Preloader/Preloader";
import {withAuthNavigate} from "../hoc/witAuthNavigate";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getFriends, getIsAuth, getIsFetching,
    getPageSize, getTerm,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users_selectors";
import {putDialogUserThunkCreator} from "../../Redux/dialogs_reducer";

type PropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    users: Array<UserType>
    totalUsersCount: number
    isAuth: boolean
    term: string,
    friends: boolean

    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onChangeUsersThunkCreator: (pageNumber: number, pageSize: number, term: string, friend: boolean) => void
    onFollowChangeThunkCreator: (userId: number, follow: boolean) => void
    followingInProgress: Array<number>
    putDialogUserThunkCreator: (userId: number) => {}
}


class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onUsersChange = (pageNumber: number, pageSize: number, term: string, friend: boolean) => {
        this.props.onChangeUsersThunkCreator(pageNumber, pageSize, term, friend)
    }

    onFollowChange = (userId: number, follow: boolean) => {
        this.props.onFollowChangeThunkCreator(userId, follow)
    }

    onDialogUserChange = (userId: number) => {
        this.props.putDialogUserThunkCreator(userId)
    }

    render(): React.ReactNode {
        return <>
            <Users
                isAuth={this.props.isAuth}
                isFetching={this.props.isFetching}
                users={this.props.users}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                onUsersChange={this.onUsersChange}
                onFollowChange={this.onFollowChange}
                followingInProgress={this.props.followingInProgress}
                onDialogUserChange={this.onDialogUserChange}
                term={this.props.term}
                friend={this.props.friends}
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
        isFetching: getIsFetching(state),
        term: getTerm(state),
        friends: getFriends(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {
            followed,
            setUsers,
            setCurrentPage,
            setTotalUsersCount,
            toggleIsFetching,
            toggleIsFollowing,
            getUsersThunkCreator,
            onChangeUsersThunkCreator,
            onFollowChangeThunkCreator,
            putDialogUserThunkCreator,
        })
)(UsersContainer)