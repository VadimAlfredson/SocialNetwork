import {dialogsReducerAction} from "./dialogs_reducer";
import {ProfileReducerAction} from "./profile_reducer";
import {Dispatch} from "react";

export type ActionType = dialogsReducerAction | ProfileReducerAction

export type DispatchType = Dispatch<ActionType>