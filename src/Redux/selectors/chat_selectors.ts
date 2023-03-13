import {RootState} from "../reduxStore";

export const messages = (state: RootState) => {
    return state.chat.messages
}
export const status = (state: RootState) => {
    return state.chat.status
}