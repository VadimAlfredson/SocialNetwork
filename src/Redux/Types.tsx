import {dialogsReducerAction} from "./dialogs_reducer";
import {ProfileType} from "./profile_reducer";
import {Dispatch} from "react";
import {UserActionType} from "./users_reducers";

export type ActionType = dialogsReducerAction | ProfileType | UserActionType

export type DispatchType = Dispatch<ActionType>