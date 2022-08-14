import {combineReducers, createStore, applyMiddleware} from "@reduxjs/toolkit";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import friendsReducer from "./friends_reducer";
import usersReducer from "./users_reducers";
import authReducer from "./auth_reducers";
import thunk from "redux-thunk"


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsList: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

type reducersType = typeof reducers;

export type AddStateType = ReturnType<reducersType>

let store: AddStateType = createStore(reducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store;

export default store