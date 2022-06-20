import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import friendsReducer from "./friends_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsList: friendsReducer
});

type reducersType = typeof reducers;
export type AddStateType = ReturnType<reducersType>

let store:AddStateType = createStore(reducers);

export default store