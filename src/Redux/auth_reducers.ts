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
    email: string | null,
    login: string | null
    isAuth: boolean
    captchaURL: null | string
    messageError: string | null
}

const todosSlice = createSlice({
    name: 'auth',
    initialState: {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
        captchaURL: null,
        messageError: null
    } as userDataType,
    reducers: {
        SetUserData(state: userDataType, action) {
            return {
                ...state,
                ...action.payload,
            }
        },
        GetCaptchaUrl(state: userDataType, action) {
            return {
                ...state,
                ...action.payload
            }
        },
        GetMessageError(state: userDataType, action) {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const {SetUserData, GetCaptchaUrl, GetMessageError} = todosSlice.actions
export default todosSlice.reducer

export const loginAuthThunkCreator = () => async (dispatch: Dispatch<any>) => {
    let response = await authApi.loginAuth()
    if (response.resultCode === 0) {
        dispatch(SetUserData({
            userId: response.data.id,
            email: response.data.email,
            login: response.data.login,
            isAuth: true
        }))
    } else if (response.resultCode === 10) {
        dispatch(getCaptchaThunkCreator())
        dispatch(GetMessageError({messageError: response.messages[0]}))
    }
    else dispatch(GetMessageError({messageError: response.messages[0]}))
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string | null) => async (dispatch: Dispatch<any>) => {
    let response = await authApi.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(loginAuthThunkCreator())
    } else if (response.resultCode === 10) {
        dispatch(getCaptchaThunkCreator())
        dispatch(GetMessageError({messageError: response.messages[0]}))
    }
    else dispatch(GetMessageError({messageError: response.messages[0]}))
}

export const logoutThunkCreator = () => async (dispatch: Dispatch<any>) => {
    let response = await authApi.logout()
    if (response.resultCode === 0) {
        dispatch(SetUserData({userId: null, email: null, login: null, isAuth: false}))
    }
}

export const getCaptchaThunkCreator = () => async (dispatch: Dispatch<any>) => {
    let response = await authApi.captchaURL()
    dispatch(GetCaptchaUrl({captchaURL: response.url}))
}


/*
export default authReducer*/
