import {Dispatch} from "react";


export type AuthReducersType = SetUserDataType

type SetUserDataType = {
    type: 'SET_USER_DATA'
    data: userDataType
}

type userDataType = {
    userId: number | null,
    email: string  | null,
    login: string | null
    isAuth: boolean
}

let initialState: userDataType = {
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
                isAuth: true
            }
        }
        default:
            return state

    }
}

export const SetUserData = (userId: number, email: string, login: string, isAuth: boolean): SetUserDataType => ({type: 'SET_USER_DATA', data:{userId, email, login, isAuth}})


export default authReducer