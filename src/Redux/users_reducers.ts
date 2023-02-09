import {Dispatch} from "react";
import {usersApi} from "../DAL/api/api";
import {createSlice, PayloadAction, ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "./reduxStore";
import {getSubscriptionsThunkCreator} from "./subscriptions_reducers";
import dialogs from "../components/Dialogs/Dialogs";

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

type usersStateType = {
    users: UserType[]
    following: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
    term: string
    friends: boolean
}

const todosSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        following: [],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
        term: '',
        friends: false
    } as usersStateType,
    reducers: {
        followed(state: usersStateType, action: PayloadAction<any>) {
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
        setUsers(state: usersStateType, action: PayloadAction<UserType[]>) {
            return {
                ...state,
                users: [...action.payload]
            }
        },
        setCurrentPage(state: usersStateType, action: PayloadAction<number>) {
            return {
                ...state,
                currentPage: action.payload
            }
        },
        setTotalUsersCount(state: usersStateType, action: PayloadAction<number>) {
            return {
                ...state,
                totalUsersCount: action.payload
            }
        },
        toggleIsFetching(state: usersStateType, action: PayloadAction<boolean>) {
            return {
                ...state,
                isFetching: action.payload
            }
        },
        toggleIsFollowing(state: usersStateType, action: PayloadAction<boolean>) {
            return {
                ...state,
                followingInProgress: action.payload
                    ? [...state.followingInProgress, action.payload]
                    : state.followingInProgress.filter(id => id !== action.payload)
            }
        },
        setFollowing(state: usersStateType, action: PayloadAction<UserType[]>) {
            return {
                ...state,
                following: [...action.payload]
            }
        },
        setSearchTerm(state: usersStateType, action: PayloadAction<string>) {
            return {
                ...state,
            term: action.payload
            }
        },
        setSearchFriends(state: usersStateType, action: PayloadAction<boolean>) {
            return {
                ...state,
                friends: action.payload
            }
        }
    }
})

export const {followed, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowing, setFollowing, setSearchTerm, setSearchFriends} = todosSlice.actions

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkAction<Promise<void>, RootState, unknown, any> => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setSearchTerm(''))
    dispatch(setSearchFriends(false))
    let response = await usersApi.getUsers(currentPage, pageSize, '', false)
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(toggleIsFetching(false))
}

export const onChangeUsersThunkCreator = (pageNumber: number, pageSize: number, term: string, friend?: boolean): ThunkAction<Promise<void>, RootState, unknown, any> => async (dispatch: Dispatch<any>) => {
    dispatch(setCurrentPage(pageNumber ? pageNumber : 1))
    dispatch(toggleIsFetching(true))
    if (friend === true) {
    let response = await usersApi.getUsers(pageNumber, pageSize, term, friend)
    if (response.error == null){
        dispatch(setSearchTerm(term))
        dispatch(setSearchFriends(friend))
        console.log(response.totalCount)
    }
    else{
        console.log(response.error)
    }
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    }
    else {
        let response = await usersApi.getUsers(pageNumber, pageSize, term)
        if (response.error == null){
            dispatch(setSearchTerm(term))
            console.log(response.totalCount)
            dispatch(setSearchFriends(false))
        }
        else{
            console.log(response.error)
        }
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
    }
        dispatch(toggleIsFetching(false))
}

export const onFollowChangeThunkCreator = (userId: number, follow: boolean): ThunkAction<Promise<void>, RootState, unknown, any> => async (dispatch: Dispatch<any>) => {
    dispatch(toggleIsFollowing(true))
    if (follow) {
        let response = await usersApi.unfollowUser(userId)
        if (response.resultCode === 0) {
            dispatch(followed(userId))
        }
        dispatch(toggleIsFollowing(false))
    } else {
        let response = await usersApi.followedUser(userId)
        if (response.resultCode === 0) {
            dispatch(followed(userId))
        }
        dispatch(toggleIsFollowing(false))
    }
    dispatch(getSubscriptionsThunkCreator(true))
}

export default todosSlice.reducer
