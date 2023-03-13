import {RootState} from "../reduxStore";

export const getDialogs = (state: RootState) => {
    return state.dialogs.dialogs
}
export const getMessages = (state: RootState) => {
    return state.dialogs.messages
}
export const getDialogId = (state: RootState) => {
    return state.dialogs.dialogId
}
export const getCompanionIcon = (state: RootState) => {
    return state.dialogs.companionIcon
}
export const getCompanionId = (state: RootState) => {
    return state.dialogs.companionId
}
export const getCompanionName = (state: RootState) => {
    return state.dialogs.companionName
}

