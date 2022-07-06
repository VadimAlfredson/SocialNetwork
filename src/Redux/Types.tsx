import {dialogsReducerAction} from "./dialogs_reducer";
import {ProfileReducerAction} from "./profile_reducer";
import {Dispatch} from "react";
import {UserActionType} from "./users_reducers";

export type ActionType = dialogsReducerAction | ProfileReducerAction | UserActionType

export type DispatchType = Dispatch<ActionType>