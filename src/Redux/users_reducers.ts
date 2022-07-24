export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null;
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean,
}

export type UserActionType = FollowedActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType | SetIsFetchingAC

type FollowedActionType = {
    type: 'FOLLOWED'
    userId: number
}

type SetUsersActionType = {
    type: 'SET_USERS'
    users: UserType[]
}

type SetCurrentPageActionType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}

type SetTotalUsersCountActionType = {
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount: number
}

type SetIsFetchingAC ={
    type: "SET_IS_FETCHING"
    isFetching: boolean
}

type usersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: usersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action: UserActionType) => {
    switch (action.type) {
        case 'FOLLOWED': {
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: !u.followed}
                        }
                        return u
                    }
                )
            }
        }
        case "SET_USERS": {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case "SET_CURRENT_PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case "SET_IS_FETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state

    }
}

export const FollowedActionCreator = (userId: number): UserActionType => ({type: 'FOLLOWED', userId})
export const SetUsersActionCreator = (users: UserType[]): UserActionType => ({type: 'SET_USERS', users})
export const SetCurrentPageAC = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage})
export const SetTotalUsersCountAC = (totalUsersCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount})
export const ToggleIsFetchingAC = (isFetching: boolean) => ({type: "SET_IS_FETCHING", isFetching})

export default usersReducer