import {createSlice} from "@reduxjs/toolkit";
import {Dispatch} from "react";
import {dialogsApi, usersApi} from "../components/api/api";
import {setUserProfile} from "./profile_reducer";

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

export type messageType = {
    id: string,
    body: string,
    translatedBody: null,
    addedAt: string,
    senderId: number,
    senderName: string,
    recipientId: number,
    viewed: boolean
}

export type dialogsPageType = {
    dialogs: dialogsType[],
    messages: messageType[],
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

/*{"items":
[
{"id":"b324f820-1933-4b4c-9a03-3f8bd3624e26",
"body":"test",
"translatedBody":null,
"addedAt":"2023-01-08T12:17:01.083",
"senderId":25265,
"senderName":"VadimAlfredson",
"recipientId":26623,
"viewed":false}
,
{"id":"63027ee4-6bae-49ef-9ab1-af95009d4b53",
"body":"test 3",
"translatedBody":null,
"addedAt":"2023-01-08T14:43:25.127",
"senderId":25265,
"senderName":"VadimAlfredson",
"recipientId":26623,
"viewed":false}
],
"totalCount":2,
"error":null}*/

const todosSlice = createSlice({
        name: 'dialogs',
        initialState: {
            dialogs: [] as dialogsType[],
            messages: [] as messageType[],
            dialogId: null as number | null,
            senderIcon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
            recipientIcon: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'

        },
        reducers: {
            setDialogs(state, action) {
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
                return {
                    ...state,
                    dialogId: action.payload
                }
            },
            setSenderIcon(state, action) {
                return {
                    ...state,
                    senderIcon: action.payload
                }
            },
            setRecipientIcon(state, action) {
                return {
                    ...state,
                    recipientIcon: action.payload
                }
            },
            
        }

    }
)

export const {setDialogs, putDialogUserAC, getMessagesUserAC, postMessagesToUserAC, getUserIdInDialogsAC, setSenderIcon, setRecipientIcon} = todosSlice.actions
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
    dispatch(getDialogsThunkCreator())
    dispatch(getMessagesUserThunkCreator(userId))
}

export const getMessagesUserThunkCreator = (userId: number) => async (dispatch: Dispatch<any>) => {
    let response = await dialogsApi.getMessagesUser(userId)
    dispatch(getMessagesUserAC(response.items))
    dispatch(getUserIdInDialogsAC(userId))
}

export const postMessageToUserThunkCreator = (userId: number, bodyMessage: string) => async (dispatch: Dispatch<any>) => {
    let response = await dialogsApi.postMessageToUser(userId, bodyMessage)
    dispatch(postMessagesToUserAC(response.body))
    dispatch(getMessagesUserThunkCreator(userId))
}

export const getUsersIconInDialogsThunkCreator = (senderId: number, recipientId: number) => async (dispatch: Dispatch<any>) => {
    debugger
    let response1 = await usersApi.userProfile(senderId)
    let response2 = await usersApi.userProfile(recipientId)
    dispatch(setSenderIcon(response1.photos.large))
    dispatch(setRecipientIcon(response2.photos.large))
}