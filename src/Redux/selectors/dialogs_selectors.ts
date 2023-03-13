import {RootState} from "../reduxStore";

export const dialogs = (state: RootState) => {
    return state.dialogs.dialogs
}
export const messages = (state: RootState) => {
    return state.dialogs.messages
}
export const dialogId = (state: RootState) => {
    return state.dialogs.dialogId
}
export const companionIcon = (state: RootState) => {
    return state.dialogs.companionIcon
}
export const companionId = (state: RootState) => {
    return state.dialogs.companionId
}
export const companionName = (state: RootState) => {
    return state.dialogs.companionName
}
export const defaultPhoto = (state: RootState) => {
    return state.dialogs.defaultPhoto
}

