import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile_reducer.ts";
import dialogsReducer from "./dialogs_reduser.ts";
import friendsReducer from "./friends_reducer.ts";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsList: friendsReducer,

});

let store = createStore(reducers);

export default store