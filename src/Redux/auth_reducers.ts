
import {authApi} from "../components/api/api";
import {Dispatch} from "react";
import {createSlice} from "@reduxjs/toolkit";


export type AuthReducersType = SetUserDataType

type SetUserDataType = {
    type: string
    payload: userDataType
}

type userDataType = {
    userId: number | null,
    email: string  | null,
    login: string | null
    isAuth: boolean
}

/*let initialState: userDataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: SetUserDataType) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                ...action.data,
                /!*isAuth: true*!/
            }
        }
        default:
            return state

    }
}*/

const todosSlice = createSlice({
    name: 'auth',
    initialState: {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    } as userDataType,
    reducers: {
        SetUserData(state: userDataType, action){
            return {
                ...state,
                ...action.payload,
            }
        }
    }
    })

export  const {SetUserData} = todosSlice.actions
export default todosSlice.reducer

/*export const SetUserData: (userId: number | null,
                           email: string | null,
                           login: string | null,
                           isAuth: boolean) => SetUserDataType =
    (userId,
     email,
     login,
     isAuth) => ({
        type: 'SET_USER_DATA', data:{userId, email, login, isAuth}
     })*/

export const loginAuthThunkCreator = () => {
    return (dispatch: Dispatch<any>) => {
        authApi.loginAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(SetUserData({userId: data.userId, email: data.email, login: data.login, isAuth: true}))
                }
            })
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {
        authApi.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(loginAuthThunkCreator())
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch: Dispatch<any>) => {
        authApi.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(SetUserData({userId: null, email: null, login: null, isAuth: false}))
                }
            })
    }
}


/*
export default authReducer*/
