import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import usersReducer from "./users_reducers";
import authReducer from "./auth_reducers";
import appReducer from "./app_reducers";
import subscriptionsReducer from "./subscriptions_reducers"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";



let store = configureStore({
    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer,
        subscriptionsPage: subscriptionsReducer
    }
});

// @ts-ignore
window.store = store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store