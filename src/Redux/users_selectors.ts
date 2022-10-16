export const getUsers = (state) => {
    return state.usersPage.users
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.tototalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

export const getIsAuth = (state) => {
    return state.usersPage.isAuth
}