import {Dispatch} from "react";
import {usersApi} from "../components/api/api";
import {createSlice} from "@reduxjs/toolkit";
import {dialogsType, messagesType} from "./dialogs_reducer";

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

export type UserActionType = FollowedActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType | SetIsFetchingAC | SetIsFollowingActionType

type SetIsFollowingActionType = {
    type: 'FOLLOWING_IN_PROGRESS'
    isFetching: boolean
    userId: number
}

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
    followingInProgress: []
}

/*let initialState: usersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}*/

/*const usersReducer = (state = initialState, action: UserActionType) => {
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
        case "FOLLOWING_IN_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state

    }
}

export const followed: Dispatch<number> = (userId: number): UserActionType => ({type: 'FOLLOWED', userId})
export const setUsers: Dispatch<UserType[]> = (users: UserType[]): UserActionType => ({type: 'SET_USERS', users})
export const setCurrentPage: Dispatch<number> = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage})
export const setTotalUsersCount: Dispatch<number> = (totalUsersCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount})
export const toggleIsFetching: Dispatch<boolean> = (isFetching: boolean) => ({type: "SET_IS_FETCHING", isFetching})
export const toggleIsFollowing = (isFetching:boolean, userId: number) => ({type: "FOLLOWING_IN_PROGRESS", isFetching, userId})*/

const todosSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    } as usersStateType,
    reducers: {
        followed(state, action) {
            debugger
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.payload) {
                            return {...u, followed: !u.followed}
                        }
                        return u
                    }
                )
            }
        },
        setUsers(state, action){
            debugger
            return {
                ...state,
                users: [...action.payload]
            }
        },
        setCurrentPage(state, action){
            debugger
            return {
                ...state,
                currentPage: action.payload
            }
        },
        setTotalUsersCount(state, action){
            debugger
            return {
                ...state,
                totalUsersCount: action.payload
            }
        },
        toggleIsFetching(state, action){
            debugger
            return {
                ...state,
                isFetching: action.payload
            }
        },
        toggleIsFollowing(state, action){
            debugger
            return {
                ...state,
                followingInProgress: action.payload
                    ? [...state.followingInProgress, action.payload]
                    : state.followingInProgress.filter(id => id !== action.payload)
            }
        }
    }
})

export const { followed, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowing } = todosSlice.actions

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(toggleIsFetching(false))
            })
    }
}

export const onPageChangeThunkCreator = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(toggleIsFetching(true))
        usersApi.getUsers2(pageNumber, pageSize)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}

export const onFollowChangeThunkCreator = (userId, follow) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        if (follow == true) {
            usersApi.unfollowUser(userId)
                .then(data => {
                    if (data.resultCode == 0) {
                        dispatch(followed(userId))
                    }
                    dispatch(toggleIsFollowing(false, userId))
                })
        } else {
            usersApi.followedUser(userId)
                .then(data => {
                    if (data.resultCode == 0) {
                        dispatch(followed(userId))
                    }
                    dispatch(toggleIsFollowing(false, userId))
                })
        }
    }
}

/*
export default usersReducer*/
export default todosSlice.reducer
