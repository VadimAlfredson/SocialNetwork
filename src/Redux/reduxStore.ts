import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./reducers/profile_reducer";
import dialogsReducer from "./reducers/dialogs_reducer";
import usersReducer from "./reducers/users_reducers";
import authReducer from "./reducers/auth_reducers";
import appReducer from "./reducers/app_reducers";
import chatReducer from "./reducers/chat_reducer"
import subscriptionsReducer from "./reducers/subscriptions_reducers"
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