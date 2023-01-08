import {createSlice} from "@reduxjs/toolkit";
import {Dispatch} from "react";
import {dialogsApi, usersApi} from "../components/api/api";
import {setUserProfile} from "./profile_reducer";
import dialogs from "../components/Dialogs/Dialogs";
/*
{"items":[
{"id":"b324f820-1933-4b4c-9a03-3f8bd3624e26",
"body":"test",
"translatedBody":null,
"addedAt":"2023-01-08T12:17:01.083",
"senderId":25265,
"senderName":"VadimAlfredson",
"recipientId":26623,
"viewed":false}],
"totalCount":1,
"error":null}
*/


export type dialogsPageType = {
    dialogs: dialogsType[],
    messages: messagesType[],
    dialogId: number
}

export type dialogsType = {
    id: number,
    userName: string,
    hasNewMessages: boolean,
    lastDialogActivityDate: string,
    lastUserActivityDate: string,
    "newMessagesCount": number,
    "photos": {
        "small": string | null,
        "large": string | null
    }
}

export type messagesType = {
    id: number,
    message: string,
    icon: string,
}

const todosSlice = createSlice({
        name: 'dialogs',
        initialState: {
            dialogs: [],
            messages: [],
            dialogId: null as number | null
        },
        reducers: {
            setDialogs(state, action) {
                debugger
                return {
                    ...state,
                    dialogs: action.payload
                }
            },
            putDialogUserAC(state, action) {
                debugger
                return {
                    ...state,
                    ...action.payload
                }
            },
            getMessagesUserAC(state, action) {
                return {
                    ...state,
                    messages: action.payload
                }
            },
            postMessagesToUserAC(state, action) {
                return {
                    ...state,
                    ...action.payload
                }
            },
            getUserIdInDialogsAC(state, action) {
                debugger
                return {
                    ...state,
                    dialogId: action.payload
                }
            },
        },

    }
)

export const {setDialogs, putDialogUserAC, getMessagesUserAC, postMessagesToUserAC, getUserIdInDialogsAC} = todosSlice.actions
export default todosSlice.reducer

/*
export const userProfileThunkCreator = (userId: number) => async (dispatch: Dispatch<any>) => {
    let response = await usersApi.userProfile(userId)
    dispatch(setUserProfile(response))
}*/

export const getDialogsThunkCreator = () => async (dispatch: Dispatch<any>) => {
    let response = await dialogsApi.getDialogs()
    dispatch(setDialogs(response))
}

export const putDialogUserThunkCreator = (userId: number) => async (dispatch: Dispatch<any>) => {
    let response = await dialogsApi.putDialogUser(userId)
    dispatch(putDialogUserAC(response))
    getDialogsThunkCreator()
    getMessagesUserThunkCreator(userId)
}

export const getMessagesUserThunkCreator = (userId: number) => async (dispatch: Dispatch<any>) => {
    let response = await dialogsApi.getMessagesUser(userId)
    dispatch(getMessagesUserAC(response.items))
    dispatch(getUserIdInDialogsAC(userId))
}

export const postMessageToUserThunkCreator = (userId: number, bodyMessage: string) => async (dispatch: Dispatch<any>) => {
    let response = await dialogsApi.postMessageToUser(userId, bodyMessage)
    debugger
    dispatch(postMessagesToUserAC(response.body))
    getMessagesUserThunkCreator(userId)
}