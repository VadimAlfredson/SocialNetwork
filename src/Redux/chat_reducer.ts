import {createSlice} from "@reduxjs/toolkit";
import {Dispatch} from "react";
import {dialogsApi} from "../DAL/api/api";
import {chatApi, MessagesChatType} from "../DAL/api/chat-api";
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

export const startMessagesChatThunkCreator = () => (dispatch: Dispatch<any>) => {
    chatApi.start()
    chatApi.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesChatThunkCreator = () => (dispatch: Dispatch<any>) => {
    chatApi.stop()
    chatApi.unsubscribe(newMessageHandlerCreator(dispatch))
    dispatch(deleteMessageAtUnmountAC([]))
}
export const sendMessageChatThunkCreator = (message: string) => (dispatch: Dispatch<any>) => {
    chatApi.sendMessageChat(message)
}
