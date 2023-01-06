import {AddStateType} from "./reduxStore";

export const getUsers = (state: AddStateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: AddStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AddStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AddStateType) => {
    return state.usersPage.currentPage
}

export const getFollowingInProgress = (state: AddStateType) => {
    return state.usersPage.followingInProgress
}

export const getIsAuth = (state: AddStateType) => {
    return state.auth.isAuth
}

export const getIsFetching = (state: AddStateType) => {
    return state.usersPage.isFetching
}