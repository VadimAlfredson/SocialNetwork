import {createSlice} from "@reduxjs/toolkit";
import {Dispatch} from "react";
import {dialogsApi} from "../DAL/api/api";
import {chatApi, MessagesChatType} from "../DAL/api/chat-api";
import {InferThunkActionCreatorType} from "react-redux";



const todosSlice = createSlice({
        name: 'chat',
        initialState: {
            messages: [] as MessagesChatType[]

        },
        reducers: {
            setMessagesChatActionCreator(state, action) {
                return {
                    ...state,
                    messages: action.payload
                }
            },
        }

    }
)

export const {
    setMessagesChatActionCreator
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

export const getMessagesChatThunkCreator = () => async (dispatch: Dispatch<any>) => {
    chatApi.subscribe(newMessageHandlerCreator(dispatch))
}
export const sendMessageChatThunkCreator = (message: string) => async (dispatch: Dispatch<any>) => {
    chatApi.sendMessageChat(message)
}
