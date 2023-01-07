import { createSlice } from "@reduxjs/toolkit";
import {Dispatch} from "react";
import {dialogsApi, usersApi} from "../components/api/api";
import {setUserProfile} from "./profile_reducer";
import dialogs from "../components/Dialogs/Dialogs";

export type dialogsPageType = {
    dialogs: dialogsType[],
    messages: messagesType[],
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
        }
        },
    }
)

export const {setDialogs, putDialogUserAC, getMessagesUserAC} = todosSlice.actions
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
}