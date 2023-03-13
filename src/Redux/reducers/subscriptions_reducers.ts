
import {subscriptionsApi} from "../../DAL/api/api";
import {createSlice, ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "../reduxStore";

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
    totalCountSubscriptions: number
}

const todosSlice = createSlice({
    name: 'subscriptions',
    initialState: {
        subscriptions: [] as UserType[],
        updateSubscriptions: false,
        totalCountSubscriptions: 0
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
        getTotalCountSubscriptions(state, action) {
            return {
                ...state,
                totalCountSubscriptions: action.payload
            }
        }
    }
})

export const {setSubscriptions, toggleUpdateSubscriptions, getTotalCountSubscriptions} = todosSlice.actions

export const getSubscriptionsThunkCreator = (friend: boolean): ThunkAction<Promise<void>, RootState, unknown, any> => async (dispatch) => {
    dispatch(toggleUpdateSubscriptions(true))
    let response = await subscriptionsApi.getSubscriptions(true)
    dispatch(setSubscriptions(response.items))
    dispatch(getTotalCountSubscriptions(response.totalCount))
    dispatch(toggleUpdateSubscriptions(false))
}

export default todosSlice.reducer
