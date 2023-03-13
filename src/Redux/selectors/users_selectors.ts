import {RootState} from "../reduxStore";

export const users = (state: RootState) => {
    return state.users.users
}
export const pageSize = (state: RootState) => {
    return state.users.pageSize
}
export const totalUsersCount = (state: RootState) => {
    return state.users.totalUsersCount
}
export const currentPage = (state: RootState) => {
    return state.users.currentPage
}
export const isFetching = (state: RootState) => {
    return state.users.isFetching
}
export const followingInProgress = (state: RootState) => {
    return state.users.followingInProgress
}
export const term = (state: RootState) => {
    return state.users.term
}
export const friends = (state: RootState) => {
    return state.users.friends
}
