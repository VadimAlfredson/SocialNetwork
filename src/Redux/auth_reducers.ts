
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
                isAuth: true
            }
        }
        default:
            return state

    }
}

export const SetUserData = (userId: number, email: string, login: string, isAuth: boolean): SetUserDataType => ({type: 'SET_USER_DATA', data:{userId, email, login, isAuth}})

export const loginAuthThunkCreator = () => {
    return (dispatch) => {
        authApi.loginAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login, isAuth} = data.data;
                    dispatch(SetUserData(id, email, login, isAuth))
                }
            })
    }
}


export default authReducer