import {dialogsReducerAction} from "./dialogs_reducer";
import {Dispatch} from "react";
import {AuthReducersType} from "./auth_reducers";

export type ActionType = dialogsReducerAction | AuthReducersType

export type DispatchType = Dispatch<ActionType>