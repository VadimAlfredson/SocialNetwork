import {AddStateType} from "./reduxStore";

export const getSubscriptions = (state: AddStateType) => {
    return state.subscriptionsPage.subscriptions
}

export const getUpdateSubscriptions = (state: AddStateType) => {
    return state.subscriptionsPage.updateSubscriptions
}

export const getTotalCountSubscriptions = (state: AddStateType) => {
    return state.subscriptionsPage.totalCountSubscriptions
}