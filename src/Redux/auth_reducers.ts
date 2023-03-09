import {authApi, usersApi} from "../DAL/api/api";
import {Dispatch} from "react";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";




type SetUserDataType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
}

type userDataType = {
    userId: number,
    email: string,
    login: string
    isAuth: boolean
    captchaURL: string
    messageError: string
    ownerPhoto: string
    defaultPhoto: string
}

const todosSlice = createSlice({
    name: 'auth',
    initialState: {
        userId: 0,
        email: '',
        login: '',
        isAuth: false,
        captchaURL: '',
        messageError: '',
        ownerPhoto: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
        defaultPhoto: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
    } as userDataType,
    reducers: {
        SetUserData(state: userDataType, action: PayloadAction<SetUserDataType>) {
            return {
                ...state,
                ...action.payload,
            }
        },
        GetCaptchaUrl(state: userDataType, action: PayloadAction<string>) {
            return {
                ...state,
                captchaURL: action.payload
            }
        },
        GetMessageError(state: userDataType, action: PayloadAction<string>) {
            return {
                ...state,
                messageError: action.payload
            }
        },
        setOwnerIconAC(state: userDataType, action: PayloadAction<string>) {
            return {
                ...state,
                ownerPhoto: action.payload
            }
        },
    }
})

export const {SetUserData, GetCaptchaUrl, GetMessageError, setOwnerIconAC} = todosSlice.actions
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
        dispatch(getOwnerIconThunkCreator(response.data.id))
    } else if (response.resultCode === 10) {
        dispatch(getCaptchaThunkCreator())
        console.log(response.messages[0])
        dispatch(GetMessageError(response.messages[0]))
    }
    else dispatch(GetMessageError(response.messages[0]))
    console.log(response.messages[0])
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: Dispatch<any>) => {
    let response = await authApi.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(loginAuthThunkCreator())
    } else if (response.resultCode === 10) {
        dispatch(getCaptchaThunkCreator())
        console.log(response.messages[0])
        dispatch(GetMessageError(response.messages[0]))
    }
    else dispatch(GetMessageError(response.messages[0]))
    console.log(response.messages[0])
}

export const logoutThunkCreator = () => async (dispatch: Dispatch<any>) => {
    let response = await authApi.logout()
    if (response.resultCode === 0) {
        dispatch(SetUserData({userId: 0, email: '', login: '', isAuth: false}))
    }
}

export const getCaptchaThunkCreator = () => async (dispatch: Dispatch<any>) => {
    let response = await authApi.captchaURL()
    dispatch(GetCaptchaUrl(response.url))
}

export const getOwnerIconThunkCreator = (id: number) => async (dispatch: Dispatch<any>) => {
    let response = await usersApi.userProfile(id)
    dispatch(setOwnerIconAC(response.photos.large))
}

/*
export default authReducer*/
