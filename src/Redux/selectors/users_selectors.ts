import {RootState} from "../reduxStore";

export const getUsers = (state: RootState) => {
    return state.users.users
}
export const getPageSize = (state: RootState) => {
    return state.users.pageSize
}
export const getTotalUsersCount = (state: RootState) => {
    return state.users.totalUsersCount
}
export const getCurrentPage = (state: RootState) => {
    return state.users.currentPage
}
export const isFetchingSelector = (state: RootState) => {
    return state.users.isFetching
}
export const getFollowingInProgress = (state: RootState) => {
    return state.users.followingInProgress
}
export const getTerm = (state: RootState) => {
    return state.users.term
}
export const getFriends = (state: RootState) => {
    return state.users.friends
}
