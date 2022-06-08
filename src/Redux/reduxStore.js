import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reduser";
import friendsReducer from "./friends_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsList: friendsReducer,

});

let store = createStore(reducers);

export default store