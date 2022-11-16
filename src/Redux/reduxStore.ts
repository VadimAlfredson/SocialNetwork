import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import usersReducer from "./users_reducers";
import authReducer from "./auth_reducers";
import appReducer from "./app_reducers";


export type AddStateType = ReturnType<any>

let store: AddStateType = configureStore({
    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer
    }
});

// @ts-ignore
window.store = store;

export default store