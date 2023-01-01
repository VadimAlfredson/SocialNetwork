import {Dispatch} from "react";
import {usersApi} from "../components/api/api";
import {createSlice, ThunkAction} from "@reduxjs/toolkit";
import {dialogsType, messagesType} from "./dialogs_reducer";
import {AddStateType} from "./reduxStore";
import {ActionType} from "./Types";
import {getSubscriptionsThunkCreator} from "./subscriptions_reducers";

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
/*
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
*/

type usersStateType = {
    users: UserType[]
    following: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}

const todosSlice: any = createSlice({
    name: 'users',
    initialState: {
        users: [],
        following: [],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    } as usersStateType,
    reducers: {
        followed(state, action) {
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
        setUsers(state, action) {
            return {
                ...state,
                users: [...action.payload]
            }
        },
        setCurrentPage(state, action) {
            return {
                ...state,
                currentPage: action.payload
            }
        },
        setTotalUsersCount(state, action) {
            return {
                ...state,
                totalUsersCount: action.payload
            }
        },
        toggleIsFetching(state, action) {
            return {
                ...state,
                isFetching: action.payload
            }
        },
        toggleIsFollowing(state, action) {
            return {
                ...state,
                followingInProgress: action.payload
                    ? [...state.followingInProgress, action.payload]
                    : state.followingInProgress.filter(id => id !== action.payload)
            }
        },
        setFollowing(state, action) {
            return {
                ...state,
                following: [...action.payload]
            }
        },
    }
})

export const {followed, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowing, setFollowing} = todosSlice.actions

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkAction<Promise<void>, AddStateType, unknown, any> => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await usersApi.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(toggleIsFetching(false))
}

/*export const getFollowingThunkCreator = (friend: boolean): ThunkAction<Promise<void>, AddStateType, unknown, any> => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await usersApi.getFollowing(friend)
    dispatch(setFollowing(response.items))
    dispatch(toggleIsFetching(false))
}*/

export const onPageChangeThunkCreator = (pageNumber: number, pageSize: number): ThunkAction<Promise<void>, AddStateType, unknown, any> => async (dispatch: Dispatch<any>) => {
    dispatch(setCurrentPage(pageNumber))
    dispatch(toggleIsFetching(true))
    let response = await usersApi.getUsers2(pageNumber, pageSize)
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(toggleIsFetching(false))
}

export const onFollowChangeThunkCreator = (userId: number, follow: boolean): ThunkAction<Promise<void>, AddStateType, unknown, any> => async (dispatch: Dispatch<any>) => {
    dispatch(toggleIsFollowing(true, userId))
    if (follow == true) {
        let response = await usersApi.unfollowUser(userId)
        if (response.resultCode == 0) {
            dispatch(followed(userId))
        }
        dispatch(toggleIsFollowing(false, userId))
    } else {
        let response = await usersApi.followedUser(userId)
        if (response.resultCode == 0) {
            dispatch(followed(userId))
        }
        dispatch(toggleIsFollowing(false, userId))
    }
    dispatch(getSubscriptionsThunkCreator(true))
}

export default todosSlice.reducer
