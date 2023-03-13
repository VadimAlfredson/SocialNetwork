import {RootState} from "../reduxStore";

export const getOwnerId = (state: RootState) => {
    return state.auth.userId
}
export const getEmail = (state: RootState) => {
    return state.auth.email
}
export const getDefaultPhoto = (state: RootState) => {
    return state.auth.defaultPhoto
}
export const getLogin = (state: RootState) => {
    return state.auth.login
}
export const isAuthSelector = (state: RootState) => {
    return state.auth.isAuth
}
export const getCaptchaURL = (state: RootState) => {
    return state.auth.captchaURL
}
export const getMessageError = (state: RootState) => {
    return state.auth.messageError
}
export const getOwnerPhoto = (state: RootState) => {
    return state.auth.ownerPhoto
}
