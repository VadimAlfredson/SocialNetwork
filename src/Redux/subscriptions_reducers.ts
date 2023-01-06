
import {subscriptionsApi} from "../components/api/api";
import {createSlice, ThunkAction} from "@reduxjs/toolkit";
import {AddStateType} from "./reduxStore";

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null;
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean,
}

type usersStateType = {
    subscriptions: UserType[],
    updateSubscriptions: boolean
}

const todosSlice: any = createSlice({
    name: 'subscriptions',
    initialState: {
        subscriptions: [],
        updateSubscriptions: false
    } as usersStateType,
    reducers: {
        setSubscriptions(state, action) {
            return {
                ...state,
                subscriptions: [...action.payload]
            }
        },
        toggleUpdateSubscriptions(state, action) {
            return {
                ...state,
                updateSubscriptions: action.payload
            }
        },
    }
})

export const {setSubscriptions, toggleUpdateSubscriptions} = todosSlice.actions

export const getSubscriptionsThunkCreator = (friend: boolean): ThunkAction<Promise<void>, AddStateType, unknown, any> => async (dispatch) => {
    dispatch(toggleUpdateSubscriptions(true))
    let response = await subscriptionsApi.getSubscriptions(true)
    dispatch(setSubscriptions(response.items))
    dispatch(toggleUpdateSubscriptions(false))
}

export default todosSlice.reducer
