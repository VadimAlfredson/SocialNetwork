import {createSlice} from "@reduxjs/toolkit";
import {Dispatch} from "react";
import {dialogsApi} from "../../DAL/api/api";
import {chatApi, MessagesChatType} from "../../DAL/api/chat-api";
import {InferThunkActionCreatorType} from "react-redux";

export type statusWSType = 'ready' | 'pending'

const todosSlice = createSlice({
        name: 'chat',
        initialState: {
            messages: [] as MessagesChatType[],
            status: "pending" as statusWSType

        },
        reducers: {
            setMessagesChatActionCreator(state, action) {
                return {
                    ...state,
                    messages: [...state.messages, ...action.payload]
                }
            },
            deleteMessageAtUnmountAC(state, action){
              return {
                  ...state,
                  messages: [...action.payload]
              }
            },
            getStatusWS(state, action) {
                return {
                    ...state,
                    status: action.payload
                }
            }
        }

    }
)

export const {
    setMessagesChatActionCreator,
    deleteMessageAtUnmountAC,
    getStatusWS,
} = todosSlice.actions
export default todosSlice.reducer



let newMessageHandler: ((messages: MessagesChatType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch<any>) => {
    if (newMessageHandler === null){
        newMessageHandler = (messages) => {
            dispatch(setMessagesChatActionCreator(messages))
        }
    }
    return newMessageHandler
}
let newStatusHandler: ((status: statusWSType) => void) | null = null
const newStatusHandlerCreator = (dispatch: Dispatch<any>) => {
    if (newStatusHandler === null){
        newStatusHandler = (status) => {
            dispatch(getStatusWS(status))
        }
    }
    return newStatusHandler
}

export const startMessagesChatThunkCreator = () => async (dispatch: Dispatch<any>) => {
    chatApi.start()
    chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatApi.subscribe('status-changed', newStatusHandlerCreator(dispatch))
}

export const stopMessagesChatThunkCreator = () => async (dispatch: Dispatch<any>) => {
    chatApi.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatApi.unsubscribe('status-changed', newStatusHandlerCreator(dispatch))
    chatApi.stop()
    dispatch(deleteMessageAtUnmountAC([]))
}
export const sendMessageChatThunkCreator = (message: string) => (dispatch: Dispatch<any>) => {
    chatApi.sendMessageChat(message)
}
