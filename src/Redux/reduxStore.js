import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

export default store