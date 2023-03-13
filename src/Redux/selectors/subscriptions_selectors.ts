import {RootState} from "../reduxStore";

export const getSubscriptions = (state: RootState) => {
    return state.subscriptions.subscriptions
}
export const getUpdateSubscriptions = (state: RootState) => {
    return state.subscriptions.updateSubscriptions
}
export const totalCountSubscriptionsSelector = (state: RootState) => {
    return state.subscriptions.totalCountSubscriptions
}