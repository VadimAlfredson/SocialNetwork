import {RootState} from "../reduxStore";

export const userId = (state: RootState) => {
    return state.auth.userId
}
export const email = (state: RootState) => {
    return state.auth.email
}
export const defaultPhoto = (state: RootState) => {
    return state.auth.defaultPhoto
}
export const login = (state: RootState) => {
    return state.auth.login
}
export const isAuth = (state: RootState) => {
    return state.auth.isAuth
}
export const captchaURL = (state: RootState) => {
    return state.auth.captchaURL
}
export const messageError = (state: RootState) => {
    return state.auth.messageError
}
export const ownerPhoto = (state: RootState) => {
    return state.auth.ownerPhoto
}
