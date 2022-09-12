import {Dispatch} from "react";
import {usersApi} from "../components/api/api";
import { createSlice } from "@reduxjs/toolkit";
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

type usersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}

let initialState: usersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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

const todosSlice = createSlice({
    name: 'users',
    initialState: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Danil'},
            {id: 3, name: 'Rail'},
            {id: 4, name: 'Artur'},
            {id: 5, name: 'Nikita'}
        ] as Array<dialogsType>,

        messages: [
            {
                id: 1,
                message: 'Hi',
                icon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
            },
            {
                id: 2,
                message: 'How are you?',
                icon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
            },
            {
                id: 3,
                message: 'message',
                icon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
            },
            {
                id: 4,
                message: 'message',
                icon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
            },
        ] as Array<messagesType>,
        addNewMessage: '' as string,
    },
    reducers: {
        followed(state, action) {
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
        },
        setUsers(state, action){
            return {
                ...state,
                users: [...action.users]
            }
        },
        setCurrentPage(state, action){
            return {
                ...state,
                currentPage: action.currentPage
            }
        },
        setTotalUsersCount(state, action){
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        },
        toggleIsFetching(state, action){
            return {
                ...state,
                isFetching: action.isFetching
            }
        },
        toggleIsFollowing(state, action){
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
    }
})

export const { followed, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowing } = todosSlice.actions

export const followed: Dispatch<number> = (userId: number)=> ({type: 'FOLLOWED', userId})
export const setUsers: Dispatch<UserType[]> = (users: UserType[]) => ({type: 'SET_USERS', users})
export const setCurrentPage: Dispatch<number> = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage})
export const setTotalUsersCount: Dispatch<number> = (totalUsersCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount})
export const toggleIsFetching: Dispatch<boolean> = (isFetching: boolean) => ({type: "SET_IS_FETCHING", isFetching})
export const toggleIsFollowing = (isFetching:boolean, userId: number) => ({type: "FOLLOWING_IN_PROGRESS", isFetching, userId})

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

export default usersReducer