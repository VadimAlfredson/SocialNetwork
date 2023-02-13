import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import usersReducer from "./users_reducers";
import authReducer from "./auth_reducers";
import appReducer from "./app_reducers";
import chatReducer from "./chat_reducer"
import subscriptionsReducer from "./subscriptions_reducers"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";



let store = configureStore({
    reducer: {
        profile: profileReducer,
        dialogs: dialogsReducer,
        users: usersReducer,
        auth: authReducer,
        app: appReducer,
        subscriptions: subscriptionsReducer,
        chat: chatReducer
    }
});

// @ts-ignore
window.store = store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store