
import {authApi} from "../components/api/api";


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
                /*isAuth: true*/
            }
        }
        default:
            return state

    }
}

export const SetUserData: (userId: number | null,
                           email: string | null,
                           login: string | null,
                           isAuth: boolean) => SetUserDataType =
    (userId,
     email,
     login,
     isAuth) => ({
        type: 'SET_USER_DATA', data:{userId, email, login, isAuth}
     })

export const loginAuthThunkCreator = () => {
    return (dispatch) => {
        authApi.loginAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(SetUserData(id, email, login, true))
                }
            })
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(loginAuthThunkCreator())
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authApi.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(SetUserData(null, null, null, false))
                }
            })
    }
}


export default authReducer