import {RootState} from "../reduxStore";

export const subscriptions = (state: RootState) => {
    return state.subscriptions.subscriptions
}
export const updateSubscriptions = (state: RootState) => {
    return state.subscriptions.updateSubscriptions
}
export const totalCountSubscriptions = (state: RootState) => {
    return state.subscriptions.totalCountSubscriptions
}