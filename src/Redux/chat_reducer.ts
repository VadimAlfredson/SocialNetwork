import {createSlice} from "@reduxjs/toolkit";
import {Dispatch} from "react";
import {dialogsApi} from "../DAL/api/api";

export type MessagesChatType = {
    userId: number,
    userName: string,
    message: string,
    photo: string
}


const todosSlice = createSlice({
        name: 'chat',
        initialState: {
            messages: [] as MessagesChatType[]

        },
        reducers: {
            setMessagesChatActionCreator(state, action) {
                debugger
                return {
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

/*
export const getDialogsThunkCreator = () => async (dispatch: Dispatch<any>) => {
    let response = await dialogsApi.getDialogs()
    dispatch(setDialogs(response))
}
*/
